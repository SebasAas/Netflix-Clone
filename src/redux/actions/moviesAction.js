import {
  FETCH_MOVIES_ORIGINAL_NETFLIX,
  FETCH_MOVIES_TRADING_NOW,
  FETCH_MOVIES_TOP_RATED,
  FETCH_MOVIES_ACTION,
  FETCH_MOVIES_COMEDY,
  FETCH_MOVIES_HORROR,
  FETCH_MOVIES_ROMANCE,
  FETCH_MOVIES_DOCUMENTAL
} from './actionTypes';

// Axios
import instance from '../../request/axios'

export const getOriginalNetflixList = () => async (dispatch) => {
  return await instance.get(`/discover/tv?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_networks=213`)
    .then((res) => {
      if (res.status === 200) {
        console.log("Se ha agregado exitosamente al estado")
        dispatch({
          type: FETCH_MOVIES_ORIGINAL_NETFLIX,
          payload: res.data
        });
        return res.data
      }
      console.log(res.status)
    })
    .catch((err) => {
      alert(err);
    });
}

export const getTradingCollectionList = () => async (dispatch) => {
  return await instance.get(`/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US`)
    .then((res) => {
      if (res.status === 200) {
        console.log("Se ha agregado exitosamente al estado")
        dispatch({
          type: FETCH_MOVIES_TRADING_NOW,
          payload: res.data
        });
        return res.data
      }
      console.log(res.status)
    })
    .catch((err) => {
      alert(err);
    });
}


export const getTopRatedCollectionList = () => async (dispatch) => {
  return await instance.get(`/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US`)
    .then((res) => {
      if (res.status === 200) {
        console.log("Se ha agregado exitosamente al estado")
        dispatch({
          type: FETCH_MOVIES_TOP_RATED,
          payload: res.data
        });
        return res.data
      }
      console.log(res.status)
    })
    .catch((err) => {
      alert(err);
    });
}



export const getActionCollectionList = () => async (dispatch) => {
  return await instance.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_genres=28`)
    .then((res) => {
      if (res.status === 200) {
        console.log("Se ha agregado exitosamente al estado")
        dispatch({
          type: FETCH_MOVIES_ACTION,
          payload: res.data
        });
        return res.data
      }
      console.log(res.status)
    })
    .catch((err) => {
      alert(err);
    });
}


export const getComedyCollectionList = () => async (dispatch) => {
  return await instance.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_genres=35`)
    .then((res) => {
      if (res.status === 200) {
        console.log("Se ha agregado exitosamente al estado")
        dispatch({
          type: FETCH_MOVIES_COMEDY,
          payload: res.data
        });
        return res.data
      }
      console.log(res.status)
    })
    .catch((err) => {
      alert(err);
    });
}


export const getHorrorCollectionList = () => async (dispatch) => {
  return await instance.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_genres=27`)
    .then((res) => {
      if (res.status === 200) {
        console.log("Se ha agregado exitosamente al estado")
        dispatch({
          type: FETCH_MOVIES_HORROR,
          payload: res.data
        });
        return res.data
      }
      console.log(res.status)
    })
    .catch((err) => {
      alert(err);
    });
}


export const getRomanceCollectionList = () => async (dispatch) => {
  return await instance.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_genres=10749`)
    .then((res) => {
      if (res.status === 200) {
        console.log("Se ha agregado exitosamente al estado")
        dispatch({
          type: FETCH_MOVIES_ROMANCE,
          payload: res.data
        });
        return res.data
      }
      console.log(res.status)
    })
    .catch((err) => {
      alert(err);
    });
}

export const getDocumentalCollectionList = () => async (dispatch) => {
  return await instance.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_genres=99`)
    .then((res) => {
      if (res.status === 200) {
        console.log("Se ha agregado exitosamente al estado")
        dispatch({
          type: FETCH_MOVIES_DOCUMENTAL,
          payload: res.data
        });
        return res.data
      }
      console.log(res.status)
    })
    .catch((err) => {
      alert(err);
    });
}

// /discover/tv?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_networks=213
  // /movie/top_rated?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US
  // /discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_genres=28
  // /discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_genres=35
  // /discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_genres=27
  // /discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_genres=10749
  // /discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_genres=99

  // https://api.themoviedb.org/3/discover/movie?api_key=3c79f3f8a4a135efa8db15d8b555abec&sort_by=popularity.desc&page=1    