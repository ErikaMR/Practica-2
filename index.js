// Configuraciones globales (app/index(main)
const exphbs = require('express-handlebars');
const PORT = 4040;

const router = require('./router');
const app = router.app;

app.engine('.hbs', exphbs({extname: 'hbs'}));
app.set('view engine', '.hbs');

app.listen(PORT);

