import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import Designer from "../utils/Designer.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createUser = async (name, email, password) => {
    try {
      const response = await fetch('https://travelfly.onrender.com/api/v1/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          passwordConfirm: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('jwtToken', data.token);
        dispatch(addUser(data));
        navigate('/home'); // Redirect to /home after signup
      } else {
        setErrorMsg(data.message || 'An error occurred during signup.');
      }
    } catch (error) {
      setErrorMsg('An error occurred. Please try again.');
      console.error('Error during signup:', error);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const response = await fetch('https://travelfly.onrender.com/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('jwtToken', data.token);
        dispatch(addUser(data));
        navigate('/home'); // Redirect to /home after login
      } else {
        setErrorMsg(data.message || 'An error occurred during login.');
      }
    } catch (error) {
      setErrorMsg('An error occurred. Please try again.');
      console.error('Error during login:', error);
    }
  };

  const handleBtnClicked = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;

    if (!isSignIn) {
      createUser(
        username.current.value,
        email.current.value,
        password.current.value
      );
    } else {
      loginUser(
        email.current.value,
        password.current.value
      );
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Designer})` }}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/3 p-8 bg-orange-600 text-white bg-opacity-60 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={username}
            type="text"
            placeholder="Enter Full Name"
            className="p-4 my-4 w-full text-cyan-950"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full text-cyan-950"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-4 my-2 w-full text-cyan-950"
        />
        {errorMessg && (
          <p className="text-red-500 my-4">{errorMessg}</p>
        )}
        <button
          className="p-4 my-6 bg-teal-600 w-full rounded-2xl hover:bg-teal-500 active:bg-teal-700"
          onClick={handleBtnClicked}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-4 cursor-pointer underline"
          onClick={toggleSignInForm}
        >
          {isSignIn ? "New user? Sign Up" : "Already Registered? Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
