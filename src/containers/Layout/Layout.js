import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }
  
  showSideDrawerHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer:!prevState.showSideDrawer }
    });
  }
  
  render() {
    return (
      <>
        <Toolbar showSideDrawer={this.showSideDrawerHandler}/>
        <SideDrawer 
          show={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </>
    );
  }
};

export default Layout;