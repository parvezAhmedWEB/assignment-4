const FoodModel = require("../models/food.model");

const updateFood = async (req, res) => {
  try {
    const { foodId } = req.params;
    const { name, code, image, category, quantity, price } = req.body;
    const updateFood = await FoodModel.findOne({ _id: foodId });
    console.log(updateFood);
    updateFood.name = name ?? updateFood.name;
    updateFood.code = code ?? updateFood.code;
    updateFood.image = image ?? updateFood.image;
    updateFood.category = category ?? updateFood.category;
    updateFood.quantity = quantity ?? updateFood.quantity;
    updateFood.price = price ?? updateFood.price;
    await updateFood.save();
    res.status(200).json({
      success: true,
      message: "Update Food",
      data: updateFood,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getFoodById = async (req, res) => {
  try {
    const { foodId } = req.params;
    const food = await FoodModel.findOne({ _id: foodId });
    res.status(200).json({
      success: true,
      message: "Food",
      data: food,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteFood = async (req, res) => {
  try {
    const { foodId } = req.params;
    const deleteFood = await FoodModel.deleteOne({ _id: foodId });
    res.status(200).json({
      success: true,
      message: "Delete Food",
      data: deleteFood,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const readFoods = async (req, res) => {
  try {
    const foods = await FoodModel.find();
    res.status(200).json({
      success: true,
      message: "All Foods",
      data: foods,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const createFood = async (req, res) => {
  try {
    const { name, code, image, category, quantity, price } = req.body;
    if (!name || !code || !image || !category || !quantity || !price) {
      res.status(400).json({
        success: false,
        error: "All input filed is required.",
      });
    }
    const createData = new FoodModel({
      ...req.body,
    });
    await createData.save();
    res.status(201).json({
      success: true,
      message: "Create New Food.",
      data: createData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { createFood, readFoods, deleteFood, updateFood, getFoodById };
