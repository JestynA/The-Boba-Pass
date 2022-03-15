
const express = require(express)

const app = express();

app.get('/',(req, res) => {
    return res.status(200).sendFile(__dirname,'./src/index.html')
})