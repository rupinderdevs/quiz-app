import React from "react";
import Card from "src/components/card";
import Header from "src/components/header";

const HomePa = () => {
  const data = [
    {
      title: "Fast-Parity",
      icon: "https://cdn-icons-png.flaticon.com/512/4436/4436481.png",
    },
    {
      title: "Parity",
      icon: "https://cdn-icons-png.flaticon.com/512/4436/4436481.png",
    },
    {
      title: "Sapre",
      icon: "https://cdn-icons-png.flaticon.com/512/4436/4436481.png",
    },
    {
      title: "Dice",
      icon: "https://cdn-icons-png.flaticon.com/512/4436/4436481.png",
    },
  ];
  const renderData = (item, index) => (
    <Card title={item.title} icon={item.icon} key={index} />
  );

  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 gap-10">
      {data.map(renderData)}
      </div>
    </div>
  );
};

export default HomePa;
