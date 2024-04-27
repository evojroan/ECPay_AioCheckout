# 綠界全方位金流票範例程式

## 這是什麼？

這是綠界全方位金流的簡單範例，跳轉進入全方位金流的付款頁面。

## 如何使用？

1. 先確定電腦可以執行 Node.js。
2. 安裝 Node.js 後，請再安裝 open 套件。
   `npm install open`
3. 打開本專案的 app.js 檔。
4. 「一、選擇帳號，是否為測試環境」如果有要更換測試帳號，或改成正式環境(正式帳號請向綠界註冊申請)，才需要更改；否則本段落不需要修改。
5. 於「二、輸入參數」輸入要修改的參數。由於本示範檔以輸入最少的參數便能進入付款頁面為目的，全方位金流其他更多的參數請看[技術文件](https://developers.ecpay.com.tw/?p=2509)。
6. 執行 app.js。例如以 VS Code 開啟並按下 F5 再於跳出的選單選擇 Node.js。
7. 會以預設瀏覽器開啟表格，按下按鈕後跳轉到全方位金流付款頁面。
8. 完成付款。
9. 完成付款後，再至[廠商管理後台](https://vendor-stage.ecpay.com.tw/User/LogOn_Step1)查詢該筆訂單。

## 關於測試帳號與測試信用卡卡號

1. 測試帳號的串接金鑰取得與測試環境的信用卡卡號請看：[技術文件](https://developers.ecpay.com.tw/?p=2856)
2. 注意！本檔案僅為簡單範例展示，實務上串接金鑰為機密，不應存放於網頁前端，例如 HTML / JavaScript / CSS 檔案內！

## 本範例使用的技術

Node.js(crypto、fs、open)

## 本程式作者其他與綠界相關的程式

1. 檢查碼產生器
   [GitHub](https://github.com/evojroan/checkmacvaluegen)
   [Medium](https://medium.com/@roan6903/%E7%B6%A0%E7%95%8C%E7%A7%91%E6%8A%80%E6%AA%A2%E6%9F%A5%E7%A2%BC-checkmacvalue-%E7%94%A2%E7%94%9F%E5%99%A8-2fd732a82877)
2. 電子發票前置作業與資料驗證
   [GitHub](https://github.com/evojroan/ECPAy_EInvoice_Data_Verification)
   [Medium](https://medium.com/@roan6903/ecpay-einvoice-data-verification-cbd212cb6d63)

## 本程式作者

Roan，專長是碎碎念。

- [Roan 的網誌](https://medium.com/@roan6903)
- [Roan 的 GitHub](https://github.com/evojroan)
