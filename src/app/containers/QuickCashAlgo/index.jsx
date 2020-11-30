import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '@material-ui/core/Container';
import { Box, TextField } from '@material-ui/core';

export function QuickCashAlgo() {
  const precision = 2;

  const round = v => {
    return Math.ceil(v);
  };

  const rounding = function rounding(value, increment) {
    return round(value / increment) * increment;
  };

  const quickCash = (value, increment) => {
    return rounding(value, increment).toFixed(precision);
  };

  const [value, setValue] = useState('');
  const [resultsArr, setResultsArr] = useState([]);

  useEffect(() => {
    const resultsArr = [];
    resultsArr.push(quickCash(value, 0.05));
    resultsArr.push(quickCash(value, 1));
    resultsArr.push(quickCash(value, 5));
    resultsArr.push(quickCash(value, 10));
    console.log(resultsArr);
    setResultsArr(resultsArr);
  }, [value]);

  return (
    <>
      <Helmet>
        <title>Quick cash algo</title>
      </Helmet>

      <Container maxWidth="xs">
        <Box mt={5}>
          <TextField
            label="Enter price"
            variant="outlined"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </Box>
      </Container>
    </>
  );
}
