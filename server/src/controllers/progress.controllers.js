import db from "../db.js";

export const updateProgress = async (req, res) => {
  const { course_id, progress } = req.body;
  const user_id = req.user.id;

  await db.query(
    "REPLACE INTO progress (user_id, course_id, progress) VALUES (?, ?, ?)",
    [user_id, course_id, progress]
  );

  res.json({ message: "Progression mise à jour" });
};
