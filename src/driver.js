// Or put at the SDK path in the install folder
const { PrintServer, findServers } = require('/usr/lib/mobiusdrv/sdk');

const discover = async discovery => {
    discovery.start('mobius', 'MobilityPrint');
    const servers = await findServers();
    for(const server of servers) {
        try {
            const printers = await server.getPrinters(true);
            printers.forEach(printer => {
                const d_dat = btoa(JSON.stringify({
                    s: server.host,
                    z: server.port,
                    q: printer.name
                })).replaceAll('+', '-').replaceAll('/','_').replaceAll('=','');
                try {
                    discovery.emit(
                        printer.name + ' (' + printer.description + ')',
                        'mobius://n' + /*Date.now()*/d_dat + '.mbp/?port=' + server.port + '&server=' + server.host + '&printer=' + printer.name,
                        printer.name,
                        /*"MFG:MobilityPrint;MDL:z" + d_dat + ';CMD:PDF;'*/
                        "MFG:Generic;MDL:PDF Printer;CMD:PDF;"
                    );
                } catch (error) {
                    // Swallow the error
                }
            });
        } catch (error) {
            // Swallow the error
        }
    };
};

// Actually print stuff
const print = async job => {
    let url;
    try {
        url = new URL(job.deviceURI);
    } catch (error) {
        return job.throw('Invalid URL');
    }
    if(url.protocol != 'mobius://' && url.protocol != 'mobius:') {
        return job.throw("Invalid printer");
    }
    if(!(job.username && job.password)) {
        return job.requestAuthentication();
    }
    const buffer = await job.buffer();
    const server = new PrintServer(url.searchParams.get('server'), Number(url.port||'9163')||9163);
    try {
        await server.print(
            url.searchParams.get('printer'),
            new Blob([buffer], { type: 'application/pdf' }),
            {
                copies: job.copies,
                color: job.color,
                duplex: job.duplex,
                size: job.size,
                username: job.username,
                password: job.password,
                name: job.name || "Print Job"
            }
        );
        job.finish();
    } catch (error) {
        job.throw(String(error));
    }
};

module.exports = { discover, print };