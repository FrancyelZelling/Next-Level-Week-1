import express from "express";

import PointsController from "./controllers/PointsControllers";
import ItemsController from "./controllers/ItemControllers";

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// Item Routes
routes.get("/items", itemsController.index);

// Point Routes
routes.post("/points", pointsController.create);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

export default routes;
