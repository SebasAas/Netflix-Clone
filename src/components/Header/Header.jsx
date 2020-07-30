import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
// import { netflix } from '../../assets/images/Header/netflix_logo.png'

// CSS
import '../../assets/css/Header/Header.css'

export default function Header({ optionsMenu, actionButton }) {

  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()

  navRef.current = navBackground

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 30
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }

  }, [])

  let style = {
    backgroundColor: navBackground ? 'black' : 'transparent',
    transition: '0.5s ease',
    padding: '0',
  }

  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <nav style={style} className="navbar navbar-expand-lg fixed-top header__container">

        <div className="row" style={{ height: '100%', width: '100%' }}>

          <div className="col-9" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <div className="pl-3">
              <Link className="navbar-brand" to="/">
                <img src={require("../../assets/images/Header/netflix_logo.png")} className="header__logo__netflix" alt="netflix_logo" />
              </Link>
            </div>
            {optionsMenu}
          </div>

          <div className="col-3 header__profile__icon">
            {actionButton}
          </div>
        </div>
      </nav>
    </div>
  )
}