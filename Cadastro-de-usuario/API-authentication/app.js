/* imports */ 
require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

/* Open Routr - Public Route*/
app.get('/', (req, res) => {
    res.status(200).json({msg: 'olá mundo'})
})
app.listen(3000)

