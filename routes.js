const requestListener = (req,res) => {
    const users =['John', 'Michael'];
    let route = req.url;
    if(route === '/'){
        res.write('<html>');
        res.write('<head><title>My First App</title></head>')
        res.write('<body><h1>Welcome to my first Node.js application. You can also go to /users for another page</h1></body>')
        res.write('</html>')
        return res.end();
    }
}

module.exports = requestListener