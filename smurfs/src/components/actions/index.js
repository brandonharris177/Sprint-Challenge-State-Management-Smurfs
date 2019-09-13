import axios from "axios";

export const GETING_SMURF_START = "GETING_SMURF_START";
export const GETING_SMURF_SUCCESS = "GETING_SMURF_SUCCESS";
export const GETING_SMURF_FAILURE = "GETING_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GETING_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      // console.log(res.data)
      dispatch({ type: GETING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: GETING_SMURF_FAILURE });
    });
};