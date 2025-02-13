import React from 'react';
import '../styles/book.css'; // ไฟล์ CSS สำหรับสไตล์
import img1 from "../img/moo.jpg"; // Update with actual paths to images
import img2 from "../img/16.PNG";
import img3 from "../img/6147.jpg";


const HomePage = () => {
  const foodItems = [
    {
      id: 1,
      name: 'โปรโมชั่น 1',
      description: 'เนื้อสัตว์และผักสดใหม่',
      image: '../img/6147.jpg',
    },
    {
      id: 2,
      name: 'โปรโมชั่น 2',
      description: 'เซ็ตอาหารทะเลพิเศษ',
      image: '../img/6147.jpg',
    },
   
  ];

  return (
    <div className="HomePage">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h1>โปรโมชั่น Hot Pot</h1>
      <div className="food-grid">
        {foodItems.map((item) => (
          <div key={item.id} className="food-item">
            <img src={item.image} alt={item.name} className="food-image" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;