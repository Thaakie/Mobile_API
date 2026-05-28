const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const cors = require("cors");
const app = express();
const port = 3000;
const wisataRoutes = require("./routes/wisataRoutes.js");
const kendaraanRoutes = require("./routes/kendaraanRoutes.js");

app.use(cors());
app.use(express.json());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Wisata & Kendaraan API",
      version: "1.0.0",
      description: "API data wisata Indonesia dan kendaraan",
    },
    servers: [
      {
        url: "https://mobile-api-beryl.vercel.app",
        description: "Vercel Server",
      },
      {
        url: "http://localhost:3000",
        description: "Local Server",
      },
    ],
  },
  apis: ["./src/routes/wisataRoutes.js", "./src/routes/kendaraanRoutes.js"],
};

const specs = swaggerJsdoc(options);

app.get("/api-docs/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(specs);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(null, { swaggerUrl: "/api-docs/swagger.json" }));

app.get("/", (req, res) => {
  res.send("YO WISH THIS DEVELOPER CAN MAKE A BETTER API THAN THIS HAHAHAHA");
});

app.use("/api/data", wisataRoutes);
app.use("/api/kendaraan", kendaraanRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
