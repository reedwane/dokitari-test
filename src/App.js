import { useState } from "react";

function App() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [check, setCheck] = useState(null);

  const [checkerror, setCheckError] = useState(false);
  const [passerror, setPassError] = useState(false);
  const [emailerror, setEmailError] = useState(false);

  // a valid email like test@gmail.com
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // at least one uppercase, one lowercase, one number/special character, 8 chars long
  // example: Abcdefge@
  const passwordRegex =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

  const handleSubmit = (e, email, password, check) => {
    e.preventDefault();

    if (emailRegex.test(email)) {
      // if the email is a valid email

      if (passwordRegex.test(password)) {
        // if the password is strong enough

        if (password === check) {
          // if the passworkd is the same as the confirmation

          alert("Login Successful with proper credentials");
        } else {
          setCheckError(true);
        }
      } else {
        setPassError(true);
      }
    } else {
      setEmailError(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dokitari Phase 1 Task</h1>
      </header>

      <form>
        <label htmlFor="email">Email</label>
        {emailerror && <p className="email error">Input a valid email</p>}
        <input
          type="email"
          placeholder="Input your email"
          value={email}
          onKeyUp={() => {
            // check if the value is correct after keyup
            if (emailRegex.test(email)) {
              setEmailError(false);
            } else {
              setEmailError(true);
            }
          }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password">Password</label>
        {passerror && (
          <p className="pass error">
            Use at least 1 uppercase, 1 lowercase, 1 aplhanumeric, and 8
            characters long
          </p>
        )}
        <input
          type="password"
          placeholder="input your password"
          value={password}
          onKeyUp={() => {
            // check if the value is correct after keyup
            if (passwordRegex.test(password)) {
              setPassError(false);
            } else {
              setPassError(true);
            }
          }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <label htmlFor="check">Confirm Password</label>
        {checkerror && <p className="check error">Fill in the same password</p>}
        <input
          type="password"
          placeholder="confirm your password"
          value={check}
          onKeyUp={() => {
            // check if the value is correct after keyup
            if (check === password) {
              setCheckError(false);
            } else {
              setCheckError(true);
            }
          }}
          onChange={(e) => {
            setCheck(e.target.value);
          }}
        />

        <button
          type="submit"
          onClick={(e) => handleSubmit(e, email, password, check)}
        >
          Login
        </button>
      </form>

      <p className="attribution">
        By
        <a href="https://github.com/reedwane/dokitari-test">
          Abdulkareem Ridwan Gboyega
        </a>
      </p>
    </div>
  );
}

export default App;
