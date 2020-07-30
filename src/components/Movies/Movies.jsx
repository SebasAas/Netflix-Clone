import React, { useState } from 'react'

// Videos
// import video from '../../assets/videos/MalditaTrailer.mp4'

// Axios
import instance from '../../request/axios';

export default function Movies({ movies, isLarge, title }) {

  const [existVideo, setExistVideo] = useState(false)
  const [idYoutubeVideo, setIdYoutubeVideo] = useState()
  const [idMovie, setIdMovie] = useState()
  const [idMovieMax, setIdMovieMax] = useState()
  const [maxVideo, setMaxVideo] = useState(false)

  const baseURL = 'https://image.tmdb.org/t/p/original';

  const showMiniVideo = (id) => {
    setIdMovie(id);
    setTimeout(() => {
      fetchYoutubeVideo(id)
        .then(res => {
          if (res.results.length === 0) {
            setExistVideo(false)
            return setIdYoutubeVideo()
          }
          else {
            setExistVideo(true)
            res.results.map(thriler => {
              setIdMovieMax(thriler.key)
              return setIdYoutubeVideo(thriler.key)
            })
          }
        })
        .catch(err => {
          setExistVideo(false)
          console.error(err)
          return setIdYoutubeVideo()
        });
    }, 1000);
  }

  const stopMiniVideo = () => {
    setIdMovie();
    return setIdYoutubeVideo();
  }

  async function fetchYoutubeVideo(id) {
    return await instance.get(`/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        alert(err);
      })
  }

  const showVideoMax = () => {
    return (
      <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <iframe width="90%" height="600px" src={`https://www.youtube.com/embed/${idMovieMax}?autoplay=1&mute=1`} frameBorder="0" allow="autoplay; encrypted-media;" allowFullScreen></iframe>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row movie__row">
        <div className="movie__container__images">
          <h3 className="movies__title">{title}</h3>
          <div className="row__inner">
            {movies.map(movie => (
              <div key={movie.id} className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src={`${baseURL}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.title}
                  />
                </div>
                <div className="tile__details d-none d-xs-none d-sm-none d-md-none d-lg-block">
                  <div className="tile__title" style={{ zIndex: '99' }}>
                    {movie.title} {movie.name}
                  </div>

                  <div onMouseEnter={() => showMiniVideo(movie.id)}
                    onClick={() => setMaxVideo(true)}
                    onMouseLeave={stopMiniVideo} style={{ position: 'relative', height: '100%', width: '100%' }}>
                    <div
                      style={{
                        height: '100%', width: '100%', position: 'absolute'
                      }}>
                    </div>
                    <div
                      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: 'auto' }}>
                      {idYoutubeVideo ?

                        (idMovie === movie.id ?
                          (existVideo ?

                            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${idYoutubeVideo}?autoplay=1&mute=1`} frameBorder="0" allow="autoplay; encrypted-media;"></iframe>
                            :

                            null

                          )

                          :

                          null
                        )

                        :

                        <svg style={{ color: 'white' }} width="1.5vw" height="1.5vw" viewBox="0 0 16 16" className="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg>

                      }
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {
          maxVideo ?

            showVideoMax()
            :
            null

        }
      </div>
    </div >
  );
}