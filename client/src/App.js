import React, {useState, useEffect} from "react";
import fire from "./fire";
import Form from "./Components/Form/Form";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Publicfeed from "./Components/Publicfeed/Publicfeed";
import University from "./Components/University/University";
import Homepage from "./Components/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-passord":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleSignup = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-passord":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    return (
        <div className = "App">
            {user ? (
                <Homepage />
            ) : (
                <Login
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                />
            )}
        </div>
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Homepage />
    //     </Route>
    //     <Route path="/Login">
    //       <Login />
    //     </Route>
    //     <Route path="/Register">
    //       <Register />
    //     </Route>
    //     <Route path="/University">
    //       <University />
    //     </Route>
    //     <Route path="/Form">
    //       <Form />
    //     </Route>
    //     <Route path="/Publicfeed">
    //       <Publicfeed />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
