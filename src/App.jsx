import { useState } from "react";
import close from "./assets/close.svg";
import Result from "./components/Result";

export default function App() {
  const [history, setHistory] = useState(false);

  function showHistory() {
    setHistory(true);
  }
  function closeHistory() {
    setHistory(false);
  }
  function formAction(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.target);
    const freq = formData.get("freq"); // Corrected to get frequency
    console.log(freq);
    alert("Frequency: " + freq); // Fixed alert message
  }

  return (
    <body className="min-h-screen w-screen overflow-hidden flex flex-col items-center">
      <header className="bg-[#59D5E0] w-full px-5 py-2 flex flex-row justify-center items-center gap-3">
        <h1 className="text-2xl font-bold underline text-center">
          Predicting Designed Antenna Strength using ML
        </h1>
        <Info />
      </header>
      <main className="w-full bg-indigo-950 flex-1 flex flex-col gap-4">
        <div className="bg-[#FAA300]  p-2 relative">
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
            <label htmlFor="slot-width" className="flex flex-col">
              Slot Width
              <input
                type="number"
                id="slot-width"
                name="slot-width"
                step="0.01"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                placeholder="Enter slot width"
                required
              />
            </label>
            <label htmlFor="slot-length" className="flex flex-col">
              Slot Length
              <input
                type="number"
                id="slot-length"
                name="slot-length"
                step="0.01"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 "
                placeholder="Enter slot length"
                required
              />
            </label>

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
          </form>
        </div>
        {history ? (
          <aside className="bg-[#F5DD61] p-4 absolute right-0 min-w-[250px] ">
            <h2 className="text-lg font-semibold w-full text-center relative">
              History
              <button
                className="absolute top-0 right-0 text-sm p-0 bg-transparent/10"
                onClick={closeHistory}
              >
                <img src={close} alt="close" className="w-5 h-5" />
              </button>
            </h2>
            <div className="p-3 bg-transparent/10 flex flex-col max-h-[400px] overflow-y-scroll">
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
            </div>
          </aside>
        ) : null}
        <Result />
      </main>
      <footer></footer>
    </body>
  );
}
function List() {
  const [onTouch, setOnTouch] = useState(false);

  function hovering() {
    setOnTouch(true);
  }
  function notHovering() {
    setOnTouch(false);
  }

  return (
    <div
      className="flex w-full gap-4 cursor-pointer hover:border hover:border-l-0 hover:border-slate-300 rounded-l-sm hover:bg-[#F5DD61]"
      onMouseEnter={hovering}
      onMouseLeave={notHovering}
    >
      <div
        className={`w-[4px] rounded-l-sm ${onTouch ? "bg-green-500" : null}`}
      ></div>
      <p className={`py-2  ${onTouch ? "font-semibold" : null}`}>Exam 1</p>
    </div>
  );
}

import info from "./assets/info.svg";
function Info() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow((prev) => !prev);
  }

  return (
    <div className="relative flex justify-center items-center">
      <div onClick={handleClick}>
        <img src={info} alt="info" className="w-6 h-6" />
      </div>
      {show ? (
        <div className="z-20 w-[250px] p-2 rounded-md absolute top-6 right-1 bg-[#F4538A] text-center font-semibold underline">
          Mentored by Dr. S.B. Kumar
        </div>
      ) : null}
    </div>
  );
}
