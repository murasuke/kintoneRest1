import { KintoneRestAPIClient } from "@kintone/rest-api-client";  

const client = new KintoneRestAPIClient({
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
        const record = await client.record.getRecords({ app: "3" });
        console.log(record.records.length);
        console.log(JSON.stringify(record.records[1], null, 4));
    } catch (err) {
        console.log(err);
    }
}
func();