const {
  updateFood,
  deleteFood,
  createFood,
  getFoodById,
  readFoods,
} = require("../controllers/food.controller");

const router = require("express").Router();

router.patch("/update/:foodId", updateFood);
router.delete("/delete/:foodId", deleteFood);
router.post("/", createFood);
router.get("/food/:foodId", getFoodById);
router.get("/", readFoods);

module.exports = router;
