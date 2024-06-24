import logo from './logo.svg'
import './App.css'
import Demo from './Demo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {<Demo />}
    </div>
  )
}

export default App
