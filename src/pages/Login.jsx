import React from 'react';
import "../css/Login.css";


function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder for form submission logic
    alert('Form submitted!');
  };
  return (
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
            <div className="input-groups">
              <label htmlFor="password">Şifre</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="checkbox">
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe">Beni hatırla</label>
            </div>
            <button type="submit" className="signin-btn">Giriş</button>
          </form>
        </div>
        <div className="card-footer">
          <p className="text-muted">Hesabınız yok mu? <a href="#">Hesap Oluştur</a></p>
        </div>
      </div>
    </div>
 </>
  );
}

export default Login;
