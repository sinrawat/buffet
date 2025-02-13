import React from "react";
import '../styles/room.css';
import Australia from "../img/Australia.jpg";
import USA from "../img/U-S-A.jpg";
import ko from "../img/ko.jpg";

const menuItems = [
  {
    name: "ชุดเนื้อสันนอก Australia สไลซ์",
    price: 320,
    image: Australia,
  },
  {
    name: "ชุดเนื้อติดมัน U.S.A สไลซ์",
    price: 332,
    image: USA,
  },
  {
    name: "ชุดหมูคุโรบูตะ สไลซ์",
    price: 295,
    image: ko,
  },
];

const Room = () => {
  return (
    <div className="p-6 bg-beige min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">รายการอาหาร</h1>
      {/* ใช้ flex เพื่อให้ card อยู่ในบรรทัดเดียวกัน */}
      <div className="grid grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-white p-3 rounded-2xl shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-xl"
            />
            <h2 className="text-xl font-semibold mt-4">{item.name}</h2>
            <p className="text-lg text-gray-600">{item.price}.-</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Room;
