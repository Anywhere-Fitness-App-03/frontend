
import './App.css';
import {Link,Route,Switch} from 'react-router-dom'
import ClientForm from './components/ClientForm'
import Home from './components/Home.js'
import Account from './components/Account'
import Login from './components/Login'
import About from './components/About'
import  Welcome from  './components/WelcomePage'


function App() {

  return (
    <div className="App">
        <nav>
            <h2 className={"fitness-header"}>
                <Link to="/">Anywhere Fitness</Link>
            </h2>
            <div className={"nav-link"}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Log in</Link>
            </div>
        </nav>

        <Switch>
            <Route path='/login/welcome' component={Welcome}/>
            {/*<Route path='/account/welcome' component={Welcome}/>*/}
            <Route path={'/login'}  component={Login} />
            <Route path={'/account'}  component={Account} />
            <Route path={'/about'}  component={About} />
            <Route path={'/'}  component={Home} />



        </Switch>

{/*<ClientForm/>*/}
    </div>
  );
}

export default App;
