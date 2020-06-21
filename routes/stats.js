const express = require('express')
const Pizza = require('../models/Pizza')
const User = require('../models/User')
const Employee = require('../models/User')

const router = new express.Router()

router.get('/', (req, res) => {
  User
    .count({})
    .then(users => {
      Pizza
        .count({})
        .then(products => {
          Employee
          .count({})
          .then(employees => {

            return res.status(200).json({
              products,
              users,
              employees
            })
            
          })
        })
    }).then(() => {
      console.log("route / working")
  }).catch(err => {
      console.log(err);
      return res.sendStatus(500);
  })
})

module.exports = router
