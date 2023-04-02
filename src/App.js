
import './App.css';

function App() {
  const age = 115;
  const isColor = true;
  return (
    <div className="App">
      {age >= 18 ? <h1>over age</h1> : <h1>under age</h1> }
      <h1 style={{color: isColor ? 'green' : 'red'}}>this is sparta</h1>
      {isColor && <button>tap to tap</button>}
    </div>
    
  );
} 
export default App;
