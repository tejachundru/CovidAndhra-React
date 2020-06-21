import React from 'react';

import useChartConfig from './useChartConfig';
import Box from './Box';
// import SyntaxHighlighter from 'components/SyntaxHighlighter';
import { Chart } from 'react-charts';
export default function SyncedCursors(props) {
  const [
    { primaryCursorValue, secondaryCursorValue },
    setState,
  ] = React.useState({
    primaryCursorValue: null,
    secondaryCursorValue: null,
  });
  const axes = React.useMemo(
    () => [
      { primary: true, position: 'bottom', type: 'time' },
      { position: 'left', type: 'linear' },
    ],
    []
  );
  const primaryCursor = React.useMemo(
    () => ({
      value: primaryCursorValue,
    }),
    [primaryCursorValue]
  );
  const secondaryCursor = React.useMemo(
    () => ({
      value: secondaryCursorValue,
    }),
    [secondaryCursorValue]
  );
  const onFocus = React.useCallback((datum) => {
    setState({
      primaryCursorValue: datum ? datum.primary : null,
      secondaryCursorValue: datum ? datum.secondary : null,
    });
  }, []);
  let processedData = processData(props.cursorData);
  console.log('this is processeddate', processedData);
  return (
    <>
      <div>Cases</div>
      <Box width={400} height={250}>
        <ChartWithData
          axes={axes}
          onFocus={onFocus}
          primaryCursor={primaryCursor}
          secondaryCursor={secondaryCursor}
          tooltip
          cursorData={processedData.cases}
        />
      </Box>
      <br />
      <div>Recovered</div>
      <Box width={400} height={250}>
        <ChartWithData
          axes={axes}
          onFocus={onFocus}
          primaryCursor={primaryCursor}
          secondaryCursor={secondaryCursor}
          tooltip
          cursorData={processedData.recovered}
        />
      </Box>
      <br />
      <div>Deaths</div>
      <Box width={400} height={250}>
        <ChartWithData
          axes={axes}
          onFocus={onFocus}
          primaryCursor={primaryCursor}
          secondaryCursor={secondaryCursor}
          tooltip
          cursorData={processedData.deaths}
        />
      </Box>
      <br />
    </>
  );
}

function ChartWithData(props) {
  //   const { data } = useChartConfig({
  //     series: 14,
  //   });
  return <Chart data={props.cursorData} {...props} />;
}

function processData(datain) {
  let cases = [];
  let deaths = [];
  let recovered = [];
  datain.districts.forEach((dis) => {
    let yc = [];
    let yr = [];
    let yd = [];
    dis.historical.forEach((his) => {
      let date = his.date.split('/');
      let dateObj = new Date(date[2], date[0] - 1, date[1]);
      yc.push({ x: dateObj, y: his.cases });
      yr.push({ x: dateObj, y: his.recovered });
      yd.push({ x: dateObj, y: his.deaths });
    });
    cases.push({ label: dis.district, datums: yc });
    deaths.push({
      label: dis.district,
      datums: yd,
    });
    recovered.push({
      label: dis.district,
      datums: yr,
    });
    yc = yr = yd = [];
  });
  return { cases: cases, deaths: deaths, recovered: recovered };
}
