const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const apiRouter = require('./routes/apiRoutes');

const PORT = process.env.PORT || 8080;

app.use('/api', apiRouter);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
