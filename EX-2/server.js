// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);
    if (method === 'GET') {
        switch (url) {
            case '/':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <head><title>Home</title></head>
                        <body>
                            <h1>Welcome to the Home Page</h1>
                            <p>This is a simple Node.js server.</p>
                        </body>
                    </html>
                `);
                break;
            case '/about':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(` 
                <html>
                    <p>About us: At CADT, we love Node.js</p>
                </html>
                `);
                break;
            case '/contact-us':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <p>You can reach via email...</p>
                    </html>
                `);
                break;
            case '/products':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <p>Buy one get one</p>
                    </html>
                `);
                break;
            case '/projects':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <p>Here are awesome projects</p>
                    </html>
                `);
                break;
        }
    }   else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 Not Found');
    }

//     if (url === '/' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end(`
//             <html>
//                 <head><title>Home</title></head>
//                 <body>
//                     <h1>Welcome to the Home Page</h1>
//                     <p>This is a simple Node.js server.</p>
//                 </body>
//             </html>
//         `);
//     }
//     // Implement more routes here
//     else if (url === '/about' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end(
//            ` <html>
//                 <p>About us: At CADT, we love Node.js</p>
//             </html>`
//         )
//     } else if (url === '/contact-us' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end(
//             `<html>
//                 <p>You can reach us via email...</p>
//             </html>`
//         )
//     } else if (url === '/products' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end(
//            ` <html>
//                 <p>Buy one get one</p>
//             </html>`
//         )
//     } else if (url === '/projects' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end(
//             `<html>
//                 <p>Here are our awesome projects</p>
//             </html>`
//         )
//     }
    // else {
    //     res.writeHead(404, { 'Content-Type': 'text/plain' });
    //     return res.end('404 Not Found');
    // }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
