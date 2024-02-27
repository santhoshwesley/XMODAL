import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function XModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setFormData({
      username: "",
      email: "",
      phone: "",
      dob: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (formData.phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const currentDate = new Date().toLocaleDateString().slice(0, 10);
    if (formData.dob > currentDate) {
      alert("Invalid date of birth. Please enter a past date.");
      return;
    }

    handleCloseModal();
    alert("Form submitted successfully!");
  };

  return (
    <div className="modal">
      <div className="initial-container">
        <h1>User Details Modal</h1>
        <button onClick={handleOpenModal}>Open Form</button>
      </div>
      {isOpen && (
        <div className="modal-content ">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
            />

            <button type="submit" className="submit-button">
              Submit
            </button>
            <div onClick={handleCloseModal}>
              <button className="close-button">Close</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default XModal;
