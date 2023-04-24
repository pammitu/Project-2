// defining the home controller
function home(req, res) {
    res.render('index', {title: 'Book Club'});
}

// export controller function so that it's functionality can be accessed in other module files
module.exports = {
    home
};