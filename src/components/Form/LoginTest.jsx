import React, { useRef } from 'react'

// CSS
import '../../assets/css/Form/Login.css';

// Actions
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/actions/usersAction';

function LoginTest(props) {

  const emailRef = useRef();
  const passwordRef = useRef();

  const sendCredentials = (e) => {
    e.preventDefault()

    const currentUser = {
      'email': "email@email.com",
      'emailVerified': false,
      'phoneNumber': 234234,
      'photoURL': false,
      'uid': "128391dfj24134lj"
    }

    props.setCurrentUser(currentUser)

  }

  return (
    <div>
      <form onSubmit={sendCredentials} style={{ marginTop: '2vw' }}>
        <input type="email" ref={emailRef} style={{ width: '30vw', height: '4vw', padding: '1vw', fontSize: '1.3vw', border: 'none', borderRadius: '5px' }} placeholder="Email" />

        <input type="password" ref={passwordRef} style={{ width: '30vw', height: '4vw', padding: '1vw', fontSize: '1.3vw', marginTop: '15px', border: 'none', borderRadius: '5px' }} placeholder="Contraseña" />

        <input type="submit" name="" value="Iniciar sesion" style={{
          width: '30vw', height: '4vw', padding: '1vw',
          fontSize: '1.4vw', marginTop: '3.2vw', border: 'none', borderRadius: '5px', backgroundColor: '#E30813',
          color: 'white', fontFamily: 'Rubik'
        }} />
      </form>
    </div>
  )
}

export default connect(null, { setCurrentUser })(LoginTest);