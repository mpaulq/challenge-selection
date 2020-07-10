module.exports = app => {
    const posts = require("../controllers/post.controller.js");
  
    var router = require("express").Router();

    router.post("/", posts.create);

    router.get("/", posts.findAll);

    router.delete("/:id", posts.delete);
  
    app.use('/api/posts', router);
  };