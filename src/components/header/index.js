import React from "react";
import Button from "../button";

const Header = () => {
  return (
    <div className="flex justify-between p-3">
      <div className="flex flex-col gap-2">
        <span>Balance</span>
        <span>$ O</span>
        <span>ID: </span>
      </div>
      <div className="flex flex-col gap-2">
        <Button text="Recharge" variant="secondary"/>
        <Button text="Withdraw" variant="tertiary"/>

        {/* <button className="bg-primary">Recharge</button>
        <button>Withdraw</button> */}
      </div>
    </div>
  );
};

export default Header;
