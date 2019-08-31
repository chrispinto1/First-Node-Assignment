const requestListener = (req,res) => {
    let route = req.url;
    if(route === '/'){
        res.write('<html>');
        res.write('<head><title>My First App</title></head>')
        res.write('<body><h1>Welcome to my first Node.js application. You can also go to /users for another page</h1></body>')
        res.write('</html>')
        return res.end();
    }
    else if(route === '/users'){
        res.write('<html>');
        res.write('<head><title>My First App</title></head>')
        res.write('<body><h1>Here is a list of users: <ul><li>John</li><li>Michael</li><li>Luis</li></ul></h1></body>')
        res.write('</html>')
        return res.end();
    }
}

module.exports = requestListener