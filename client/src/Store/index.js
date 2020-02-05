import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";

// global-hooks store
const initialState = {
  category: ""
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
