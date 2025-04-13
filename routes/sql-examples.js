const express = require("express");
const router = express.Router();
const { db } = require("../db/setup");

// Display all posts
router.get("/posts", (req, res) => {
  db.all(
    `
        SELECT posts.*, users.name as author_name 
        FROM posts 
        JOIN users ON posts.user_id = users.id
        ORDER BY posts.created_at DESC
    `,
    (err, posts) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error fetching posts");
      }
      res.render("sql-examples/posts", {
        posts: posts,
        title: "All Posts",
      });
    }
  );
});

// Display form to create new post
router.get("/posts/new", (req, res) => {
  db.all("SELECT * FROM users", (err, users) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching users");
    }
    res.render("sql-examples/new-post", {
      users,
      title: "Create New Post",
    });
  });
});

// Display single post
router.get("/posts/:id", (req, res) => {
  const postId = req.params.id;
  db.get(
    `
        SELECT posts.*, users.name as author_name 
        FROM posts 
        JOIN users ON posts.user_id = users.id
        WHERE posts.id = ?
    `,
    [postId],
    (err, post) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error fetching post");
      }
      if (!post) {
        return res.status(404).send("Post not found");
      }
      res.render("sql-examples/post-detail", {
        post,
        title: post.title,
      });
    }
  );
});

// Handle new post submission
router.post("/posts", (req, res) => {
  const { title, content, user_id } = req.body;
  // db.run(
  //   "INSERT INTO users (name, email) VALUES (?, ?)",
  //   [author_name, author_name],
  //   (err) => {
  //     if (err) {
  //       console.error(err);
  //       req.status(500).send("Error creating user");
  //     }
  //   }
  // );
  db.run(
    "INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)",
    [title, content, user_id],
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send("Error creating post");
      }
      res.redirect("/sql-examples/posts");
    }
  );
});

// JSON API endpoints
router.get("/api/posts", (req, res) => {
  db.all(
    `
        SELECT posts.*, users.name as author_name 
        FROM posts 
        JOIN users ON posts.user_id = users.id
        ORDER BY posts.created_at DESC
    `,
    (err, posts) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error fetching posts" });
      }
      res.json(posts);
    }
  );
});

router.get("/api/posts/:id", (req, res) => {
  const postId = req.params.id;
  db.get(
    `
        SELECT posts.*, users.name as author_name 
        FROM posts 
        JOIN users ON posts.user_id = users.id
        WHERE posts.id = ?
    `,
    [postId],
    (err, post) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error fetching post" });
      }
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post);
    }
  );
});

router.post("/api/posts", (req, res) => {
  const { title, content, user_id } = req.body;
  db.run(
    "INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)",
    [title, content, user_id],
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error creating post" });
      }
      res.json({
        id: this.lastID,
        title,
        content,
        user_id,
      });
    }
  );
});

module.exports = router;
