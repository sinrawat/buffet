import React from "react";

function Room () {
    const menuItems = [
        {
          name: "ชุดเนื้อสันนอก Australia สไลซ์",
          price: 320,
          image: "/images/australia_beef.jpg",
        },
        {
          name: "ชุดเนื้อติดมัน U.S.A สไลซ์",
          price: 332,
          image: "/images/usa_beef.jpg",
        },
        {
          name: "ชุดหมูคุโรบูตะ สไลซ์",
          price: 295,
          image: "/images/kurobuta_pork.jpg",
        },
      ];
      
      const Menu = () => {
        return (
          <div className="p-6 bg-beige min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6">รายการอาหาร</h1>
            <div className="grid md:grid-cols-3 gap-6">
              {menuItems.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-2xl shadow-lg">
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
    }
      };

export default Room;