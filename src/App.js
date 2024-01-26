
import { useState } from "react";

function CurrencyConvert() {
  const conversionInput = {
    usd: {
      inr: 80,
      eur: 0.9,
      aed: 3.67,
    },
    inr: {
      aed: 0.04,
      eur: 0.01,
      usd: 0.012,
    },
    eur: {
      usd: 1.08,
      inr: 90,
      aed: 3.98,
    },
    aed: {
      inr: 22,
      eur: 0.25,
      usd: 0.27,
    },
  };
  const [usdMoney, setUsdMoney] = useState(1);
  const [targetMoney, setTargetMoney] = useState("inr");
  const [convertedMoney, setConvertedMoney] = useState(80);

  const handleChange = (e) => {
    setTargetMoney(e.target.value);
    const convertedMoney = usdMoney * conversionInput[e.target.value];
    setConvertedMoney(convertedMoney);
  };

  const handleUsdChange = (e) => {
    const money = (e.target.value);
    setUsdMoney(money);
    console.log("Money entered:", money);
    const conversionRate = conversionInput["usd"][targetMoney];
    const convertedMoney = money * conversionRate;
    setConvertedMoney(convertedMoney);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500">
      <h1 className="text-3xl font-semibold mb-4">Currency Converter</h1>
      <div className="flex flex-col items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  p-4 rounded shadow-md">
        <h2 className="text-xl font-medium mb-2">USD value</h2>
        <input
          type="number"
          value={usdMoney}
          onChange={handleUsdChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-2"
        />
        <h2 className="text-xl font-medium mb-2">Target value</h2>
        <div className=" flow-root space-x-4">
        <input
          type="number"
          value={String(convertedMoney)}
          readOnly
          className="border border-gray-300 rounded-md px-3 py-2 mb-2"
        />
        <select
          value={String(targetMoney)}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 "
        >
          {Object.keys(conversionInput["usd"]).map((money) => (
            <option key={money} value={money}>
              {money.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
    </div>
  );
}

export default CurrencyConvert;
