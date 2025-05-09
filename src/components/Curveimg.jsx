import React from "react";

function Curveimg({ rounded, src }) {
  const roundedClass =
    {
      tl: "rounded-tl-[50%]",
      tr: "rounded-tr-[50%]",
      bl: "rounded-bl-[50%]",
      br: "rounded-br-[50%]",
    }[rounded] || ""; // Default to empty string if not found

  return (
    <div className={`overflow-hidden h-[50vh] sm:h-[50vh] `}>
      <img
        rel="preload"
        src={src}
        alt="Curved Image"
        className={`h-full object-cover ${roundedClass} `}
      />
    </div>
  );
}

export default Curveimg;
