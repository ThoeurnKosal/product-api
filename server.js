const http = require('http');

const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
        .then(()=>{
            console.log('Database connection success');
        })
        .catch(err => {
            console.error('Database connection error');
        });


server.listen(port);