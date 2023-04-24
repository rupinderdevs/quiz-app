/** external deps */
import React from "react";
// import { LoadingOutlined } from "@ant-design/icons";
/** internal deps */

const Button = ({
  text,
  variant = "primary",
  classes,
  link,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
}) => {
  const defaultClasses = `transition-all duration-300 text-xxs xl:text-xs py-2 px-4 xl:px-6 py-2 2xl:py-3 font-normal w-fit rounded-full hover:bg-opacity-90 whitespace-nowrap 
  ${disabled ? "bg-grey-90 cursor-not-allowed" : ""}  
   ${
     variant === "primary" ? "bg-black text-white border border-grey-90" : ""
   } ${variant === "secondary" ? "bg-primary-90 text-white" : ""}
  ${variant === "transparent" ? "bg-transparent border border-grey-90" : ""}
  ${variant === "tertiary" ? "bg-grey-70" : ""}
  ${variant === "text" ? "" : ""}
  ${classes}`;

  return (
    <>
      {type === "button" || type === "reset" ? (
        <button
          // disabled={disabled || loading}
          type={type}
          className={defaultClasses}
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        <a className={defaultClasses} href={link}>
          {text}
        </a>
      )}
    </>
  );
};

export default Button;
