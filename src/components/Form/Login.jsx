import React, { useRef } from 'react'
import { Link, useHistory } from 'react-router-dom';

// Components
import Header from '../Header/Header';

// CSS
import '../../assets/css/Form/Login.css';

// Firebase
import { auth } from '../../server/firebase';

// Actions
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/usersAction';

function Login(props) {

  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const sendCredentials = (e) => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then(res => {

        const currentUser = {
          'email': res.user.email,
          'emailVerified': res.user.emailVerified,
          'phoneNumber': res.user.phoneNumber,
          'photoURL': res.user.photoURL,
          'uid': res.user.uid
        }

        props.signIn(currentUser)

        history.push('/browser')

      })
      .catch(function (error) {
        // var errorCode = error.code;
        var errorMessage = error.message;
        passwordRef.current.value = ""
        alert(errorMessage)
      });
  }

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
                  <h4 style={{ opacity: 1, color: 'white', fontSize: '2.5vw' }}>Inicia sesión</h4>
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
                <Link to='/register'>Registrarse</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { signIn })(Login);