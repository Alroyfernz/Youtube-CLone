import Main from "./Main.js";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useParams,
} from "react-router-dom";
import Login from "./components/loginScreen/Login";
import WatchScreen from "./components/watchscreen/WatchScreen.js";
import SearchScreen from "./components/screenScreen/SearchScreen.js";
const App = () => {
  const { query } = useParams();
  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useHistory();
  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/");
    }
  }, [accessToken, loading, history]);
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/main" component={Main} />
      <Route path="/watch/:id" component={WatchScreen} />
      <Route path="/screen/:query" component={SearchScreen} />
    </Switch>
  );
};

export default App;
