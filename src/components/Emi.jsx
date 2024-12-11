import React, { useEffect, useState } from "react";

function Emi() {
  const [principle, setPrinciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [year, setYear] = useState(0);
  const [emi, setEmi] = useState(0);

  const handlePrinciple = (e) => {
    const principleVal = e.target.value;
    setPrinciple(principleVal);
  };

  const handleInterest = (e) => {
    const interestVal = e.target.value;
    setInterest(interestVal);
  };

  const handleYear = (e) => {
    const YearVal = e.target.value;
    setYear(YearVal);
  };
  const calculateEMI = () => {
    let r = interest;
    if (principle && r && year) {
      r = r / 12 / 100; // Per  Month
      const calcPower = Math.pow(1 + r, year * 12);
      const amount = principle * ((r * calcPower) / (calcPower - 1));
      setEmi(Math.round(amount));
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [principle, interest, year]);
  return (
    <>
      <div className="emi-input">
        <p>Principle</p>
        <input onChange={handlePrinciple} type="number" id="principle" />

        <p>Interest:</p>
        <input onChange={handleInterest} type="number" id="interest" />

        <p>Years:</p>
        <input onChange={handleYear} type="number" id="years" />
      </div>
      <div className="output">Your EMI is : {emi}</div>
    </>
  );
}

export default Emi;
