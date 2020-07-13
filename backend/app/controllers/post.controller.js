const db = require("../models");
const Post = db.posts;

exports.create = (req, res) => {
  if(!req.body.name){
      res.status(400).send({
          message: "El nombre no puede estar vacío"
      });
      return;
  }

  const post = {
      name: req.body.name,
      description: req.body.description,
  };

  Post.create(post)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error no controlado"
        })
    })
};

exports.findAll = (req, res) => {
  Post.findAll({})
    .then(data => {
        res.send({data});
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error no controlado"
        });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Post.destroy({ where: {id: id} })
    .then(data => {
        if(data == 1) {
            res.send({
                deleted: id,
                message: "Post eliminado con exitosamente"
            });
        } else {
            res.send({
                message: `No se encontró el post con id=${id}`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error al eliminar post"
        })
    })
};