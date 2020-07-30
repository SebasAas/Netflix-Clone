import React from 'react'

// Components
import Header from '../Header/Header';

// CSS
import '../../assets/css/NotFound/NotFound.css'

export default function NotFound() {
  return (
    <div>
      <Header optionsMenu={null} actionButton={null} />
      <div className="main__image__notfound">
        <div className="main__text">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 className="main__first__text">¿Te Perdiste?</h1>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <div style={{ height: 'auto', width: '50vw' }}>
              <h3 style={{ fontWeight: '200' }}>No encontramos esa página. Encontrarás muchos títulos para explorar en la página de inicio.</h3>
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <button className="main__button">Inicio de Netflix</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
            <div style={{ borderLeft: '2px solid #E30813', display: 'flex' }}>
              <h3 style={{ fontWeight: '200', marginLeft: '10px' }}>Código de error </h3>
              <h3 style={{ fontWeight: '500', marginLeft: '10px' }}> 404</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
