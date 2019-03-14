function handleSuccess(dispatch, onSuccess, getState) {
  return (response) => {
    onSuccess(dispatch, response, getState);
    return true;
  };
}

function handleFailure(dispatch, onFailure, getState) {
  return (error) => {
    onFailure(dispatch, error, getState);
    return true;
  };
}

export default function dispatchRequest(
  {
    request, requestAction, onSuccess, onFailure,
  },
) {
  return (dispatch, getState) => {
    dispatch({ type: requestAction });

    return request(getState)
      .then(handleSuccess(dispatch, onSuccess, getState))
      .catch(handleFailure(dispatch, onFailure, getState));
  };
}
