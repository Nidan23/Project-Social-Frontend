const axios = require('axios')
const express = require('express')
const fs = require('fs')

const app = express()

const PORT = process.env.PORT || 3000

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
  })

app.get('/users/all', (req,res) => {
    axios.get('http://localhost:8080/users/all')
        .then(response => {
            return res.status(200).json(JSON.parse(JSON.stringify(response.data)))
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({ type: 'error', message: err.message })
        })
})

app.get('/users/:id', (req,res) => {
    let id = parseInt(req.params.id)

    axios.get(`http://localhost:8080/users/${id}`)
        .then(response => {
            return res.status(200).json(JSON.parse(JSON.stringify(response.data)))
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({ type: 'error', message: err.message })
        })
    })

app.get('/posts/all', (req,res) => {
    axios.get('http://localhost:8080/posts/all')
        .then(response => {
            return res.status(200).json(JSON.parse(JSON.stringify(response.data)))
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({ type: 'error', message: err.message })
        })
    })

app.listen(PORT, () => console.log(`listening on ${PORT}`))