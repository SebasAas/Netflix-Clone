import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Components
import Header from '../Header/Header';

// CSS
import '../../assets/css/Form/Login.css';

import { auth } from '../../server/firebase';

export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const sendCredentials = (e) => {

    e.preventDefault()

    auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then(res => {
        console.log(res);
        history.push('/login')
      })
      .catch(function (error) {
        // var errorCode = error.code;
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  // auth.onAuthStateChanged(function (user) {
  //   if (user) {

  //     console.log(user)

  //     // User is signed in.
  //     var displayName = user.displayName;
  //     var email = user.email;
  //     var emailVerified = user.emailVerified;
  //     var photoURL = user.photoURL;
  //     var isAnonymous = user.isAnonymous;
  //     var uid = user.uid;
  //     var providerData = user.providerData;

  //     // alert(displayName, email, emailVerified)

  //   } else {
  //     alert("Sign Out")
  //   }
  // });

  return (
    <div>
      <Header optionsMenu={null} actionButton={null} />
      <div className="main__image__login">
        <div className="main__text__login">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              height: '32vw', width: '35vw', backgroundColor: 'black', opacity: '0.8',
            }}>
              <div style={{ padding: '2vw', marginTop: '2vw' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <h4 style={{ opacity: 1, color: 'white', fontSize: '2.5vw' }}>Registrarse</h4>
                </div>
                <form onSubmit={sendCredentials} style={{ marginTop: '2vw' }}>
                  <input type="email" ref={emailRef} style={{ width: '30vw', height: '4vw', padding: '1vw', fontSize: '1.3vw', border: 'none', borderRadius: '5px' }} placeholder="Email" />

                  <input type="password" ref={passwordRef} style={{ width: '30vw', height: '4vw', padding: '1vw', fontSize: '1.3vw', marginTop: '15px', border: 'none', borderRadius: '5px' }} placeholder="Contraseña" />

                  <input type="submit" name="" value="Iniciar sesion" style={{
                    width: '30vw', height: '4vw', padding: '1vw',
                    fontSize: '1.4vw', marginTop: '3.2vw', border: 'none', borderRadius: '5px', backgroundColor: '#E30813',
                    color: 'white', fontFamily: 'Rubik'
                  }} />

                </form>
                <Link to="/login">Iniciar Sesion</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}