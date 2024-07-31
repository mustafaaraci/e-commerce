import React, { useState } from "react";
import "../css/Register.css";

function Register() {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Kayıt işlemi gerçekleştiriliyor...');
      };
    
  return(
    <>
    <div className="login-container" id='login-container'>
      <div className="login-card">
        <div className="card-header">
          <h2>Kayıt Ol</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="input-groups">
              <label htmlFor="name">İsim</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="input-groups">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="input-groups password-group">
              <label htmlFor="password">Şifre</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                required 
              />
            </div>
            <button type="submit" className="signin-btn">Kayıt Ol</button>
          </form>
         </div>
       </div>
    </div>
  </>
  )
}

export default Register;
