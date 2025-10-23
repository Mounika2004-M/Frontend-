const express = require("express");
const app = express();
app.use(express.json());

// Users API
app.post("/users", (req, res) => {
  const { name, email, password } = req.body;
  res.status(201).json({
    id: Math.floor(Math.random() * 1000),
    name,
    email,
  });
});

// Support Ticket API
app.post("/support-tickets", (req, res) => {
  const { title, description, user_id } = req.body;
  res.status(201).json({
    id: Math.floor(Math.random() * 1000),
    title,
    description,
    user_id,
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
