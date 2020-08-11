import * as React from 'react'
import { ColumnChart } from '@gooddata/react-components';

const GrossProfitGraphs = (props) => {
  const { projectId, measures, periodFilter, viewBy, title } = props;

  return (
    <div className="App">
      <h1>{`${title} in picked period`}</h1>
      <div>
        <ColumnChart
          measures={measures}
          filters={[periodFilter]}
          projectId={projectId}
          viewBy={viewBy}
        />
      </div>
      <h1>{`${title} - All months`}</h1>
      <div>
        <ColumnChart
          measures={measures}
          viewBy={viewBy}
          projectId={projectId}
        />
      </div>
    </div>
  );
}

export default GrossProfitGraphs;
