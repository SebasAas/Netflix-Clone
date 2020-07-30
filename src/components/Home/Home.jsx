import React from 'react'

// Components
import Header from '../Header/Header';
import MainMovie from '../Movies/MainMovie';
import MovieList from '../Movies/MovieList';

export default function Home(props) {

  console.log(props)

  const linkProfile = () => {
    return (
      <img
        src="https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABbU3UHUlkChqMS0UORybrasISolcRmk12xz3v84eycdFXFb0OpRQn-eS1DPXHPfnedUm2GsZylJOXOpNbDjSDMw.png?r=a41"
        alt="profile-icon"
      />
    );
  }

  const linkMenu = () => {
    return (
      <div style={{ height: 'auto', width: '100%', marginLeft: '1vw' }}>
        <div style={{ display: 'flex' }} className="header__container__options">
          <ul className="header__option">
            <li className="nav-item active d-none d-xs-none d-sm-none d-md-block d-lg-block header__options__navbar">
              <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item d-none d-xs-none d-sm-none d-md-block d-lg-block header__options__navbar">
              <a className="nav-link" href="#">Programas</a>
            </li>
            <li className="nav-item d-none d-xs-none d-sm-none d-md-block d-lg-block header__options__navbar">
              <a className="nav-link" href="#">Peliculas</a>
            </li>
            <li className="nav-item dropdown d-block d-sm-block d-sm-block d-md-none d-lg-none header__dropdown__navbar">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Explorar
                  </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{ backgroundColor: 'black' }}>
                <a className="dropdown-item" style={{ color: 'white' }} href="#">Inicio</a>
                <a className="dropdown-item" style={{ color: 'white' }} href="#">Programas</a>
                <a className="dropdown-item" style={{ color: 'white' }} href="#">Peliculas</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header optionsMenu={linkMenu()} actionButton={linkProfile()} />
      <MainMovie />
      <div style={{ marginTop: '-12vw' }}>
        <MovieList />
      </div>
    </>
  )
}
