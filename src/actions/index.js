import spaceXData from '../apis/spaceXData'

export const fetchLaunches = () => async dispatch => {
  const response = await spaceXData.get("/launches?limit=10");

  dispatch({ type: "FETCH_LAUNCHES", payload: response.data });
};