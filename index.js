const express = require('express')
const axios = require('axios')
const config = require('./.config')

const app = express()

//axios.default.headers.common['Authorization'] = `Bearer ${config.yelp_api_key}`

let params = {
    headers: 
    {
        'AUTHORIZATION': `Bearer ${config.yelp_api_key}`
    }
}

app.all("*", (req, res) => {

    console.log(req.query.url)
    axios.get(req.query.url, params)
    .then(response => {
        res.json(response.data)
    })
    .catch(error => {
        console.error(error)
        res.json(error)
    })
}) 

app.listen(8080, () => console.log('Listening on port 8080'))