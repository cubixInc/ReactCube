// @flow

import { EMPTY } from "./ActionTypes";

export function request() {
  return {
    type: EMPTY.REQUEST
  };
}

export function success(data: Object) {
  return {
    data,
    type: EMPTY.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: EMPTY.FAILURE
  };
}
