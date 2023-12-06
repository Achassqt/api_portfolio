const express = require("express");
const app = express();
const cors = require("cors");
// const port = 3000;
require("dotenv").config({ path: "./config/.env" });
const projectRoutes = require("./routes/project.routes");

const corsOptions = {
  origin: process.env.CLIENT_URL,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to api of my portfolio" });
// });

app.use("/api/project", projectRoutes);

app.listen(process.env.PORT, () => {
  console.log(`app listenning at http://localhost:${process.env.PORT}`);
});
