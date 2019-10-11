const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/image-upload', {
  useNewUrlParser: true,
});

// require model
require('./models/image');

const app = require('./app');
app.set('port', 7778);

const server = app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${server.address().port}`);
});
