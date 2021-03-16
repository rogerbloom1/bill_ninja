/* const React = require("react");
const { render } = require ("react-dom");
const app = require(./App");
const scssApp = require("./scss/App"); */

import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./scss/App";


render(<App />, document.getElementById("root"));
