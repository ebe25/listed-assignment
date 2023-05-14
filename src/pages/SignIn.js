import "./SignIn.css";
import React from "react";
import {signIn, useSession} from "next-auth/react";
import {useNavigate, Link} from "react-router-dom";
import {SessionProvider} from "next-auth/react";

const SignIn = () => {
  const navigate = useNavigate();
  const session=useSession();

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signIn("google");
      if (result) {
        navigate("/Dashboard");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="sign-in">
      <div className="right-side" />
      <div className="left-side1" />
      <b className="board1">Board.</b>
      <form className="login-form">
        <div className="card14">
          <div className="card15" />
        </div>
        <input className="input-field" type="email" />
        <input className="input" type="password" />
        <label className="label">••••••••</label>
        <div className="login-form-child" />
        <Link to="/Dashboard">
          <button className="button-sign-in">
            <div className="button-primary">
              <div className="button-primary1" />
            </div>
            <b className="sign-in1">Sign In</b>
          </button>
        </Link>
        <label className="email-address">Email address</label>
        <label className="johndoegmailcom">johndoe@gmail.com</label>
        <label className="password">Password</label>
        <p className="forgot-password">Forgot password?</p>
        <p className="dont-have-an-container">
          <span className="dont-have-an">{`Don’t have an account? `}</span>
          <span className="register-here">Register here</span>
        </p>
      </form>
      <button className="google-sign-in" onClick={handleSignInWithGoogle}>
        <div className="white">
          <div className="button" />
        </div>
        <div className="sign-in-with">Sign in with Google</div>
        <img className="google-icon-1" alt="" src="/googleicon-1.svg" />
      </button>
      <button className="apple-sign-in">
        <div className="white">
          <div className="button" />
        </div>
        <div className="sign-in-with1">Sign in with Apple</div>
        <img className="apple-1-icon" alt="" src="/apple-1.svg" />
      </button>
      <b className="sign-in2">Sign In</b>
      <div className="sign-in-to">Sign in to your account</div>
    </div>
  );
};

const SignInPage = () => {
  return (
    <SessionProvider>
      <SignIn />
    </SessionProvider>
  );
};

export default SignInPage;
