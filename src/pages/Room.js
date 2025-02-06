import React from "react";
import img1 from "../img/14.jpg";
import '../styles/room.css'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Room() {
    return (
        <div className="Room">
            <br></br><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Room Details Page</h3><br></br>
            <div className="container">
                <div className="room-details-container">
                    {/* Image Section */}
                    <div className="room-image">
                        <img src={img1} alt="Room Image" />
                    </div>
                    {/* Info Section */}
                    <div className="room-info">
                        <h4>ราคาที่ดีที่สุด (ราคาต่อคืน)</h4>
                        <ul>
                            <li>1. ห้องพักสะอาด</li>
                            <li>2. ห้องนอนกว้างขวาง</li>
                            <li>3. วิวสวยจากหน้าต่าง</li>
                            <li>4. มีเครื่องปรับอากาศ</li>
                            <li>5. Wi-Fi ฟรี</li>
                        </ul>
                        <div className="highlight">
                            !!! ราคาสุดพิเศษ !!!
                        </div>
                        <h4>สิ่งอำนวยความสะดวก</h4>
                        <ul>
                            <li>เครื่องปรับอากาศ</li>
                            <li>Wi-Fi ฟรี</li>
                            <li>ทีวี</li>
                            <li>ตู้เย็น</li>
                            <li>อ่างอาบน้ำ</li>
                        </ul>
                        <div className="price-circle">
                            2,500 ฿
                        </div>
                        <Link to="/booking" className="btn-green">ดูห้อง</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Room;
