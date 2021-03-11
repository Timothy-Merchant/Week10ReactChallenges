import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Squares from './components/squares/Squares';
import SignUp from './components/passwords/SignUp';
import Max from './components/counters/Max';
import Button from './components/button/Button';
import Form from './components/form/Form';
import TricksyForm from './components/form/TricksyForm';
import FourOhFour from './components/news/FourOhFour';
// import ToDoList from './components/todolist/ToDoList';
import Articles from './components/news/Articles';
import Article from './components/news/Article';
import CreateArticle from './components/news/CreateArticle';
import EditArticle from './components/news/EditArticle';
import Clicked from './components/hooks/Clicked';
import Square from './components/hooks/Square';
import ToggleText from './components/hooks/ToggleText';
import Counter from './components/hooks/Counter';
import StepCounter from './components/hooks/StepCounter';
import CatchMeIfYouCan from './components/hooks/CatchMeIfYouCan';
import RollCall from './components/hooks/RollCall';
import PasswordStrength from './components/hooks/PasswordStrength';
import TempConverter from './components/hooks/TempConverter';
import List from './components/hooks/List';
import Colours from './components/hooks/Colours';
import Die from './components/hooks/Die';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/hooks">
          <Clicked />
          <Square colour="hotpink" />
          <ToggleText initial="Hello" alternate="World" />
          <Counter initial={3} max={6} />
          <StepCounter max={100} step={5} />
          <CatchMeIfYouCan jump={100} />
          <RollCall names={["cloud", "tifa", "squall", "garnet"]} />
          <PasswordStrength />
          <TempConverter />
          <List />
          <Colours colours={["#C14412",
            "#EBB31A",
            "#8F5318",
            "#009EAD",
            "#395967",]} />
          <Die sides={6} />
        </Route>
        <Route exact path="/challenges">
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
        </Route>
        <Switch>
          <Route exact path="/news">
            <Articles />
          </Route>
          <Route path="/news/create">
            <CreateArticle />
          </Route>
          <Route path="/news/:id/edit" render={({ match }) => (
            <EditArticle id={match.params.id} />
          )} />
          <Route path="/news/:id" render={({ match }) => (
            <Article id={match.params.id} />
          )} />
          <FourOhFour />
        </Switch>
      </Router>
    </>
  );
}

export default App;
