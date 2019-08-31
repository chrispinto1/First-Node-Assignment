const requestListener = (req,res) => {
    const route = req.url;
    const method = req.method
    if(route === '/'){
        res.write('<html>');
        res.write('<head><title>My First App</title></head>')
        res.write('<body><h1>Welcome to my first Node.js application. You can also go to /users for another page</h1><form action="/create-user" method="POST"><input type="text" placeholder="username" name="username"><button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    if(route === '/users'){
        res.write('<html>');
        res.write('<head><title>My First App</title></head>')
        res.write('<body><h1>Here is a list of users: <ul><li>John</li><li>Michael</li><li>Luis</li></ul></h1></body>')
        res.write('</html>')
        return res.end();
    }
    if(route === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (data) => {
            body.push(data)
        })
        req.on('end', () => {
            const parsedData = Buffer.concat(body).toString();
            console.log(parsedData.split("=")[1]);
            res.statusCode = 302;
            res.setHeader('Location' , '/')
            res.end();
        })
    }
}

module.exports = requestListener