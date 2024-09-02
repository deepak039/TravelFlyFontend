import { useState } from "react";
import { checkValidData } from "../utils/validate";
import Designer from "../utils/Designer.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const handleRequest = async (url, body) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('jwtToken', data.token);
        dispatch(addUser(data));
        notifySuccess(isSignIn ? 'Successfully logged in!' : 'Successfully signed up!');
        setTimeout(() => {
          navigate('/blog');
        }, 1000); // Redirect after 2 seconds
      } else {
        notifyError(data.message || 'An error occurred.');
      }
    } catch (error) {
      notifyError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBtnClicked = () => {
    const message = checkValidData(email, password);
    setErrorMsg(message);
    if (message) return;

    if (!isSignIn) {
      handleRequest('https://travelfly.onrender.com/api/v1/users/signup', {
        name: username,
        email,
        password,
        passwordConfirm: password,
      });
    } else {
      handleRequest('https://travelfly.onrender.com/api/v1/users/login', {
        email,
        password,
      });
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Designer})` }}
    >
      <ToastContainer />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/3 p-8 bg-orange-600 text-white bg-opacity-60 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="p-4 my-4 w-full text-cyan-950"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full text-cyan-950"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="p-4 my-2 w-full text-cyan-950"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMsg && (
          <p className="text-red-500 my-4">{errorMsg}</p>
        )}
        <button
          className="p-4 my-6 bg-teal-600 w-full rounded-2xl hover:bg-teal-500 active:bg-teal-700"
          onClick={handleBtnClicked}
          disabled={loading}
        >
          {loading ? "Please wait..." : isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-4 cursor-pointer underline"
          onClick={() => setIsSignIn(!isSignIn)}
        >
          {isSignIn ? "New user? Sign Up" : "Already Registered? Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
