
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'), //parses information from POST


//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }))


var mongoose = require('mongoose');

var assignSchema = mongoose.Schema({
 
  theatreName: String,
  movieName: String,
  fromDate:String,
  toDate:String,
  price:String,
  seats:String
  /*moviLanguage: String,
  moviGenre: String,
  moviPoster: String,
  moviDirector: String,
  moviActors: String*/
 });
var Assign = mongoose.model('Assign', assignSchema, 'assign');

//Movie
router.get('/getAssign', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Assign.find({}, function (err, docs) {
         res.json(docs);
         
    });
});

router.get('/getAssign/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Assign.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);
         
    });
});

router.post('/addAssign', function(req, res){
 console.log(req.body);
  
 
  var name = req.body.theatreName;
  var name1 = req.body.movieName;
  var name3 = req.body.fromDate;
  var name4 = req.body.toDate;
  var name5 =  req.body.price;
   var name6 =  req.body.seats;
 // var name2 = req.body.theatreTime;
  /*var language = req.body.Language;
  var genre = req.body.Genre;
  var poster = req.body.Poster;
  var director = req.body.Director;
  var actors = req.body.Actors;*/

  var assign = new Assign({
   
    theatreName: name,
    movieName: name1,
    fromDate:name3,
    toDate:name4,
    price: name5,
    seats:name6
    // theatreTime: name2,
   /*moviLanguage: language,
    moviGenre: genre,
    moviPoster: poster,
    moviDirector: director,
    moviActors: actors*/
   
  });

  assign.save(function(err, docs){
    if ( err ) throw err;
    console.log("Assigned Successfully");
    res.json(docs);
  });


  })

router.delete('/deleteAssign/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Assign.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateAssign/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Assign.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      console.log(data);
      res.json(data);
    });
})


// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;



