import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const Login = () => {
  const { signIn,user } = useContext(AuthContext);
  const auth = getAuth(app);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {
      email,
      password,
    };
    console.log(user);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

 
  // Assuming you are using Firebase for authentication, replace 'firebase/auth' with the correct import
  
  const googleProvider = new GoogleAuthProvider();
  
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error('Google Sign-In Error:', error);
      });
  };
  



  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <button onClick={googleSignIn} className="flex ml-8 mb-6 items-center text-xl">
              Login With{" "}
              <span
                style={{ color: "white" }}
                className="ml-4 bg-green-600 px-2 py-1 rounded-lg"
              >
                <FaGoogle></FaGoogle>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
