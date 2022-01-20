require('./db/mongoose.js');
const express = require('express');
const apiRouter = require('./routes/apiRoutes');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use('/product', apiRouter);
app.listen(port, () => {
	console.log('Server is running on port ' + port);
});
