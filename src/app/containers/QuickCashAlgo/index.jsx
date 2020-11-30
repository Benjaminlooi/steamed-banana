import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '@material-ui/core/Container';
import { Box, Grid, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export function QuickCashAlgo() {
  const precision = 2;

  const [value, setValue] = useState('');
  const [resultsArr, setResultsArr] = useState([]);

  useEffect(() => {
    const round = v => {
      return Math.ceil(v);
    };

    const rounding = function rounding(value, increment) {
      return round(value / increment) * increment;
    };

    const quickCash = (value, increment) => {
      return rounding(value, increment).toFixed(precision);
    };

    const resultsArr = [];
    resultsArr.push(parseFloat(value).toFixed(precision));
    resultsArr.push(quickCash(value, 0.05));
    resultsArr.push(quickCash(value, 1));
    resultsArr.push(quickCash(value, 5));
    resultsArr.push(quickCash(value, 10));
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

          <Grid container>
            <Grid item xs={6}>
              {resultsArr.map((result, index) => (
                <Typography variant="body1" color="initial" key={index}>
                  {result}
                </Typography>
              ))}
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body1" color="initial">
                (exact)
              </Typography>
              <Typography variant="body1" color="initial">
                (0.05 increment)
              </Typography>
              <Typography variant="body1" color="initial">
                (1 increment)
              </Typography>
              <Typography variant="body1" color="initial">
                (5 increment)
              </Typography>
              <Typography variant="body1" color="initial">
                (10 increment)
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
