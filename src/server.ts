'use strict';
import * as hapi from 'hapi';
let server =  new hapi.Server({
    port: process.env.PORT
});

server.route({
    method: 'GET',
    path:'/',
    handler: (req,res) => {
        return 'demo wokrs again'
    }
});

async function start () {
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
}

start();