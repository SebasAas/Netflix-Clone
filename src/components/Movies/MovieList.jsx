import React, { useState, useEffect } from 'react'

// Component
import Movies from '../Movies/Movies';

// CSS
import '../../assets/css/Movies/Movies.css'

// Redux
import { connect } from "react-redux";

// Actions
import {
  getOriginalNetflixList,
  getTradingCollectionList,
  getTopRatedCollectionList,
  getActionCollectionList,
  getComedyCollectionList,
  getHorrorCollectionList,
  getRomanceCollectionList,
  getDocumentalCollectionList,
} from '../../redux/actions/moviesAction';

function MovieList(props) {

  const [netflixMovies, setNetflixMovies] = useState([]);
  const [tradingMovies, setTradingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [documentalMovies, setDocumentalMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(props.loaded);

  useEffect(() => {
    props.getOriginalNetflixList()
      .then((res) => {
        setNetflixMovies(res.results);
      })
      .catch((err) => {
        alert(err)
      });

    props.getTradingCollectionList()
      .then((res) => {
        setTradingMovies(res.results);
      })
      .catch((err) => {
        alert(err)
      });

    props.getTopRatedCollectionList()
      .then((res) => {
        setTopRatedMovies(res.results);
      })
      .catch((err) => {
        alert(err)
      });

    props.getActionCollectionList()
      .then((res) => {
        setActionMovies(res.results);
      })
      .catch((err) => {
        alert(err)
      });

    props.getComedyCollectionList()
      .then((res) => {
        setComedyMovies(res.results);
      })
      .catch((err) => {
        alert(err)
      });

    props.getHorrorCollectionList()
      .then((res) => {
        setHorrorMovies(res.results);
      })
      .catch((err) => {
        alert(err)
      });

    props.getRomanceCollectionList()
      .then((res) => {
        setRomanceMovies(res.results);
      })
      .catch((err) => {
        alert(err)
      });

    props.getDocumentalCollectionList()
      .then((res) => {
        setDocumentalMovies(res.results);
      })
      .catch((err) => {
        alert(err)
      });

  }, []);

  useEffect(() => {
    setIsLoaded(props.loaded)
  }, [props.loaded])

  const ContentLoading = () => {
    return (
      <h1>Cargando</h1>
    )
  }

  const ContentReady = () => {
    return (
      <>
        <Movies movies={netflixMovies} title="Populares Netflix" />
        <Movies movies={topRatedMovies} title="Mas Vistas" />
        <Movies movies={actionMovies} title="Acción" />
        <Movies movies={comedyMovies} title="Comedia" />
        <Movies movies={horrorMovies} title="Horror" />
        <Movies movies={romanceMovies} title="Romance" />
        <Movies movies={documentalMovies} title="Documental" />
      </>
    )
  }

  return (
    <>
      {isLoaded && netflixMovies.length > 0 ?
        ContentReady()
        :
        ContentLoading()
      }
    </>
  )
}

const mapStateToProps = state => ({
  movies: state.movies,
  loaded: state.movies.loaded
});

const mapDispatchToProps = {
  getOriginalNetflixList,
  getTradingCollectionList,
  getTopRatedCollectionList,
  getActionCollectionList,
  getComedyCollectionList,
  getHorrorCollectionList,
  getRomanceCollectionList,
  getDocumentalCollectionList,
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)