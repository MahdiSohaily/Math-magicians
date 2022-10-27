import React from 'react';
import './styles/App.css';
import Calculator from './components/Calculator';
class App extends React.Component{
  render(): React.ReactNode {
    return (<Calculator />);
  }
}

export default App;
