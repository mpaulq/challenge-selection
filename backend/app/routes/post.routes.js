const posts = require("../controllers/post.controller.js");

module.exports = (app) => {
  
    var router = require("express").Router();

    router.post("/", posts.create);

    router.get("/", posts.findAll);

    router.delete("/:id", posts.delete);
  
    app.use('/api/posts', router);
  };