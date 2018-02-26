/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('pagespeedonline', 'v2', () => {
        /** now we can use gapi.client.pagespeedonline */

        run();
    });

    async function run() {
        /**
         * Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other
         * information.
         */
        await gapi.client.pagespeedapi.runpagespeed({
            filter_third_party_resources: true,
            locale: "locale",
            rule: "rule",
            screenshot: true,
            strategy: "strategy",
            url: "url",
        });
    }
});
