const router = require('express').Router();
const movie = require('../model/model');
const raiting = require('../model/model');

router.get("/", (req, res) => {
    movie.find((err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.post("/newMovie", (req, res) => {
    movie.create(req.body, (err, result) => {
        if (err) throw new Error(err);
        res.send(result);
    });
});

router.delete("/removeMovie", (req, res) => {
    movie.findOneAndRemove({ _id: req.body.id }, (err, result) => {
      if (err) throw new Error(err);
      res.end(result);
    });
  });


router.get("/", (req, res) => {
    raiting.find((err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.post("/", (req, res) => {
    raiting.create(req.body, (err, result) => {
        if (err) throw new Error(err);
        res.send(result);
    });
});

router.delete("/:id", (req,res) => {
    raiting.findOneAndRemove({_id:req.body.id}, (err,result) =>{
        if (err) throw new Error(err);
        res.end();
    })
})



module.exports = router;