import { useState, useEffect } from "react";
import styles from "./loginstyles.module.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  console.log(props);

  useEffect(() => {
    const authenticated = localStorage.getItem("authenticated");
    if (authenticated) {
      props.history.push("/home");
      return;
    }
  }, []);

  const login = () => {
    const userCreds = {
      email,
      password
    };

    if (email.length < 8 || password.length < 8) {
      setError(true);
      return;
    }

    console.log(userCreds);
    localStorage.setItem("email", email);
    localStorage.setItem("authenticated", true);
    props.history.push("/home");
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const renderError = () => {
    if (error) {
      return <p>Please check your details</p>;
    }

    return;
  };

  return (
    <div className={styles.background}>
      <input
        placeholder="email"
        value={email}
        type="email"
        onChange={onEmailChange}
      />
      <input
        placeholder="password"
        value={password}
        type="password"
        onChange={onPasswordChange}
      />
      {renderError()}
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;

// <Login name="jon"/>
