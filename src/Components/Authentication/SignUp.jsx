import { AuthErrorCodes, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogIn from './LogIn';
function SignUp({ toggleSignup , setShowSignup }) {
const [showLogin, setShowLogin] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [signUpSuccess, setSignUpSuccess] = useState(false);
const [userAlreadyExists, setUserAlreadyExists] = useState(false);

const navigate = useNavigate();

const toggleLogin = () => {
    setShowLogin(!showLogin);
};

const signUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        
        const user = userCredential.user;
        console.log('User signed up:', user);
// You can add further logic here, like redirecting the user or showing a success message.
        setEmail('');
        setPassword('');
        setSignUpSuccess(true);
        navigate('/');
        setShowLogin(true);
        toggleSignup();
        setShowSignup(false);
    })
    .catch((error) => {
        console.error('Sign up error:', error);
        if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        
            setUserAlreadyExists(true);
        } else {
        
        }
    });
};

return (
    <>
      {/* <Layout/> */}
    {!showLogin ? (
        <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded w-96 border-2 border-zinc-950">
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
            <form>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
                </label>
                <input type="email" id="email" className="mt-1 p-2 w-full border rounded focus:ring focus:ring-indigo-300"value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
                </label>
                <input type="password" id="password" className="mt-1 p-2 w-full border rounded focus:ring focus:ring-indigo-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={() => signUp({ toggleSignup })}type="button"  className="w-full bg-indigo-600 text-white font-semibold p-2 rounded hover:bg-indigo-700"  >
                Sign Up
            </button>
            {signUpSuccess && (
                <div className="text-green-500 text-center mt-2">
                Sign Up Successful!
                </div>
                
            )}
            {userAlreadyExists && (
        <div className="text-red-500 text-center mt-2">
        User already exists.
        </div>
    )}
            </form>
            <div className="pt-2">
            <p>
                Already a user?{' '}
                <Link onClick={toggleLogin} className="text-green-300">
                Log in
                </Link>
            </p>
            </div>
        </div>
        </div>
    ) : null}

    {showLogin && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <LogIn toggleLogin={toggleLogin}/>
        </div>
    )}
    </>
);
}

export default SignUp;

