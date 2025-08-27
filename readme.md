# 綠界全方位金流票範例程式

## 這是什麼？

這是綠界全方位金流的簡單範例，產生跳轉進入全方位金流付款頁面的連結。

## 如何使用？

1. 先確定電腦可以執行 Node.js。
2. 打開本專案的 app.js 檔。
3. 「一、選擇帳號，是否為測試環境」如果有要更換測試帳號，或改成正式環境(正式帳號請向綠界註冊申請)，才需要更改；否則本段落不需要修改。
4. 於「二、輸入參數」輸入要修改的參數。其中 MerchantTradeNo、 MerchantTradeDate 將自動計算，也可自行設定。由於本示範檔以輸入最少的參數便能進入付款頁面為目的，全方位金流其他更多的參數請看[技術文件](https://developers.ecpay.com.tw/?p=2509)。
5. 於終端機啟動伺服器 `node app.js`
6. 點選終端機回傳的網址，進入全方位金流付款頁面。
7. 完成付款。
8. 完成付款後，再至[廠商管理後台](https://vendor-stage.ecpay.com.tw/User/LogOn_Step1)查詢該筆訂單。

## 關於測試帳號與測試信用卡卡號

1. 測試帳號的串接金鑰取得與測試環境的信用卡卡號請看：[技術文件](https://developers.ecpay.com.tw/?p=2856)
2. 注意！本檔案僅為簡單範例展示，實務上串接金鑰為機密，不應存放於網頁前端，例如 HTML / JavaScript / CSS 檔案內！

## 本範例使用的技術

Node.js

## 相關參考

[全方位金流建立訂單示範](https://support.ecpay.com.tw/16608/)

## 本程式作者其他與綠界相關的程式

[綠界技術串接](https://medium.com/@roan6903/list/b0325094c59f)

## 本程式作者

Roan，專長是碎碎念。

- [Roan 的網誌](https://medium.com/@roan6903)
- [Roan 的 GitHub](https://github.com/evojroan)
