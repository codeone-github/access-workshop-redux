import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./headerstyles.module.css";
import { withRouter } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux"
import { resetEmail } from "./redux/actions/user.actions"

const Header = (props) => {
  const authenticated = localStorage.getItem("authenticated");
  const [isAuthenticated, setIsAuthenticated] = useState(authenticated);

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsAuthenticated(authenticated);
  }, [authenticated]);

  const logout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    props.history.push("/");

    dispatch(resetEmail())
  };

  const renderLoginLogoutButton = () => {
    if (isAuthenticated) {
      return <button onClick={logout}>Logout</button>;
    }
    return <Link to="/">Login</Link>;
  };

  return (
    <nav className={styles.background}>
      <ul className={styles.list}>
        <li>
          <Link to="/home">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>{renderLoginLogoutButton()}</li>
        <li>{user.email}</li>
      </ul>
    </nav>
  );
};

export default withRouter(Header);
