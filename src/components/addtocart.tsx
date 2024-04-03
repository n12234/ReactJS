import React from "react";

type Props = {
  pid: string | number;
};

const Addtocart = (props: Props) => {
  const handleSubmit = () => {
    alert(props.pid)
  } 
  return (
    <button
      type="button"
      onClick={handleSubmit}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Add to Cart
    </button>
  );
};

export default Addtocart;
