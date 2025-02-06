import React from "react";
import img1 from "../img/14.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/13.jpg";
import img6 from "../img/6.jpg";
import img7 from "../img/7.jpg";
import img8 from "../img/8.jpg";
import img9 from "../img/9.jpg";
import img10 from "../img/10.jpg";
import img11 from "../img/11.jpg";
import img12 from "../img/12.jpg";
import '../styles/style.css'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

function Home() {
    return (
        <div className="Home">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="room-gallery">
                            {images.map((image, index) => (
                                <img key={index} src={image} alt={`Room ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="room-details">
                            <h4>จุดเด่นห้องพัก</h4>
                            <ul>
                                <li>ห้องพักกว้างขวาง</li>
                                <li>วิวสวยจากหน้าต่าง</li>
                                <li>ห้องน้ำสะอาด พร้อมอ่างอาบน้ำ</li>
                                <li>Wi-Fi ฟรี</li>
                                <li>เครื่องปรับอากาศ</li>
                            </ul>
                            <h4>บริการเสริมอื่นๆ</h4>
                            <ul>
                                <li>บริการรถรับ-ส่ง</li>
                                <li>บริการอาหารเช้า</li>
                                <li>ฟิตเนส & สระว่ายน้ำ</li>
                            </ul>
                            <Link to="/room" className="btn-green">ดูห้อง</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;