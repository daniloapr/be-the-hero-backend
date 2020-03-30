const express = require("express");
const routes = express.Router();
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
//const queryParams = request.query;
//const routeParams = request.params[0]

routes.post("/sessions", SessionController.login);

routes.post("/ongs", OngController.create);
routes.get("/ongs", OngController.getAll);

routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.getAll);
routes.delete("/incidents", IncidentController.delete); //incidentId

routes.get("/profile", ProfileController.getByOngId);

module.exports = routes;
