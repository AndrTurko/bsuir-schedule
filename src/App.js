import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import CardList from './CardList/CardList'
import SearchBar from './SearchBar/SearchBar'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      groupNumber: ''
    }

    this.handlerGroupNumber = this.handlerGroupNumber.bind(this)
  }

  handlerGroupNumber(event) {
    this.setState({
      groupNumber: event.target.value
    });
}

  render() {
    return (
      <div>
        {console.log(this.state.groupNumber)}
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              BSUIR Schedule
          </Typography>
          </Toolbar>
        </AppBar>
        <SearchBar disabled={true} handlerGroupNumber={this.handlerGroupNumber} />
        {this.state.groupNumber.length >= 6 ? <CardList groupNumber={this.state.groupNumber}/> : undefined}
      </div>
    );
  }
}


export default App;