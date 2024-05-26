import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Login() {

  return (
    <MDBContainer fluid>
      <div className='login-card'>
    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
      <MDBCol col='12'>

        <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
          <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

            <h3 className="fw-bold mb-2 text-uppercase">Merhaba,
Moon’a giriş yap veya hesap oluştur, indirimleri kaçırma!</h3>
            <p className="text-white-50 mb-5">Lütfen kullanıcı adı ve şifrenizi girin!</p>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email' id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Şifre' id='formControlLg' type='password' size="lg"/>

            <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Şifremi Unuttum?</a></p>
            <MDBBtn outline className='mx-2 px-5' color='white' size='lg'> Giriş Yap
              
            </MDBBtn>
            <div>
              <p className="mb-0">Hesabınız yok mu? <a href="#!" class="text-white-50 fw-bold">Üye ol</a></p>

            </div>
          </MDBCardBody>
        </MDBCard>

      </MDBCol>
    </MDBRow>
    </div>
  </MDBContainer>
  )
}

export default Login;
