const express = require('express')
const axios = require('axios')
const config = require('./.config')
const cors = require('cors')


const app = express()
app.use(cors())

let params = {
    headers: 
    {
        'AUTHORIZATION': `Bearer ${config.yelp_api_key}`
    }
}

app.all("*", (req, res) => {

    axios.get(req.query.url, params)
    .then(response => {
        res.json(response.data)
    })
    .catch(error => {
        res.json(error)
    })
}) 

app.listen(8080, () => console.log('Listening on port 8080'))