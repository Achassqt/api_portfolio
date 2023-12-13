const dbPool = require("../models/pool");
const Project = require("../models/project.model");

exports.findAll = (req, res) => {
  // Utilisez le pool de connexions pour obtenir une connexion
  dbPool.getConnection((err, connection) => {
    if (err) {
      console.error("Erreur de connexion à la base de données :", err);
      res.status(500).send({
        message: err.message || "Erreur lors de la récupération des projets.",
      });
      return;
    }

    // Utilisez la connexion pour exécuter votre requête
    Project.getAll(connection, (error, data) => {
      // Libérez la connexion après utilisation
      connection.release();

      if (error) {
        res.status(500).send({
          message:
            error.message || "Erreur lors de la récupération des projets.",
        });
      } else {
        res.send(data);
      }
    });
  });
};
