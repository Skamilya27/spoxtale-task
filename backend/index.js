import express from "express";
import bodyParser from "body-parser";
import qrCode from "qrcode";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(
  cors({
    origin: "https://spoxtale-task-ljgq.vercel.app",
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(bodyParser.json());

const userData = JSON.parse(fs.readFileSync("./userData.json", "utf-8"));

app.get("/", (req, res) => {
  res.status(200).send(userData);
});

app.get("/:username", async (req, res) => {
  try {
    const username = req.params.username.split("@")[0].replace(".", "");
    const user = userData.find(
      (user) => user.emailID.split("@")[0].replace(".", "") === username
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const urls = [user.website, user.socialmedia];
    const qrCodes = await Promise.all(
      urls.map(async (url) => {
        return await qrCode.toDataURL(url);
      })
    );

    res.status(200).json({
      name: user.name,
      websiteQRCode: qrCodes[0],
      socialMediaQRCode: qrCodes[1],
      urls
    });
  } catch (err) {
    console.error("Something went wrong while generating QR codes: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT || 8080, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});
