const express = require("express");
const app = express();

////////////////////////改以下參數即可////////////////////////
//一、選擇帳號，是否為測試環境
const MerchantID = "3002607"; //必填
const HashKey = "pwFHCqoQZGmho4w6"; //3002607
const HashIV = "EkRm7iFT261dpevs"; //3002607
const isStage = true; // 測試環境： true；正式環境：false
const timestamp = Date.now();

//二、輸入參數
function getParameters() {
  return {
    MerchantID: MerchantID,
    MerchantTradeNo: MerchantTradeNo,
    MerchantTradeDate: MerchantTradeDate,
    PaymentType: "aio",
    TotalAmount: 100,
    TradeDesc: "shopping",
    ItemName: "Item",
    ReturnURL: "https://www.ecpay.com.tw/",
    ChoosePayment: "ALL",
  };
}

////////////////////////以下參數不用改////////////////////////
const stage = isStage ? "-stage" : "";
const APIURL = `https://payment${stage}.ecpay.com.tw/Cashier/AioCheckOut/V5`;

const MerchantTradeNo = `ecpay${new Date().getFullYear()}${(
  new Date().getMonth() + 1
)
  .toString()
  .padStart(2, "0")}${new Date()
  .getDate()
  .toString()
  .padStart(2, "0")}${new Date()
  .getHours()
  .toString()
  .padStart(2, "0")}${new Date()
  .getMinutes()
  .toString()
  .padStart(2, "0")}${new Date()
  .getSeconds()
  .toString()
  .padStart(2, "0")}`;

const MerchantTradeDate = new Date().toLocaleDateString("zh-TW", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

//三、、計算 CheckMacValue
function CheckMacValueGen(parameters, algorithm, digest) {
  const crypto = require("crypto");

  const dotNetUrlEncodeMap = {
    "%2D": "-",
    "%5F": "_",
    "%2E": ".",
    "%21": "!",
    "%2A": "*",
    "%28": "(",
    "%29": ")",
    "%20": "+",
  };

  const result = Object.entries(parameters)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")
    .split("&")
    .sort((a, b) => a.split("=")[0].localeCompare(b.split("=")[0]))
    .join("&");

  let encodedString = encodeURIComponent(
    `HashKey=${HashKey}&${result}&HashIV=${HashIV}`
  );

  Object.entries(dotNetUrlEncodeMap).forEach(([encoded, decoded]) => {
    encodedString = encodedString.replace(new RegExp(encoded, "g"), decoded);
  });

  return crypto
    .createHash(algorithm)
    .update(encodedString.toLowerCase())
    .digest(digest)
    .toUpperCase();
}
const CheckMacValue = CheckMacValueGen(getParameters(), "sha256", "hex");

//四、將所有的參數製作成 payload
const AllParams = { ...getParameters(), CheckMacValue };
const inputs = Object.entries(AllParams)
  .map(function (param) {
    return `<input name=${param[0]} value="${param[1].toString()}"><br/>`;
  })
  .join("");

//五、製作送出畫面
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>測試</title>
</head>
<body>
    <form id="paymentForm" target="_blank" method="post" action="${APIURL}">
${inputs}

    </form>
      <script>
      window.onload = function() {
      document.getElementById('paymentForm').submit();
    };
  </script>
</body>
</html>
`;

app.get(`/${MerchantTradeNo}`, (req, res) => {
  res.send(htmlContent);
});

app.listen(3000, () => {
  console.log(`http://localhost:3000/${MerchantTradeNo}`);
});
 