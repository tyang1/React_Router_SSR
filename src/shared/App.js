import React, { Component } from 'react'
import Grid from './Grid'
import ErrorBoundary from '../ErrorBoundary'

class App extends Component {
  render() {
    return (
      <div>
          <ErrorBoundary>
            <Grid data={this.props.data}/>
          </ErrorBoundary>
      </div>
    )
  }
}

export default App