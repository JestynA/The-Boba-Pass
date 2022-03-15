// const path = require('path');
// const express = require('express');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());

// // display index.html on root route
// app.get('/',(req, res) => {
//     return res.status(200).sendFile(path.join(__dirname,'../src/index.html'))
// })

// // invalid link handler
// app.get('*', (req, res) => {
//     res.status(404).send();
// })

// app.use((err, req, res, next) => {
//     const defaultErr = {
//       log: 'Express error handler caught unknown middleware error',
//       status: 400,
//       message: { err: 'An error occurred' }, 
//     };
//     const errorObj = Object.assign(defaultErr, err);
//     console.log(errorObj.log);
//     res.set('Content-Type','application/json');
//     return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
//   });

//   app.listen(PORT, () => {
//     console.log(`Server listening on port: ${PORT}`);
//   });

//   module.exports = app;