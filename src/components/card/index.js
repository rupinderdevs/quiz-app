import React from "react";

const Card = ({ title, icon,key }) => {
  return (
    <div className={`rounded-lg bg-primary-light p-3`} key={key}>
      <div className="flex items-center flex-col justify-between">
        <img src={icon} alt="imagee" className="w-12" />

        <div>
          <h2 className="text-s font-semibold">{title}</h2>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Card;
