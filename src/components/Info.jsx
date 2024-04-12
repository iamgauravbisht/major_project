import info from "../assets/info.svg";
import { useState } from "react";

export default function Info() {
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
