// import { useRef, useState, useEffect, useContext } from "react";
// import AuthContext from "../../Context/AuthProvider";
// import "../../pages/Registration/Registration.css";

// import axios from "axios";
// import Registrantion from "../../../pages/Registration/Registrantion";
// import Button from "../../Button/Button";
// const LOGIN_URL = "/auth";

// const Login = () => {
//   const { setAuth } = useContext(AuthContext);
//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState("");
//   const [pwd, setPwd] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useEffect(() => {
//     setErrMsg("");
//   }, [user, pwd]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         LOGIN_URL,
//         JSON.stringify({ user, pwd }),
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       );
//       console.log(JSON.stringify(response?.data));
//       //console.log(JSON.stringify(response));
//       const accessToken = response?.data?.accessToken;
//       const roles = response?.data?.roles;
//       setAuth({ user, pwd, roles, accessToken });
//       setUser("");
//       setPwd("");
//       setSuccess(true);
//     } catch (err) {
//       if (!err?.response) {
//         setErrMsg("No Server Response");
//       } else if (err.response?.status === 400) {
//         setErrMsg("Missing Username or Password");
//       } else if (err.response?.status === 401) {
//         setErrMsg("Unauthorized");
//       } else {
//         setErrMsg("Login Failed");
//       }
//       errRef.current.focus();
//     }
//   };

//   return (
//     <Registrantion>
//       {success ? (
//         <section>
//           <h1>You are logged in!</h1>
//           <br />
//           <p>
//             <a href="/">Go to Home</a>
//           </p>
//         </section>
//       ) : (
//         <section>
//           <p
//             ref={errRef}
//             className={errMsg ? "errmsg" : "offscreen"}
//             aria-live="assertive"
//           >
//             {errMsg}
//           </p>
//           <h1>Sign In</h1>
//           <form onSubmit={handleSubmit}>
//             <label className="label">Username:</label>
//             <input
//               type="text"
//               id="username"
//               ref={userRef}
//               autoComplete="off"
//               onChange={(e) => setUser(e.target.value)}
//               value={user}
//               required
//             />
//             <label className="label">Password:</label>
//             <input
//               type="password"
//               id="password"
//               onChange={(e) => setPwd(e.target.value)}
//               value={pwd}
//               required
//             />
//             <div className="registration-button-container">
//               <Button buttonStyle="btn-outline" buttonSize="btn-max-width">
//                 Sign Up
//               </Button>
//             </div>
//           </form>
//           <p className="registration-subtext">
//             Need an Account?{" "}
//             <span className="line">
//               <a href="/signup">Sign Up</a>
//             </span>
//           </p>
//         </section>
//       )}
//     </Registrantion>
//   );
// };

// export default Login;
