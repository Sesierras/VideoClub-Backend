const router = require('express').Router();
const movie = require('../model/model');
const cast = require('../model/model');
const direction = require('../model/model');
const ranking = require('../model/model');

router.get("/ranking", (req, res) => {
    ranking.find((err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.post("/newRanking", (req, res) => {
    ranking.create(req.body, (err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.put("/updateRanking", (req,res) => {
    ranking.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true}, (err,resul) => {
        if (err) throw new Error(err);
        res.json(result);
    })
});

router.delete("/removeRanking", (req,res) => {
    ranking.findOneAndRemove({_id:req.body.id}, (err,result) =>{
        if (err) throw new Error(err);
        res.end();
    });
});

router.get("/direction", (req, res) => {
    direction.find((err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.post("/newDirection", (req, res) => {
    direction.create(req.body, (err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.put("/updateDirection", (req,res) => {
    direction.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true}, (err,result) => {
        if (err) throw new Error(err);
        res.json(result);
    })
});

router.delete("/removeDirection", (req,res) => {
    direction.findOneAndRemove({_id:req.body.id}, (err,result) =>{
        if (err) throw new Error(err);
        res.end();
    });
});

router.get("/cast", (req, res) => {
    cast.find((err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.post("/newCast", (req, res) => {
    cast.create(req.body, (err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.put("/updateCast", (req,res) => {
    cast.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true}, (err,result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.delete("/removeCast", (req,res) => {
    cast.findOneAndRemove({_id:req.body.id}, (err,result) =>{
        if (err) throw new Error(err);
        res.end();
    });
});


router.get("/", (req, res) => {
    movie.find((err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.post("/newMovie", (req, res) => {
    movie.create(req.body, (err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.put("/updateMovie", (req,res) => {
    movie.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true}, (err,result) => {
        if (err) throw new Error(err);
        res.json(result);
    })
});

router.delete("/removeMovie", (req, res) => {
    movie.findOneAndRemove({ _id: req.body.id }, (err, result) => {
        if (err) throw new Error(err);
        res.end(result);
    });
});

module.exports = router;