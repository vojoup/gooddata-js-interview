// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react';
import '@gooddata/react-components/styles/css/main.css';
import GrossProfitWithPeriodSelector from "./components/gross-profit/GrossProfitWithPeriodSelector";
import { DATE_ATTRIBUTE, DATE_ATTRIBUTE_IN_MONTHS, GROSS_PROFIT_MEASURE, PROJECT_ID } from "./config/config";

import '@gooddata/react-components/styles/css/main.css';

const App = () => (
  <GrossProfitWithPeriodSelector
    projectId={PROJECT_ID} // Some of these constants could be defined on the environment level and come from process.env. However I'm not sure if projectId is set per customer/installation or changes frequently.
    dateAttribute={DATE_ATTRIBUTE}
    dateAttributeInMonths={DATE_ATTRIBUTE_IN_MONTHS}
    grossProfitMeasure={GROSS_PROFIT_MEASURE}
    title="$ Gross Profit"
    defaultPeriod={{
      from: '2016-01-01',
      to: '2016-01-31'
    }}
  />
)

export default App;
