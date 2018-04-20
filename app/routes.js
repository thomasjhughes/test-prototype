var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post('/juggling-balls-answer', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var jugglingBalls = req.session.data['juggling-balls']

  // Check whether the variable matches a condition
  if (jugglingBalls == "3 or more"){
    // Send user to next page
    res.redirect('/juggling-trick')
  }
  else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }

})

router.post('/juggling-object-answer', function (req, res) {
  var objects = req.session.data['objects']

  for (let index in objects){
    if(objects[index] == 'sharp-objects'){
      res.redirect('/ineligible-2')
    }
    else {
      res.redirect('/check-your-answers')
    }
  }
})

module.exports = router
