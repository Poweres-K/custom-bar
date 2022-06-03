import React from "react";
import Barchart from "./Barchart";
import Footer from "./Footer";

const Expense = () => {
  return (
    <div className="expense">
      <h3>Spending - Last 7 days</h3>
      <Barchart />
      <Footer />
    </div>
  );
};

export default Expense;
