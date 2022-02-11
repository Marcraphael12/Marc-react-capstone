import { fetchFromApi, catchFromApi } from '../../apis/countryData';

const LOAD_DATA = 'covid-data-app/covid/LOAD_DATA';
const SELECT_DATA = 'covid-data-app/covid/SELECT_DATA';
const HISTORY_DATA = 'covid-data-app/covid/HISTORY_DATA';
const DATA_LOADING = 'covid-data-app/covid/DATA_LOADING';

const initialState = {
  countries: {},
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        countries: action.payload.countries,
        total: action.payload.total,
        loading: false,
      };
    case SELECT_DATA:
      return {
        ...state,
        currentCountry: action.payload,
        loading: false,
      };

    case HISTORY_DATA:
      return {
        ...state,
        currentHistory: action.payload,
        loading: false,
      };
    case DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

const loadData = (payload) => ({
  type: LOAD_DATA,
  payload,
});

const selectData = (payload) => ({
  type: SELECT_DATA,
  payload,
});

const loadHistoryData = (payload) => ({
  type: HISTORY_DATA,
  payload,
});
const dataLoading = (payload) => ({
  type: DATA_LOADING,
  payload,
});

const loadDataThunk = () => async (dispatch) => {
  try {
    const data = await fetchFromApi();
    dispatch(loadData(data));
  } catch (e) {
    const data = await catchFromApi();
    dispatch(loadData(data));
  }
};

const loadHistoryThunk = (country) => async (dispatch) => {
  const data = await fetchFromApi(country);
  const { dates } = data;
  if (dates) {
    dispatch(loadHistoryData(dates));
  }
};

export {
  covidReducer, loadHistoryThunk, loadDataThunk, loadData, selectData, dataLoading,
};