/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from 'react';
import useIsInViewport from 'use-is-in-viewport'
import video from '../../assets/videos/MalditaTrailer.mp4'

// CSS
import '../../assets/css/Movies/MainMovie.css';

export default function MainMovie() {

  const [viewVideo, setViewVideo] = useState(false);
  const [viewImage, setViewImage] = useState(true);
  const [isMuting, setIsMuting] = useState(true);

  const myVideo = useRef();

  const [isInViewport, containerVideo] = useIsInViewport();

  useEffect(() => {

    setTimeout(() => {
      setViewImage(false);
      // setViewVideo(true);
    }, 4000);
  }, []);

  const playVideo = () => {
    if (viewVideo === false) {
      console.log("Reproduciendo");
      setViewVideo(true);
      // setMuting(false);
      myVideo.current.play();
      // myVideo.current.muted = false;
    }
  }

  const pauseVideo = () => {
    if (viewVideo === true) {
      console.log("Pausado")
      setViewVideo(false);
      // setIsMuting(true);
      myVideo.current.pause();
      // myVideo.current.muted = true;
    }
  }

  const setMuting = () => {
    if (isMuting === true) {
      setIsMuting(false)
      myVideo.current.muted = false;
    } else {
      setIsMuting(true)
      myVideo.current.muted = true;
    }
  }

  const showImageMain = () => {
    return (
      <div>
        <img
          src="https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVrDfQDf1gu--FwT7vgHrJkA2tqjLSHd_Un4CEuAJQdZxX2kJfsZKd66QqpKIGkeZrbMFF16VFsoJy1OjYMr2zDet_TF.webp?r=0ef"
          alt="main_image"
          className="home__image"
          style={{ position: 'absolute' }}
        />
      </div>
    );
  }

  const showVideoMain = () => {
    return (
      <div style={{ height: '40vw', position: 'absolute' }} ref={containerVideo} onMouseOver={checkIfOver}>
        {isInViewport ? playVideo() : pauseVideo()}
        <video style={{ position: 'relative' }} className="home__video" loop muted autoPlay ref={myVideo}>
          <source src={video} />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
      </div>
    );
  }

  const checkIfOver = () => {
    setViewVideo(true);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="home__container col-12">
          {(viewImage) ?
            showImageMain()
            :
            showVideoMain()
          }
          <div className="col-8 col-sm-8 col-md-8 col-xl-8 col-lg-8 home__container__title__desc">
            <div className="home__info">
              <div className="col-10 col-sm-10 col-md-10 col-xl-10 col-lg-10">
                <img
                  className="home__logo__image"
                  src="https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABfEU2sNFCgRVWkPkZFRbMLlwXQQtPlGnWTtaadB3B5Ma4NhGpMQmSWqDW5AFq1lgKaULhcXiOlmKCkpmAMSVnhoL1wgjxK5ZRHkgK7EhKp7eFaNkEF-yXF8OdJCbv1X-0NIOipAIpJA0mybff-YFbC5JxWI5INurRc_-klIlTNqdig.webp?r=84f"
                  alt="maldita" />
              </div>
              <div className="home__info__description">
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 home__rating__country">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-camera-reels home__logo__banner" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2.667 7C2.022 7 1.5 7.522 1.5 8.167v5.666c0 .645.522 1.167 1.167 1.167h6.666c.645 0 1.167-.522 1.167-1.167V8.167C10.5 7.522 9.978 7 9.333 7H2.667zM.5 8.167C.5 6.97 1.47 6 2.667 6h6.666c1.197 0 2.167.97 2.167 2.167v5.666C11.5 15.03 10.53 16 9.333 16H2.667A2.167 2.167 0 0 1 .5 13.833V8.167z" />
                    <path fillRule="evenodd" d="M11.25 9.15l2.768-1.605a.318.318 0 0 1 .482.263v6.384c0 .228-.26.393-.482.264l-2.767-1.605-.502.865 2.767 1.605c.859.498 1.984-.095 1.984-1.129V7.808c0-1.033-1.125-1.626-1.984-1.128L10.75 8.285l.502.865zM3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path fillRule="evenodd" d="M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                &nbsp;&nbsp;
                  <span>N.° 2 en Argentina hoy</span>
                </div>
                <div className="col-10 col-sm-10 col-md-10 col-xl-10 col-lg-10 home__desc__banner">
                  <p>Por sus poderes se convirtió en una marginada. Por su espada, en una leyenda. Su gente la convertirá en reina.</p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12" style={{ marginTop: '1vw', display: 'flex' }}>
                  <button className="home__button__play">
                    <svg width="2.5vw" height="2.5vw" viewBox="0 0 16 16" className="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                    <span style={{ paddingLeft: '1vw' }}>Reproducir</span>
                  </button>
                  <button className="home__button__moreinfo">
                    <svg width="1.9vw" height="1.9vw" viewBox="0 0 16 16" className="bi bi-info-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
                      <circle cx="8" cy="4.5" r="1" />
                    </svg>
                    <span style={{ paddingLeft: '1vw' }}>Mas Informacion</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
          <div className="home__sound">
            {(viewVideo) ?
              <button type="button" className="bottom-right" onClick={setMuting}>
                {(isMuting) ?
                  <svg viewBox="0 0 16 16" className="bi bi-volume-mute-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0z" />
                    <path fillRule="evenodd" d="M9.146 5.646a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0z" />
                  </svg>
                  :
                  <svg viewBox="0 0 16 16" className="bi bi-volume-up-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
                    <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
                    <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z" />
                    <path fillRule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
                  </svg>
                }
              </button>
              :
              <></>
            }
          </div>
          <div className="home__limit">
            <span>16+</span>
          </div>
        </div>
      </div>
    </div >
  );
}
