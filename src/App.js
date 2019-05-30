import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Search from './Components/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

export class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App


















// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Xup</h1>
//     </div>
//   );
// }

// export default App;