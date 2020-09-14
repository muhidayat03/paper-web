import React, { useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import { Link, useHistory } from "react-router-dom";
import { Row, Column } from "simple-flexbox";
import { login, logout } from "../../actions/login_action";
import BgImage from "../../assets/login-bg.png";
import LogoImage from "../../assets/logo.svg";
import AccountIcon from "../../assets/icon_account_white.svg";
import LockIcon from "../../assets/icon_lock_white.svg";
import { useSelector, useDispatch } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { renderInputWithLabel } from "../../components/form/FormComponent";
import Button from "../../components/form/Button";

let Login = (props) => {
  const { pending } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const history = useHistory();
  const { handleSubmit } = props;

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);
  const getLogin = async (username, password) => {
    const test = await dispatch(login(username, password));
    console.log("test", test);
    if (test) {
      history.push("/dashboard");
    }
  };

  const onSubmit = (values) => {
    const { username, password } = values;
    getLogin(username, password);
  };

  return (
    <main>
      <Column
        style={{
          backgroundColor: "#3B7FBA",
          height: "100vh",
          width: "100%",
        }}
        horizontal="center"
        vertical="center"
      >
        <img
          src={BgImage}
          style={{
            width: "100%",
            position: "absolute",
            bottom: 0,
          }}
          alt="logo"
        />
        <Column className={css(styles.boxContainer)}>
          <Row horizontal="flex-end" className={css(styles.logo)}>
            <Link to="/paper">
              <img src={LogoImage} height={50} alt="logo" />
            </Link>
          </Row>

          <Column className={css(styles.leftContainer)} horizontal="center">
            <h1
              style={{
                margin: "20px 0 10px",
              }}
            >
              Masuk ke Paper.id
            </h1>
            <div
              style={{
                borderTop: "3px solid white",
                width: 50,
              }}
            ></div>
            <div
              style={{
                width: "50%",
                textAlign: "center",
                margin: 25,
                fontWeight: 300,
              }}
            >
              <p>Masuk dengan akun yang terdaftar di Paper.id/PayPer</p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                width: "70%",
              }}
            >
              <Field
                name="username"
                component={renderInputWithLabel}
                styleClass={styles.input}
                label="Username"
                icon={AccountIcon}
                labelBig
              />
              <Field
                name="password"
                component={renderInputWithLabel}
                styleClass={styles.input}
                label="Password"
                icon={LockIcon}
                labelBig
              />

              <Row horizontal="end" style={{ fontSize: 14 }}>
                Lupa Kata Sandi?
              </Row>
              <Row style={{ width: "100%", marginTop: 30 }}>
                <Button
                  title="Masuk"
                  type={pending ? "Loading" : "Submit"}
                  color="success"
                  disabled={pending}
                />
              </Row>
            </form>
          </Column>
        </Column>
      </Column>
    </main>
  );
};

function validate(values) {
  const { username, password } = values;
  const errors = {};
  if (!username) {
    errors.username = "Username wajib diisi";
  }
  if (!password) {
    errors.password = "Password wajib diisi";
  }
  return errors;
}

Login = reduxForm({
  // a unique name for the form
  form: "Login",
  validate: validate,
  // keepDirtyOnReinitialize: true,
  shouldError: () => true,
  enableReinitialize: true,
})(Login);

export default Login;

const translateKeyframes = {
  "0%": {
    transform: "translatey(0)",
  },

  "50%": {
    transform: "translatey(-5px)",
  },

  "100%": {
    transform: "translatey(0)",
  },
};

const styles = StyleSheet.create({
  floating: {
    zIndex: 20,
    animationName: translateKeyframes,
    animationDuration: "3s",
    animationIterationCount: "infinite",
  },
  button: {
    borderRadius: 120,
    color: "#fff",
    cursor: "pointer",
    fontSize: 12,
    fontFamily: "lato",
    position: "relative",
    minWidth: 120,
    WebkitBoxShadow: "0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.1)",
    boxShadow: "0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.1)",
    WebkitTransition: ".5s",
    transition: ".5s",
    // border: "2px solid #d0d1d5",
    backgroundColor: "#93c854",
    border: "2px solid #93c854",
    display: "inline-block",
    textAlign: "center",
    lineHeight: 1,
    letterSpacing: ".4px",
    fontWeight: 400,
    padding: "13px 20px",
    width: "100%",
    outline: "none",
  },
  leftContainer: {
    width: "50%",
    color: "white",
    border: 1,
    padding: 4,
    "@media (max-width: 1024px)": {
      width: "100%",
    },
  },
  logo: {
    padding: "0 40px",
    "@media (max-width: 1024px)": {
      justifyContent: "center",
    },
  },
  input: {
    fontSize: 15,
    color: "#fff",
    borderColor: "rgba(147,190,220,.5)",
  },
  boxContainer: {
    width: "100%",
    // height: "100vh",
    maxWidth: 1366,
    color: "white",
    "@media (min-height: 800px)": {
      height: 768,
    },
  },
});
