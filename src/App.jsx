import { useEffect, useState } from "react";
import close from "./assets/close.svg";
import Result from "./components/Result";
import { predict } from "./lib/call";
import useMyContext from "./store/useMyContext";
import Sidebar from "./components/Sidebar.jsx";
import Info from "./components/Info.jsx";

export default function App() {
  const { state, dispatch } = useMyContext();

  function showHistory() {
    dispatch({ type: "SHOW_HISTORY", payload: true });
  }

  async function formAction(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.target);
    const freq = formData.get("freq");
    const length = formData.get("length");
    const width = formData.get("width");
    const slotLength = formData.get("slotLength");
    const slotWidth = formData.get("slotWidth");
    await predict({
      Freq: freq,
      length_of_patch: length,
      width_of_patch: width,
      Slot_length: slotLength,
      slot_width: slotWidth,
    })
      .then((res) => dispatch({ type: "PREDICTED_VALUE", payload: res }))
      .then(() => {
        dispatch({
          type: "INPUTS",
          payload: [
            ["Freq.", freq],
            ["Patch Length", length],
            ["Patch width", width],
            ["Slot Length", slotLength],
            ["Slot Width", slotWidth],
          ],
        });
      });
  }

  return (
    <div className="flex flex-row w-screen h-screen relative text-white bg-[#174793]">
      <Sidebar />
      <div className="flex-grow overflow-y-scroll">
        <header className=" w-full px-5 py-2 flex flex-row justify-center items-center gap-3">
          <h1 className="sm:text-lg font-bold underline text-center bg-gray-700 rounded-full px-4 py-2">
            Predicting Designed Antenna Strength using ML
          </h1>
          <Info />
        </header>
        <div className="flex flex-col items-center flex-1">
          <main className="w-full flex-1 flex flex-col gap-2 p-2 ">
            <div className="bg-transparent/15 p-2 relative rounded-xl">
              <form
                className="mx-2 p-5 bg-transparent/20 w-fit text-sm font-semibold rounded-lg flex gap-5 flex-wrap justify-center"
                onSubmit={formAction}
              >
                <label htmlFor="freq" className="flex flex-col">
                  Freq.
                  <input
                    type="number"
                    id="freq"
                    name="freq"
                    step="0.01"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="Enter frequency"
                    required
                  />
                </label>
                <label htmlFor="width" className="flex flex-col">
                  Width
                  <input
                    type="number"
                    id="width"
                    name="width"
                    step="0.01"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="Enter width"
                    required
                  />
                </label>
                <label htmlFor="length" className="flex flex-col">
                  Length
                  <input
                    type="number"
                    id="length"
                    name="length"
                    step="0.01"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="Enter length"
                    required
                  />
                </label>
                <label htmlFor="slotWidth" className="flex flex-col">
                  Slot Width
                  <input
                    type="number"
                    id="slotWidth"
                    name="slotWidth"
                    step="0.01"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="Enter slot width"
                    required
                  />
                </label>
                <label htmlFor="slotLength" className="flex flex-col">
                  Slot Length
                  <input
                    type="number"
                    id="slotLength"
                    name="slotLength"
                    step="0.01"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 "
                    placeholder="Enter slot length"
                    required
                  />
                </label>

                <div className="flex flex-wrap justify-center">
                  <button
                    type="submit"
                    className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
                    onClick={showHistory}
                  >
                    History
                  </button>
                </div>
              </form>
            </div>

            <Result />
          </main>
        </div>
      </div>
    </div>
  );
}
