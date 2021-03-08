import './App.css';
import Squares from './components/squares/Squares';
import SignUp from './components/passwords/SignUp';
import Max from './components/counters/Max';
import Button from './components/button/Button';
import Form from './components/form/Form';

function App() {
  return (
    <>
      <Squares color="hotpink" />
      <SignUp minimumLength={12} />
      <Max count={[1, 2, 3, 4]} />
      <Button handleUpdate={(value) => console.log(value)} />
      <Form handleSubmit={(value) => console.log(value)} />
    </>
  );
}

export default App;
