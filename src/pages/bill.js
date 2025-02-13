import React, { useState, useEffect } from "react";
import '../styles/style.css';

const initialItems = [
    { id: 1, name: "หมูสามชั้นสไลด์", qty: 3, price: 55 },
    { id: 2, name: "หมูเนื้อแดงหมักพริกไทย", qty: 1, price: 52 },
    { id: 3, name: "ลูกชิ้นเนื้อแคะ", qty: 2, price: 45 }
];

function Bill() {
    const [items, setItems] = useState(initialItems);
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    
    // กำหนดวันที่เป็นปัจจุบัน
    const today = new Date().toLocaleDateString("th-TH", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });

    useEffect(() => {
        calculateTotal();
    }, [items]);

    const handleQtyChange = (id, newQty) => {
        setItems(items.map(item => 
            item.id === id ? { ...item, qty: newQty } : item
        ));
    };

    const calculateTotal = () => {
        let foodTotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
        let totalQty = items.reduce((acc, item) => acc + item.qty, 0);
        let discountTotal = 0;
        
        if (totalQty >= 5) {
            discountTotal = foodTotal * 0.1;
        }
        
        setDiscount(discountTotal);
        setTotal(foodTotal - discountTotal);
    };

    return (
        <div className="bill-container mt-5">
            <div className="bill-content">
                <h1>จิ๊กโก๋..ชาบู</h1>
                <p  style={{ textAlign: "right" }}>วันที่ออกใบเสร็จ {today}</p>
                <table>
                    <thead>
                        <tr>
                            <th>ชื่ออาหาร</th>
                            <th>จำนวน</th>
                            <th>ราคาต่อถาด/ชิ้น</th>
                            <th>รวม</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>
                                    <input 
                                        type="number" 
                                        value={item.qty} 
                                        min="1" 
                                        onChange={(e) => handleQtyChange(item.id, parseInt(e.target.value) || 1)}
                                    />
                                </td>
                                <td>{item.price}.-</td>
                                <td>{(item.price * item.qty).toFixed(2)}.-</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="3">ส่วนลด 10% (หากสั่งครบ 5 ชิ้นขึ้นไป)</td>
                            <td>-{discount.toFixed(2)}.-</td>
                        </tr>
                        <tr>
                            <td colSpan="3">รวมทั้งหมด</td>
                            <td>{total.toFixed(2)}.-</td>
                        </tr>
                    </tbody>
                </table>
                <button className="pay-button">ชำระเงิน</button>
            </div>
        </div>
    );
}

export default Bill;