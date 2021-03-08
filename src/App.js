import './App.css';
import Squares from './components/squares/Squares';
import SignUp from './components/passwords/SignUp';
import Max from './components/counters/Max';
import Button from './components/button/Button';
import Form from './components/form/Form';
import TricksyForm from './components/form/TricksyForm';
// import ToDoList from './components/todolist/ToDoList';

function App() {
  return (
    <>
      <Squares color="hotpink" />
      <SignUp minimumLength={12} />
      <Max count={[1, 2, 3, 4]} />
      <Button handleUpdate={(value) => console.log(value)} />
      <Form handleSubmit={(value) => console.log(value)} />
      <TricksyForm
        handleSubmit={(value) => console.log(value)}
        fields={[
          { label: "Name", name: "name", type: "text" },
          { label: "E-mail", name: "email", type: "email" },
          { label: "Telephone Number", name: "telephone", type: "tel" },
          { label: "Date of Birth", name: "dob", type: "date" },
        ]}
      />
      {/* <ToDoList /> */}
    </>
  );
}

export default App;
