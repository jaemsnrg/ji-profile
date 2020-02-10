import { RSAA } from 'redux-api-middleware';

export const DUMMYACTION_REQUEST = 'dummyaction';
export const DUMMYACTION_SUCCESS = 'dummyactionsuccess';
export const DUMMYACTION_FAILURE = 'dummyactionfailure';

export const getDummyData = () => ({
  [RSAA]: {
    endpoint: 'http://www.geoplugin.net/json.gp?ip=11.111.111.11',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [
      DUMMYACTION_REQUEST,
      DUMMYACTION_SUCCESS,
      DUMMYACTION_FAILURE,
    ],
  },
});
