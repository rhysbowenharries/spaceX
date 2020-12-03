export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_LAUNCHES":
      return action.payload;
    case "FETCH_LAUNCHES_BY_YEAR":
      return action.payload;
    default:
      return state;
  }

}