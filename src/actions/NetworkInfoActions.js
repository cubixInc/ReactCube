// @flow

import * as types from "./ActionTypes";

export default function networkInfoListener(
  isNetworkConnected: boolean = false
) {
  return {
    type: types.NETWORK_INFO,
    isNetworkConnected
  };
}
