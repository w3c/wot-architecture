// Assertion extractor
// Usage:
//  % npm i cheerio
//  % node extract.js > manual.csv

const https = require('https'); 
const cheerio = require('cheerio');

const docUrl = 'https://raw.githubusercontent.com/w3c/wot-architecture/main/index.html'
const addAssertionTxt = true; // set true to add assertion text on fourth column 

const req = https.get(docUrl, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const $ = cheerio.load(data);
        console.log(`"ID","Status","Comment"${addAssertionTxt?',"Assertion"':''}`);
        $('.rfc2119-assertion').each(function (i) {
            const id = $(this).attr('id');
            let assertionTxt = "";
            if (addAssertionTxt) {
                assertionTxt = ',"'+$(this).text().trim().replace(/\r?\n/g,'').replace(/\s+/g,' ').replace(/"/g, '""')+'"';
            }
            console.log(`"${id}","null","not testable with Assertion Tester"${assertionTxt}`);
        });
    });
}).on('error', (e) => {
    console.error(e);
});
