"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      {" "}
      <CountUp
        start={0}
        end={amount}
        duration={2.5}
        separator=","
        decimals={2}
        decimal="."
        prefix="R$ "
      />
    </div>
  );
};

export default AnimatedCounter;
