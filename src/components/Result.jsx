import BarChart from "./BarChart"; // Import the BarChart component
import useMyContext from "../store/useMyContext";

export default function Result() {
  const { state, dispatch } = useMyContext();

  function addToHistory(data) {
    dispatch({
      type: "HISTORY",
      payload: {
        calculatedStrength: state.calculatedStrength,
        predictedValue: state.predictedValue,
        data: data,
        inputs: state.inputs,
        id: state.historyIndex + 1,
      },
    });
    dispatch({
      type: "HISTORY_INDEX",
      payload: state.historyIndex + 1,
    });
  }

  function showEfficiency() {
    if (state.calculatedStrength === 0) {
      console.error("Calculated strength cannot be zero.");
      return;
    }

    const updatedData = Object.entries(state.predictedValue.s11).map((el) => {
      const absoluteDifference = Math.abs(
        Math.abs(el[1]) - Math.abs(state.calculatedStrength)
      );
      const relativeDifference =
        (absoluteDifference / Math.abs(state.calculatedStrength)) * 100;
      if (relativeDifference > 200) {
        return 0;
      }
      const efficiency = 100 - relativeDifference;
      return Math.abs(efficiency);
    });

    dispatch({
      type: "DATA",
      payload: {
        ...state.data,
        datasets: [{ ...state.data.datasets[0], data: updatedData }],
      },
    });
    addToHistory({
      ...state.data,
      datasets: [{ ...state.data.datasets[0], data: updatedData }],
    });
  }

  return (
    <div className="bg-[#F4538A] bg-opacity-90 w-5/6 p-4 rounded-lg flex justify-center flex-wrap gap-5 px-4 self-center">
      <div className="bg-transparent/10 p-2 rounded-lg max-w-[300px] w-full flex flex-col ">
        <h2 className="w-full text-center font-bold sm:text-lg">
          Strength Prediction
        </h2>
        <ul className="p-5">
          {state.predictedValue
            ? Object.entries(state.predictedValue.s11).map((el, i) => {
                return (
                  <li key={i}>
                    {el[0]}: <strong>{el[1].toFixed(4)}</strong>
                  </li>
                );
              })
            : null}
        </ul>
        <div className="flex flex-col items-center justify-center">
          <label htmlFor="cs" className="font-semibold text-sm">
            Calculated Strength
          </label>
          <div className="flex gap-1 flex-wrap justify-center">
            <input
              type="number"
              id="cs"
              name="cs"
              step="0.01"
              className="shadow-sm text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 text-black"
              placeholder="Enter Calculated Strength"
              value={state.calculatedStrength}
              onChange={(e) =>
                dispatch({
                  type: "CALCULATED_STRENGTH",
                  payload: e.target.value,
                })
              }
            />
            <button
              type="submit"
              className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              onClick={showEfficiency}
            >
              calculate
            </button>
          </div>
        </div>
      </div>
      {state.data?.datasets[0]?.data.length > 0 ? (
        <BarChart data={state.data} />
      ) : null}
    </div>
  );
}
