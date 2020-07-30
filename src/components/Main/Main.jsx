import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Components
import Header from '../Header/Header';

// CSS
import '../../assets/css/Main/Main.css';

// Firebase
import { auth } from '../../server/firebase';

// Actions
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/usersAction';

function Main(props) {

  const history = useHistory();
  // const [usuario, setUsuario] = useState(false)

  // console.log(props.user)

  // auth.onAuthStateChanged(function (user) {

  //   if (user) {
  //     setUsuario(true)
  //   } else {
  //     setUsuario(false)
  //   }
  // });

  // onClick={() => auth.signOut()}

  const signOutAcc = () => {
    auth.signOut();
    history.push('/browser');
    props.signOut();
  }

  const registerButton = () => {
    if ((Object.keys(props.user).length) > 0) {
      return (
        <Link onClick={() => signOutAcc()} to="#" className="main__signin">
          Cerrar sesión
        </Link>
      );
    }
    return (
      <Link to="/login" className="main__signin">
        Iniciar sesión
      </Link>
    );
  }

  return (
    <div>
      <Header optionsMenu={null} actionButton={registerButton()} />
      <div className="main__image">
        <div className="main__text">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ height: 'auto', width: '40vw' }}>
              <h1 style={{ fontWeight: '700' }}>Programas y películas sin límite y mucho más.</h1>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ height: 'auto', width: '50vw' }}>
              <h3 className="">Disfruta donde quieras. Cancela cuando quieras.</h3>
            </div>
          </div>
          <input type="text" placeholder="Email" className="main__input" />
          <div>
            <button className="main__button__main">COMIENZA YA</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h4 className="main__third__text">¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user.currentUser
});

export default connect(mapStateToProps, { signOut })(Main);