#!/usr/bin/env node
const fs = require('fs');
const driver = require('./driver.js');
if(process.argv.length === 2) {
    driver.discover({
        start: function (protocol, name) {
            console.log([
                'network',
                protocol,
                '"Unknown"',
                JSON.stringify(`${name} (${protocol})`)
            ].join(' '));
        },
        emit: function (name, url, model, options, location="") {
            console.log([
                'network',
                url,
                JSON.stringify(model),
                JSON.stringify(name),
                JSON.stringify(options),
                JSON.stringify(location)
            ].join(' '));
        }
    });
} else {
    const bPromise = new Promise(res => {
        let chunks = [];
        process.stdin.on('data', chunk => chunks.push(chunk));
        process.stdin.on('end', () => res(Buffer.concat(chunks)));
    });
    driver.print({
        deviceURI: process.env.DEVICE_URI,
        printer: process.env.PRINTER,
        username: process.env.AUTH_USERNAME,
        password: process.env.AUTH_PASSWORD,
        localAccount: process.argv[3],
        jobId: process.argv[2],
        copies: Number(process.argv[5])||1,
        hold: () => process.exit(5),
        requestAuthentication: () => {
            process.stderr.write('ATTR: auth-info-required=username,password');
            process.exit(2);
        },
        throw: (errorMessage) => {
            if(errorMessage)
                process.stderr.write('ERROR: ' + errorMessage);
            process.exit(1);
        },
        finish: () => process.exit(0),
        buffer: () => bPromise,
        // TODO: Actual options
        color: true,
        duplex: 'none',
        size: 'NA_LETTER'
    });
}
