import './App.css';
import Board from './components/Board';

function App() {
  console.log(process.env)
  return (
    <div className='App'>
      <Board size={9} />
    </div>
  );
}

export default App;