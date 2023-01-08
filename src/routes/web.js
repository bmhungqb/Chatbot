import express from "express";
import homeController from "../controllers/HomeController";
import ChatbotControllers from "../controllers/ChatbotControllers";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.post("/webhook", ChatbotControllers.postWebhook);
    router.get("/webhook", ChatbotControllers.getWebhook);
    return app.use("/", router)
}

module.exports = initWebRoutes;