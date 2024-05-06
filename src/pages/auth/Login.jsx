import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


const Login = () => {

  const google = () => {
    alert('Currently not available, make use of the other options below')
  }

  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/userPage")
    } catch (err) {
      setErr('Invalid login parameters');
    }
  };

  return (
    <div>
      <div>
        <div>
          <h2>Welcome Back!</h2>
          <p>Please enter your details</p>
          <div className="--flex-center">
            <button onClick={google} className="--btn --btn-google">Login with Google</button>
          </div>
          <br />
          <p className="--text-center --fw-bold">or</p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email Address</label> <br />
                <input type="email" placeholder="example@gmail.com" required name="email"/> <br />
                <label htmlFor="password">Password</label> <br />
                <input placeholder="Password"/>
                <button type="submit" className="--btn --btn-primary --btn-block">Login</button>
                {err && <div style={{marginTop: '5px', color: "red", marginBottom: '5px', fontSize: '15px'}}>{err}</div>}
            </form>
            <Link to='/forgot'>Forgot password</Link>
            <span style={{display: 'flex', marginTop: '15px'}}>
              <p> &nbsp;Don't have an Account? &nbsp;</p> 
              <h3 style={{marginTop: '-10px'}}><Link to='/register'>Register</Link></h3>
            </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
