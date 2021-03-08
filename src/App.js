import './App.css';
import Squares from './components/squares/Squares';
import SignUp from './components/passwords/SignUp';
import Max from './components/counters/Max';

function App() {
  return (
    <>
      <Squares color="hotpink" />
      <SignUp minimumLength={12} />
      <Max count={[1, 2, 3, 4]} />
    </>
  );
}

export default App;
