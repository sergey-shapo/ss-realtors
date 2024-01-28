import { useState } from "react";

const CheckboxComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="h-full flex items-center justify-center">
      <input
        type="checkbox"
        id="checkbox-menu"
        className="absolute opacity-0"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />

      <label
        htmlFor="checkbox-menu"
        className={`cursor-pointer relative block h-5 w-7 ${
          isChecked ? "rotate-45" : ""
        }`}
      >
        <span className="absolute block h-1 w-full rounded-full bg-orange-500 transition duration-200 ease-in-out transform rotate-0 top-0"></span>
        <span
          className={`absolute block h-1 w-full rounded-full bg-orange-500 transition duration-200 ease-in-out transform rotate-0 top-2 ${
            isChecked ? "opacity-0" : ""
          }`}
        ></span>
        <span className="absolute block h-1 w-full rounded-full bg-orange-500 transition duration-200 ease-in-out transform rotate-0 top-4"></span>
      </label>
    </div>
  );
};

export default CheckboxComponent;
