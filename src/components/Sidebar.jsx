import { useRef, useEffect, useState } from "react";
import useMyContext from "../store/useMyContext";
import close from "../assets/close.svg";

export default function Sidebar() {
  const modalRef = useRef(null);
  const { state, dispatch } = useMyContext();

  const handleToggleModal = () => {
    dispatch({ type: "SHOW_HISTORY", payload: false });
    console.log("clicked");
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      dispatch({ type: "SHOW_HISTORY", payload: false });
      console.log("clicked outside");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <aside
      className={`fixed md:sticky top-0 left-0 z-40 w-screen h-[100dvh] min-w-56 md:w-64 flex flex-col transition-transform -translate-x-full md:translate-x-0 bg-transparent/50 md:bg-gray-50 overflow-hidden 
      ${state.showHistory ? "translate-x-0" : "-translate-x-full"} 
      `}
      aria-label="Sidebar"
    >
      {/* {state.showHistory ? "working" : "not working"} */}
      <button
        className={`${
          state.showHistory ? "fixed" : "hidden"
        } top-5 right-4 lg:hidden`}
        onClick={handleToggleModal}
      ></button>

      <div
        className="flex-1 px-3 py-4 w-56 flex flex-col  overflow-y-auto bg-[#F4538A] relative text-black"
        ref={modalRef}
      >
        {/* Your content goes here */}
        <h2 className="text-lg font-semibold text-center relative">
          History
          <button
            className="absolute top-0 right-0 text-sm p-0 bg-transparent/10"
            onClick={handleToggleModal}
          >
            <img src={close} alt="close" className="w-5 h-5" />
          </button>
        </h2>
        {state.history.length > 0 && (
          <div className=" bg-transparent/20 flex flex-col overflow-y-scroll">
            {state.history.length > 0 &&
              state.history.map((el) => {
                return <List data={el} key={el.id} />;
              })}
          </div>
        )}
      </div>
    </aside>
  );
}

function List({ data }) {
  const [onTouch, setOnTouch] = useState(false);
  const { dispatch } = useMyContext();

  function hovering() {
    setOnTouch(true);
  }

  function notHovering() {
    setOnTouch(false);
  }

  function setData() {
    dispatch({ type: "PREDICTED_VALUE", payload: data.predictedValue });
    dispatch({ type: "DATA", payload: data.data });
    dispatch({ type: "CALCULATED_STRENGTH", payload: data.calculatedStrength });
  }

  return (
    <div
      className="flex w-full gap-4 cursor-pointer rounded-l-sm hover:bg-[#174793]"
      onMouseEnter={hovering}
      onMouseLeave={notHovering}
      onClick={setData}
    >
      <div
        className={`w-[4px] rounded-l-sm ${onTouch ? "bg-green-600" : ""}`}
      ></div>
      <div className={`py-2 text-sm ${onTouch ? "text-white" : ""}`}>
        {data.inputs.map((el, i) => {
          return (
            <p key={i}>
              {el[0]} : <strong>{el[1]}</strong>{" "}
            </p>
          );
        })}
      </div>
    </div>
  );
}
