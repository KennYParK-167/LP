import db from "../db.js";
const {OpenAI} = await import("openai");

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

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.saveActiviy = async (req, res) => {
  try {
    const {title, tags}=require.body;
    await db.execute(
      "INSERT INTO user_activity (course_title, tags) VALUES (?, ?)",
      [title,Array.isArray(tags) ? tags.join(',') : tags || null]
    );
    res.json({ message: "Activité enregistrée avec succès" });
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de l'activité :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.getRecommendations = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT course_title, tags ORDER BY created_at DESC LIMIT 10");
    if(rows.length===0) return res.json([]);

    const prompt=`
L'utilisateur a consulté ces cours :
${rows.map(c => `- ${c.course_title} (${c.tags || "aucun"})`).join("\n")}

Suggère 3 cours en ligne pertinents provenant de plateformes différentes (Coursera, Udemy, edX, YouTube ou autres légales).
Retourne uniquement un JSON avec : title, platform, reason, url.
Assure-toi qu'aucune plateforme ne soit répétée.
⚠️ Important : rédige toutes les réponses en français.
`;

    const response=await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    let aiText=response.choices[0].message.content.trim();
    const joinMatch=aiText.match(/\[.*\]/s);
    res.json(joinMatch ? JSON.parse(joinMatch[0]) : []);
  } catch (error) {
    console.error("Erreur lors de la récupération des recommandations :", error);
    res.status(500).json({ message: "Erreur AI" });
  }
};