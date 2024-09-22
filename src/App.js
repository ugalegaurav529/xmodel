import React, { useState } from 'react';
import './App.css'; 

const XModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        dob: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { username, email, phone, dob } = formData;

        if (!username) {
            alert("Please fill out the Username field.");
            return false;
        }
        if (!email || !email.includes('@')) {
            alert("Invalid email. Please check your email address.");
            return false;
        }
        if (!phone || phone.length !== 10) {
            alert("Invalid phone number. Please enter a 10-digit phone number.");
            return false;
        }
        const dobDate = new Date(dob);
        if (dobDate > new Date()) {
            alert("Invalid date of birth. Please enter a past date.");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully!");
            setFormData({
                username: '',
                email: '',
                phone: '',
                dob: ''
            });
            setIsOpen(false);
        }
    };

    const handleOutsideClick = (e) => {
        if (e.target.className === "modal") {
            setIsOpen(false);
        }
    };

    return (
      <>
      <div><h1 style={{textAlign:"center"}}>User Details Model</h1></div>
      <div className="app">
            <button onClick={() => setIsOpen(true)}>Open Form</button>
            {isOpen && (
                <div className="modal" onClick={handleOutsideClick}>
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username:</label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone:</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="dob">Date of Birth:</label>
                                <input
                                    id="dob"
                                    name="dob"
                                    type="date"
                                    value={formData.dob}
                                    onChange={handleChange}
                                />
                            </div>
                            <button className="submit-button" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default XModal;
