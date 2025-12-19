import db from "../db.js";

export const createReminder = async (req, res) => {
  const { message, remind_at } = req.body;
  const user_id = req.user.id;

  await db.query(
    "INSERT INTO reminders (user_id, message, remind_at) VALUES (?, ?, ?)",
    [user_id, message, remind_at]
  );

  res.json({ message: "Rappel créé" });
};
