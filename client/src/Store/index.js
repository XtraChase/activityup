import React from "react";

import * as actions from "../actions";

// Global storage for states using React Hooks
const initialState = {
  category: ""
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
