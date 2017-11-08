// @flow

import { USER } from "./ActionTypes";

export function request(url: string, payload: Object) {
  return {
    url,
    payload,
    type: USER.REQUEST
  };
}

export function success(data: Object) {
  return {
    data,
    type: USER.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: USER.FAILURE
  };
}
