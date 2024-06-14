import React, { useState } from 'react';
import "../css/Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
   alert('Kontrol ediliyor...');
  };


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  return (
 <>
  <>
      <div className="login-container" id='login-container'>
        <div className="login-card">
          <div className="card-header">
            <h2>Giriş Yap</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="input-groups">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="input-groups password-group">
                <label htmlFor="password">Şifre</label>
                <input 
                  type={passwordVisible ? "text" : "password"} 
                  id="password" 
                  name="password" 
                  required 
                />
                <span className="password-toggle" onClick={togglePasswordVisibility}>
                  <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                </span>
              </div>
              <div className="checkbox">
                <input type="checkbox" id="rememberMe" name="rememberMe" />
                <label htmlFor="rememberMe">Beni hatırla</label>
              </div>
              <button type="submit" className="signin-btn">Giriş</button>
            </form>
          </div>
          <div className="card-footer">
            <p className="text-muted">Hesabınız yok mu? <Link to="/register">Hesap Oluştur</Link></p>
          </div>
        </div>
      </div>
    </>
 </>
  );
}

export default Login;
