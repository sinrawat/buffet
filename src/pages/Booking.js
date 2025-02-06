import React, { useState } from "react"; // ✅ เพิ่ม useState
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import "../styles/book.css";
import "../styles/Popup.css";

const Booking = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleBooking = () => {
        setIsPopupOpen(true); // เปิดป็อปอัป
    };

    const closePopup = () => {
        setIsPopupOpen(false); // ปิดป็อปอัป
    };

    return (
        <div className="Booking">
            <br></br><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Booking Page</h3><br></br>
            <div className="container">
                <div className="main-content">
                    {/* ฟอร์มการจอง */}
                    <div className="booking-form">
                        <div className="form-section">
                            <label htmlFor="name">ชื่อ*</label>
                            <input type="text" id="name" placeholder="ชื่อ" required />
                        </div>

                        <div className="form-section">
                            <label htmlFor="phone">เบอร์โทรศัพท์*</label>
                            <input type="tel" id="phone" placeholder="เบอร์โทรศัพท์" required />
                        </div>

                        <div className="form-section">
                            <label htmlFor="checkin-date">วันที่เข้าพัก*</label>
                            <input type="date" id="checkin-date" required />
                        </div>

                        <div className="form-section">
                            <label htmlFor="checkout-date">วันที่ออกจากห้องพัก*</label>
                            <input type="date" id="checkout-date" required />
                        </div>

                        <div className="form-section">
                            <label htmlFor="guest-count">จำนวนผู้เข้าพัก*</label>
                            <select id="guest-count">
                                <option value="1">1 คน</option>
                                <option value="2">2 คน</option>
                                <option value="3">3 คน</option>
                            </select>
                        </div>

                        <div className="form-section">
                            <label htmlFor="contact-details">รายละเอียดติดต่อ*</label>
                            <textarea id="contact-details" placeholder="รายละเอียดติดต่อ" required></textarea>
                        </div>

                        <button className="book-button" onClick={handleBooking}>จองเลย</button>
                    </div>

                    {/* ป็อปอัป */}
                    {isPopupOpen && (
                        <div className="popup-overlay">
                            <div className="popup-box">
                                <button className="close-btn" onClick={closePopup}>X</button>
                                <h2>จองสำเร็จ</h2>
                                <button className="success-btn" onClick={closePopup}>ตกลง</button>
                            </div>
                        </div>
                    )}

                    {/* ข้อมูลโรงแรม */}
                    <div className="hotel-info">
                        <div className="hotel-images">
                            <img src={img3} alt="รูปภาพโรงแรม 1" />
                            <img src={img2} alt="รูปภาพโรงแรม 2" />
                        </div>
                        <div className="hotel-images">
                            <img src={img4} alt="รูปภาพโรงแรม 3" />
                        </div>
                        <div className="hotel-details">
                            <h2>EASTIN GRAND HOTEL</h2>
                            <p>รีวิวโรงแรม XYZ Hotel</p>
                            <p>คะแนน: ★★★★★ (5/5)</p>
                            <p>วันที่เข้าพัก: มกราคม 2025</p>
                            <p>สิ่งอำนวยความสะดวก:</p>
                            <ul>
                                <li>ห้องพักกว้างขวาง สะอาด และมีสิ่งอำนวยความสะดวกครบครัน</li>
                                <li>บริการฟิตเนส 24 ชั่วโมงพร้อมอุปกรณ์มากมาย</li>
                                <li>สระว่ายน้ำบนดาดฟ้าและวิวที่สวยงาม</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
