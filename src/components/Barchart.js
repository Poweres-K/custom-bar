import React, { useState, useEffect, useRef } from "react";
import data from "../data.json";

const inital = [{ day: "mock", amount: 100, barHeight: 10, isMax: false }];

const Barchart = () => {
  const [expense, setExpense] = useState(inital);
  const [currentHover, setCurrentHover] = useState(null);
  const barWrapper = useRef(null);
  useEffect(() => {
    const barWrapperHeight = barWrapper.current?.clientHeight;

    const maxEx = Math.max(...data.map((o) => o.amount));
    const allExpense = data.map(({ day, amount }) => {
      const isMax = amount === maxEx;
      const percent = amount / maxEx;
      const barHeight = percent * barWrapperHeight;
      return { day, amount, barHeight, isMax };
    });
    setExpense(allExpense);
  }, []);

  const onHover = (day) => {
    setCurrentHover(day);
  };
  const offHover = () => {
    setCurrentHover(null);
  };

  return (
    <div className="barchart">
      {expense.map(({ day, barHeight, isMax, amount }, index) => {
        return (
          <div key={index} className="singlebar">
            <div className="bar" ref={barWrapper}>
              <div
                className={isMax ? "innerbar maxexpense" : "innerbar"}
                onMouseOver={() => {
                  onHover(day);
                }}
                onMouseOut={offHover}
                style={{
                  height: `${barHeight}px`,
                }}
              >
                <div className={currentHover === day ? "popup show" : "popup"}>
                  ${amount}
                </div>
              </div>
            </div>
            <div className="day">{day}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Barchart;
