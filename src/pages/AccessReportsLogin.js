import React, { useState } from "react";
import "./AccessReportsLogin.css";

const AccessReportsLogin = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone Number Submitted:", phone);
    // You can add validation, API calls, etc. here
  };

  return (
    <div className="lab-login-container">
      <div className="lab-login-box">
        <h1 className="lab-login-title">Access Lab Reports</h1>
        <p className="lab-login-subtitle">Please enter mobile number below:</p>

        <form onSubmit={handleSubmit} className="lab-login-form">
          <label htmlFor="phone" className="input-label">Enter Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            maxLength="10"
            required
            placeholder="e.g., 9876543210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>

        <div className="lab-disclaimer">
          <p>
            All content of this system and its associated sub-systems are <strong>PROPRIETARY INFORMATION</strong> and remain the sole and exclusive property of MHEPL.
            This system may be accessed and used by authorized personnel only.
          </p>
          <p>
            Authorized users may only perform authorized activities and may not exceed the limits of such authorization.
            Disclosure of information found in this system for any unauthorized use is <span className="highlight">STRICTLY PROHIBITED</span>.
            All activities on this system are subject to monitoring.
            Intentional misuse of this system can result in disciplinary action or criminal prosecution.
          </p>
          <p className="support-text">
            In case you are facing difficulties, please mail us at <b>sukamspecialityclinic@gmail.com</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessReportsLogin;
