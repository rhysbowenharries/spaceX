import spaceXData from '../apis/spaceXData'

export const fetchLaunches = () => async dispatch => {
  const response = await spaceXData.get("/launches");

  dispatch({ type: "FETCH_LAUNCHES", payload: response.data });
};

export const fetchLaunchesByYear = (value) => async dispatch => {
  const response = await spaceXData.get(`/launches?launch_year=${value}`);

  dispatch({ type: "FETCH_LAUNCHES_BY_YEAR", payload: response.data });
};

export const fetchLaunchesAndArrange = () => async dispatch => {
  const response = await spaceXData.get(`/launches`);

  dispatch({ type: "FETCH_LAUNCHES_AND_ARRANGE", payload: response.data.reverse() });
};
