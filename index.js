const express = require('express')
const app = express();

app.listen(3000, () => {
    console.log('server started.!')
})

app.get('/api/v1/test', (req, res) => {
    res.status(200).json({'Message' : 'success'});
    }
)

