import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login/Login";
import PrivateRoute from "./components/global-components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import Layout from "./components/layout/Layout";
import FinanceRoot from "./pages/finance-root/FinanceRoot";
// import Account from "./pages/account/Account";
import "bootstrap/dist/css/bootstrap.min.css";

const ContentRoute = () => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          path="/dashboard"
          exact
          component={() => <div>dashboard</div>}
        />
        <PrivateRoute path="/finance" exact component={FinanceRoot} />
        {/* <PrivateRoute path="/account" exact component={Account} /> */}
        <PrivateRoute component={() => <Redirect to="/dashboard" />} />
      </Switch>
    </Layout>
  );
};
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Switch>
        <Route path="/login" component={Login} />
        <Route component={ContentRoute} />
      </Switch>
    </>
  );
}

export default App;
