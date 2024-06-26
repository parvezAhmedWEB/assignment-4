import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllFoods from "./pages/AllFoods";
import CreateFood from "./pages/CreateFood";
import UpdateFood from "./pages/UpdateFood";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllFoods />} />
        <Route path="/createFood" element={<CreateFood />} />
        <Route path="/food/update/:id" element={<UpdateFood />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
