module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    }, {
      timestamps: false
    });
  
    return Post;
  };