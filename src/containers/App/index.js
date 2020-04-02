import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ReduxToastr from 'react-redux-toastr';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import routes from './routes';

import 'styles/containers/app.css';

const theme = createMuiTheme({ typography: { useNextVariants: true } });

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Box mt={4}>
      <Helmet>
        <meta name="description" content="Check Conversion" />
        <title>Check Conversion</title>
      </Helmet>
      {routes()}
      <ReduxToastr
        timeOut={5000}
        newestOnTop={true}
        preventDuplicates
        position="top-right"
        transitionIn="bounceIn"
        transitionOut="bounceOut"
        progressBar={false}
      />
    </Box>
  </MuiThemeProvider>
);

const withSaga = injectSaga({ key: 'app', saga });
export default compose(withRouter, withSaga)(App);
