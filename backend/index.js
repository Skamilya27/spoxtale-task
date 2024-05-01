import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Server is ready");
})



app.listen(PORT || 8080, () => {
    console.log(`App is running at http://localhost:${PORT}`);
})