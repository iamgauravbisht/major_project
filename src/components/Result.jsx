import BarChart from "./BarChart"; // Import the BarChart component

export default function Result() {
  return (
    <div className=" bg-[#F4538A] w-5/6  p-4 rounded-lg flex justify-center flex-wrap gap-5 px-4 self-center">
      <div className="bg-transparent/10 p-2 rounded-lg w-[300px]">
        <h2 className="w-full text-center font-bold text-xl">
          Strength Prediction
        </h2>
        <ul className=" p-5">
          <li>
            Random Forest : <strong>22</strong>
          </li>
          <li>
            Random Forest : <strong>22</strong>
          </li>
          <li>
            Random Forest : <strong>22</strong>
          </li>
          <li>
            Random Forest : <strong>22</strong>
          </li>
          <li>
            Random Forest : <strong>22</strong>
          </li>
          <li>
            Random Forest : <strong>22</strong>
          </li>
        </ul>
        <label htmlFor="cs" className="flex flex-col text-sm">
          Calculated Strength
          <input
            type="number"
            id="cs"
            name="cs"
            step="0.01"
            className="shadow-sm  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="Enter Calculated Strength"
          />
        </label>
      </div>
      <BarChart />
    </div>
  );
}
