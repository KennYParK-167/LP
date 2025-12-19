import db from "../config/db.js";

export const getCourses = async (req, res) => {
  const [courses] = await db.query("SELECT * FROM courses");
  res.json(courses);
};

export const createCourse = async (req, res) => {
  const { title, description } = req.body;

  await db.query(
    "INSERT INTO courses (title, description) VALUES (?, ?)",
    [title, description]
  );

  res.json({ message: "Cours ajouté" });
};
