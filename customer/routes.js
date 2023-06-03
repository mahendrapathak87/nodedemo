
const routesHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    console.log(url, method);

    if(url === '/') {
        res.write(`
        <html>
            <body>
                <h1>Hello Welcome to node</h1>
                <div>
                    <form method="POST" action="create-user">
                        <div>
                            <label>Username</label>
                            <input type="text" name="username" />
                        </div>
                        <div><input type="submit" /></div>
                    </form>
                </div>
            </body>
        </html>`);
        return res.end();
    }

    if(url ==='/users') {
        res.write('<html><body><ul><li>Dummy user 1</li><li> Dummy user 2</li></ul></body></html>');
        return res.end();
    }

    if(url =='/create-user'  && method =='POST') {
        const body = [];
        req.on('data',(chunk) => {
            body.push(chunk);
        });

        req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
        });
        res.write('<html><body><div>welcome here</div></body></html>');
        return res.end();
    }
}

module.exports ={
    routesHandler : routesHandler
}