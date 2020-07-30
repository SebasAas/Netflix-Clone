import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

// Components
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Login from './components/Form/Login';
import Signup from './components/Form/Signup';
import NotFound from './components/NotFound/NotFound'

// Actions
import { connect } from 'react-redux';

function App(props) {

  const history = useHistory();

  // if ((Object.keys(props.user).length) > 0) {
  //   console.log("objeto no vacio");
  //   console.log(props.user)
  // } else {
  //   console.log("objeto vacio")
  //   console.log(props.user)
  // }

  // const [usuario, setUsuario] = useState(false)

  // auth.onAuthStateChanged(function (user) {
  //   if (user) {
  //     setUsuario(true)
  //   } else {
  //     setUsuario(false)
  //   }
  // });

  return (
    <>
      <Switch>

        {/* {(Object.keys(props.user).length) > 0 ?
          history.push('/browser')
          :
          
        } */}

        <Route exact path="/" component={Main} />


        {(Object.keys(props.user).length) > 0 ?
          <Route exact path="/browser" component={Home} />
          :
          <Route exact path="/browser" component={Login} />
        }

        <Route exact path="/login" component={Login} />

        <Route exact path="/register" component={Signup} />

        <Route component={NotFound} />

      </Switch>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.user.currentUser
});

export default connect(mapStateToProps)(App);