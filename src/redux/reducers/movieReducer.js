import {
  FETCH_MOVIES_ORIGINAL_NETFLIX,
  FETCH_MOVIES_TRADING_NOW,
  FETCH_MOVIES_TOP_RATED,
  FETCH_MOVIES_ACTION,
  FETCH_MOVIES_COMEDY,
  FETCH_MOVIES_HORROR,
  FETCH_MOVIES_ROMANCE,
  FETCH_MOVIES_DOCUMENTAL
} from '../actions/actionTypes';

const initialState = {
  originalNetflixList: [],
  tradingCollectionList: [],
  topRatedCollectionList: [],
  actionCollectionList: [],
  comedyCollectionList: [],
  horrorCollectionList: [],
  romanceCollectionList: [],
  documentalCollectionList: [],
  loaded: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_ORIGINAL_NETFLIX:
      return {
        ...state,
        originalNetflixList: action.payload,
        loaded: true
      };
    case FETCH_MOVIES_TRADING_NOW:
      return {
        ...state,
        tradingCollectionList: action.payload,
        loaded: true
      };
    case FETCH_MOVIES_TOP_RATED:
      return {
        ...state,
        topRatedCollectionList: action.payload,
        loaded: true
      };
    case FETCH_MOVIES_ACTION:
      return {
        ...state,
        actionCollectionList: action.payload,
        loaded: true
      };
    case FETCH_MOVIES_COMEDY:
      return {
        ...state,
        comedyCollectionList: action.payload,
        loaded: true
      };
    case FETCH_MOVIES_HORROR:
      return {
        ...state,
        horrorCollectionList: action.payload,
        loaded: true
      };
    case FETCH_MOVIES_ROMANCE:
      return {
        ...state,
        romanceCollectionList: action.payload,
        loaded: true
      };
    case FETCH_MOVIES_DOCUMENTAL:
      return {
        ...state,
        documentalCollectionList: action.payload,
        loaded: true
      };
    default:
      return state;
  }
}