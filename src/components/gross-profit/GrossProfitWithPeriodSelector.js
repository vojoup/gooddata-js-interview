import * as React from 'react'
import { Model } from '@gooddata/react-components';
import MonthPeriodSelector from "./MonthPeriodSelector";
import monthOptions from "../../utils/monthOptions";
import GrossProfitGraphs from "./GrossProfitGraphs";

const GrossProfitWithPeriodSelector = (props) => {
  const { projectId, dateAttribute, dateAttributeInMonths, grossProfitMeasure, defaultPeriod, title } = props;
  const [selectedPeriod, setSelectedPeriod] = React.useState(defaultPeriod || {
    from: '2016-01-01',
    to: '2016-01-31'
  });

  const periodFilter = React.useMemo(() => Model.absoluteDateFilter(dateAttribute, selectedPeriod.from, selectedPeriod.to), [dateAttribute, selectedPeriod]);
  const measures = React.useMemo(() => [Model.measure(grossProfitMeasure).localIdentifier('m1').alias('$ Gross Profit')], [grossProfitMeasure]);
  const viewBy = React.useMemo(() => Model.attribute(dateAttributeInMonths).localIdentifier(
    'a1',
  ), [dateAttributeInMonths]);

  return (
    <div className="App">
      <MonthPeriodSelector
        defaultValue={selectedPeriod}
        months={monthOptions}
        onChange={(period) => setSelectedPeriod(period)}
        // Idealy there would also be a year selector. Or even better a full blown period selector.
        year={'2016'}
      />
      <GrossProfitGraphs
        periodFilter={periodFilter}
        measures={measures}
        viewBy={viewBy}
        projectId={projectId}
        title={title}
      />
    </div>
  );
}

export default GrossProfitWithPeriodSelector;
