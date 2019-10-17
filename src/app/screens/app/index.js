import React, { Component } from 'react';

import { connect } from 'react-redux';

import createRouter from 'routes';
import Navigator from 'routes/navigator';

class App extends Component {
  render() {
    const { authenticated } = this.props;
    const Routes = createRouter(!!authenticated);

    return <Routes ref={Navigator.setNavigator} />;
  }
}

const mapStateToProps = ({ auth }) => ({
  authenticated: !!auth.token,
});

export default connect(mapStateToProps)(App);
