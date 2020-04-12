"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_api_client_1 = require("@kintone/rest-api-client");
//const {  KintoneRestAPIClient } = require('@kintone/rest-api-client');
const client = new rest_api_client_1.KintoneRestAPIClient({
    baseUrl: "https://devdooxww.cybozu.com/",
    // Use password authentication
    // auth: {
    //   username: process.env.KINTONE_USERNAME,
    //   password: process.env.KINTONE_PASSWORD,
    // },
    // Use API token authentication
    //auth: { apiToken: process.env.KINTONE_API_TOKEN }
    auth: { apiToken: "YUXO2qp0TlXpV9WyULs5dyRhIkVeTdtOF2aZqa5x" }
    // Use session authentication if `auth` is omitted (in browser only)
});
const func = async () => {
    try {
        const result = await client.record.addRecord({
            app: 3,
            record: {
                "チェックボックス": {
                    "type": "CHECK_BOX",
                    "value": [
                        "sample1"
                    ]
                },
                "文字列__1行_": {
                    "type": "SINGLE_LINE_TEXT",
                    "value": "RestAPIから"
                },
                "数値": {
                    "type": "NUMBER",
                    "value": "1234"
                },
                "ラジオボタン": {
                    "type": "RADIO_BUTTON",
                    "value": "sample2"
                },
            }
        });
        console.log(result.id);
    }
    catch (err) {
        console.log(err);
    }
};
func();
