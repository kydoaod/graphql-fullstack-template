import express from 'express';
import path from 'path';

const app = express();

//Load UI static files
app.use(express.static(path.join(__dirname, './views/build')));
app.use('/', express.static(path.join(__dirname, './views/build')));

export default app;
