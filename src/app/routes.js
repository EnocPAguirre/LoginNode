module.exports = (app, passport) => {

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/login', (req, res) => {
    res.render('login', {
      message: req.flash('LoginMessage')
    });
  });

  app.post('/login', (req, res) => {

  });

  app.get('/signup', (req, res) => {
    res.render('signup');
  });
};
