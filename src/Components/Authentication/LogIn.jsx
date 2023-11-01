import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
function LogIn({toggleLogin , setShowLogin}) {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [loginError, setLoginError] = useState(null);
const [showSignup, setShowSignup] = useState(false);
const [logInSuccess, setLogInSuccess] = useState(false);
const navigate = useNavigate();

const toggleSignup = () => {
    setShowSignup(!showSignup);
};
const handleLogin = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        // User logged in successfully, redirect to the home page
        navigate('/');
        setLogInSuccess(true);
        toggleLogin();
        setShowLogin(false);
    })
    .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
        setLoginError(error.message);
    });
}

return (
    <div className="flex items-center justify-center">
    <div className="bg-white p-8 rounded w-96 border-2 border-zinc-950">
        <h2 className="text-2xl font-semibold mb-4">Log In</h2>
        <form>
        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
            </label>
            <input type="email" id="email" className="mt-1 p-2 w-full border rounded focus:ring focus:ring-indigo-300"
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
            </label>
            <input type="password" id="password" className="mt-1 p-2 w-full border rounded focus:ring focus:ring-indigo-300" 
            value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        {loginError && (
            <div className="text-red-500 text-center mb-2">{loginError}</div>
        )}
        <button onClick={handleLogin} type="button" className="w-full bg-indigo-600 text-white font-semibold p-2 rounded hover:bg-indigo-700" >
            Log In
        </button>
        {logInSuccess && (
                <div className="text-green-500 text-center mt-2">
                welcome User!
                </div>
            )}
        </form>
        <p className="text-center mt-2">
        Don't have an account? <Link onClick={toggleSignup} className="text-indigo-600">Sign up</Link>
        </p>
        {showSignup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <SignUp />
        </div>
        )}
    </div>
    </div>
);
}

export default LogIn;
