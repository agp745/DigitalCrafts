const express = require("express");
const router = express();

router.get("/", async (req, res) => {
  const posts = await model.Post.findAll({});

  res.render("main", { posts: posts, user: req.session.user });
});

router.get("/add-post", async (req, res) => {
  res.render("addPost");
});

router.post("/add-post", async (req, res) => {
  const newPost = await model.Post.build({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category,
    isPublished: req.body.isPublished,
    author: req.session.user,
  });

  await newPost.save();
  console.log("movie added");
  res.redirect("/posts");
});

router.post("/delete-post", async (req, res) => {
  await model.Post.destroy({
    where: {
      id: parseInt(req.body.id),
    },
  });

  console.log("post deleted");
  res.redirect("/posts");
});

router.post("/update-post-page", async (req, res) => {
  const post = await model.Post.findAll({
    where: {
      id: parseInt(req.body.id),
    },
  });

  const postInfo = {
    id: post[0].dataValues.id,
    title: post[0].dataValues.title,
    body: post[0].dataValues.body,
    category: post[0].dataValues.category,
  };

  res.render("updatePost", postInfo);
});

router.post("/update-post-info", async (req, res) => {
  await model.Post.update(
    {
      title: req.body.title,
      body: req.body.body,
      category: req.body.category,
      isPublished: req.body.isPublished,
    },
    {
      where: {
        id: parseInt(req.body.id),
      },
    }
  );

  console.log("post updated");
  res.redirect("/posts");
});

router.post("/user-posts", async (req, res) => {
  const userPosts = await model.Post.findAll({
    where: {
      author: req.session.user,
    },
  });

  let filteredArr = [];
  for (let i = 0; i < userPosts.length; i++) {
    const postInfo = {
      id: userPosts[i].dataValues.id,
      title: userPosts[i].dataValues.title,
      author: userPosts[i].dataValues.author,
      body: userPosts[i].dataValues.body,
      category: userPosts[i].dataValues.category,
    };
    filteredArr.push(postInfo);
  }

  res.render("main", { posts: filteredArr });
});

router.post("/filter", async (req, res) => {
  const filteredPosts = await model.Post.findAll({
    where: {
      category: req.body.category,
    },
  });

  let filteredArr = [];
  for (let i = 0; i < filteredPosts.length; i++) {
    const postInfo = {
      id: filteredPosts[i].dataValues.id,
      title: filteredPosts[i].dataValues.title,
      author: filteredPosts[i].dataValues.author,
      body: filteredPosts[i].dataValues.body,
      category: filteredPosts[i].dataValues.category,
    };
    filteredArr.push(postInfo);
  }

  res.render("main", { posts: filteredArr });
});

router.post("/filter-published", async (req, res) => {
  const filteredPosts = await model.Post.findAll({
    where: {
      isPublished: true,
    },
  });

  let filteredArr = [];
  for (let i = 0; i < filteredPosts.length; i++) {
    const postInfo = {
      id: filteredPosts[i].dataValues.id,
      title: filteredPosts[i].dataValues.title,
      author: filteredPosts[i].dataValues.author,
      body: filteredPosts[i].dataValues.body,
      category: filteredPosts[i].dataValues.category,
    };
    filteredArr.push(postInfo);
  }

  res.render("main", { posts: filteredArr });
});

router.post("/comment", async (req, res) => {
  const comment = await model.Comment.build({
    title: req.body.title,
    body: req.body.comment,
    post_id: req.body.post_id,
  });

  await comment.save();

  res.redirect("/posts");
});

router.post("/post-details", async (req, res) => {
  const id = parseInt(req.body.id);
  const comment = await model.Post.findByPk(id, {
    include: [{ model: model.Comment, as: "comments" }],
  });

  console.log(comment);

  res.render("postDetails", comment.dataValues);
});

router.post("/delete-comment", async (req, res) => {
  await model.Comment.destroy({
    where: {
      id: req.body.id,
    },
  });

  console.log("comment deleted");
  res.redirect("/posts");
});

module.exports = router;
