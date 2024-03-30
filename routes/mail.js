const controller = require("../controllers/mails");
const router = require("express").Router();

router.post("/createreminder", controller.createMail);
router.get("/:mailId", controller.getHistory);
router.post("/addhistory", controller.insertHistory);

module.exports = router;
