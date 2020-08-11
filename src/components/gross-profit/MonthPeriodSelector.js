import * as React from "react";
import Selector from "../ui/Selector";
import formatDate from "../../utils/formatDate";

const MonthPeriodSelector = (props) => {
  const { months, onChange, defaultValue, year } = props;

  const onMonthPeriodChange = (month) => {
    const firstDayInMonth = '01';
    const lastDayInMonth = new Date(year, month, 0).getDate();

    onChange({ from: formatDate(year, month, firstDayInMonth), to: formatDate(year, month, lastDayInMonth) });
  }

  return (
    <Selector label="Pick a period" options={months} onChange={onMonthPeriodChange} defaultValue={defaultValue} />
  );
}

export default MonthPeriodSelector;
