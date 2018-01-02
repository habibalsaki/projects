'use strict';

const http = require('http');
const url = require('url');
const qs = require('querystring');
let routes = {
    'GET' : {
        '/' : (req,res) => {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end('<h1>You are on root page</h1>');
        },
        '/about' : (req,res) => {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end('<h1>You are on about page</h1>');
        }
    },
    'POST' : {
        'api/login' : (req, res) => {
            req.on('data', data => {
                body += data;

            });

            req.on('end', () => {
                let params = qs.parse(body);
                console.log(params);
            })
        }
    },
    'NA': (req, res) => {
        res.writeHead(404);
        res.end('Content not found');
    }
}

function router(req, res){
    let baseURI = url.parse(req.url);
    let resolvedRoute = routes[req.method][baseURI.pathname];

    if(resolvedRoute != undefined){
        req.queryParams = baseURI.query;
        resolvedRoute(req,res);
    }
    else{
        routes['NA'](req,res);
    }
}

http.createServer(router).listen(3000, () => {
    console.log("Running on port 3000");
})
