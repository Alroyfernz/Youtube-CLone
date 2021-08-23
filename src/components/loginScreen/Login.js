import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { Link, useHistory } from "react-router-dom";

import "./_login.scss";
import adr from "../../ytt.png";
import { login } from "../../redux/actions/auth.action";
function Login() {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login());
  };
  const history = useHistory();
  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (accessToken) {
      history.push("/main");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <div className="login_container">
        <img src={adr} alt="ytlogo" />
        <button onClick={handleLogin}>
          {" "}
          <FcGoogle style={{ marginTop: "5px" }} />
          <Link style={{ textDecoration: "none", color: "black" }}>
            <span>login with google</span>
          </Link>
        </button>
        <p> This project is build using React.js,Redux and Youtube API</p>
      </div>
    </div>
  );
}

export default Login;
