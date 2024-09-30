import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    newsletter: false,
    agreement: false,
    country: "",
    theme: "light",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    alert(`User: ${formData.username}, Email: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="other"
          checked={formData.gender === "other"}
          onChange={handleChange}
        />
        Other
      </div>

      <div>
        <label>Newsletter:</label>
        <input
          type="checkbox"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
        />
        Subscribe to newsletter
      </div>

      <div>
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select your country</option>
          <option value="Ukraine">Ukraine</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
      </div>

      <div>
        <label>Theme:</label>
        <input
          type="radio"
          name="theme"
          value="light"
          checked={formData.theme === "light"}
          onChange={handleChange}
        />
        Light
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={formData.theme === "dark"}
          onChange={handleChange}
        />
        Dark
      </div>

      <div>
        <label>Agreement:</label>
        <input
          type="checkbox"
          name="agreement"
          checked={formData.agreement}
          onChange={handleChange}
        />
        I agree to the terms and conditions
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
