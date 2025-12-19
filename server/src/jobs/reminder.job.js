import cron from "node-cron";
import db from "../config/db.js";

cron.schedule("* * * * *", async () => {
  const [reminders] = await db.query(
    "SELECT * FROM reminders WHERE remind_at <= NOW()"
  );

  reminders.forEach(r => {
    console.log(" Rappel :", r.message);
  });
});
