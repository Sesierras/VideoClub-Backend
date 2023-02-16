const router = require('express').Router();
const movie = require('../model/model');
const raiting = require('../model/model');
const cast = require('../model/model');
const direction = require('../model/model');


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

router.put("/actualizarMovie", (req,res) => {
    movie.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true}, (err,resul) => {
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




router.get("/", (req, res) => {
    raiting.find((err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.post("/newRaiting", (req, res) => {
    raiting.create(req.body, (err, result) => {
        if (err) throw new Error(err);
        res.send(result);
    });
});

router.put("/actualizarRaiting", (req,res) => {
    raiting.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true}, (err,resul) => {
        if (err) throw new Error(err);
        res.json(result);
    })
});

router.delete("/removeRaiting", (req,res) => {
    raiting.findOneAndRemove({_id:req.body.id}, (err,result) =>{
        if (err) throw new Error(err);
        res.end();
    })
})


router.get("/", (req, res) => {
    cast.find((err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.post("/newCast", (req, res) => {
    cast.create(req.body, (err, result) => {
        if (err) throw new Error(err);
        res.send(result);
    });
});

router.put("/actualizarCast", (req,res) => {
    cast.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true}, (err,resul) => {
        if (err) throw new Error(err);
        res.json(result);
    })
});

router.delete("/removeCast", (req,res) => {
    cast.findOneAndRemove({_id:req.body.id}, (err,result) =>{
        if (err) throw new Error(err);
        res.end();
    })
})


router.get("/", (req, res) => {
    direction.find((err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.post("/newDirection", (req, res) => {
    direction.create(req.body, (err, result) => {
        if (err) throw new Error(err);
        res.send(result);
    });
});

router.put("/actualizarDirection", (req,res) => {
    direction.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true}, (err,resul) => {
        if (err) throw new Error(err);
        res.json(result);
    })
});

router.delete("/removeDirection", (req,res) => {
    direction.findOneAndRemove({_id:req.body.id}, (err,result) =>{
        if (err) throw new Error(err);
        res.end();
    })
})





module.exports = router;