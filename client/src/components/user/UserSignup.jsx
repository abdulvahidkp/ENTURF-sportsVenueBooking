import React, { useState, useEffect, useRef } from "react";
import Google from "../../assets/Google.png";
import Signup from "../../assets/Signup.png";
import { Info, Check, Cross } from "./assets/Iconos";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import setUpRecaptcha from "../../context/UserAuth";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../redux/features/userSlice";

const USER_REGEX = /^[a-zA-z][a-zA-Z0-9-_ ]{3,23}$/;
const MOBILE_REGEX = /^[0-9]{10}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,24}$/;
const VALID_OTP = /^[0-9]{6}$/;

const SIGNUP_URL = "/signup";
const MOBILE_URL = "/mobileExist";

function UserSignup() {
  const userRef = useRef();
  const errRef = useRef();
  const otpRef = useRef();

  const dispatch = useDispatch();

  const navigatee = useNavigate();
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [mobile, setMobile] = useState("");
  const [validMobile, setValidMobile] = useState(false);
  const [mobileFocus, setMobileFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatchPwd, setValidMatchPwd] = useState(false);
  const [matchPwdFocus, setMatchPwdFocus] = useState(false);

  const [timer,setTimer] = useState(60);

  const [errMsg, setErrMsg] = useState("");

  const [success, setSuccess] = useState(false);

  const [confirm, setConfirm] = useState("");

  const [OTP, setOTP] = useState("");
  const [OTPFocus, setOTPFocus] = useState(false);
  const [validOTP, setValidOTP] = useState(false);

  const [otpMatch, setOtpMatch] = useState("");

  useEffect(() => {
    let token = localStorage.getItem("user");
    if (token) {
      let user = jwtDecode(token);
    }
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = MOBILE_REGEX.test(mobile);
    setValidMobile(result);
  }, [mobile]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatchPwd(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, mobile, pwd, matchPwd]);

  useEffect(() => {
    const result = VALID_OTP.test(OTP);
    setValidOTP(result);
  }, [OTP]);

  useEffect(() => {
    let Timer;
    if(success && timer>0){
      Timer = setTimeout(()=>{
        setTimer(timer-1);
      },1000);
    }
    return () => clearTimeout(Timer);
  }, [success,timer]);

  const handleSignup = async (e) => {
    e.preventDefault();
    //if button enabled with JS hack or other some reason
    const v1 = USER_REGEX.test(user);
    const v2 = MOBILE_REGEX.test(mobile);
    const v3 = PWD_REGEX.test(pwd);
    if (!v1 || !v2 || !v3) {
      setErrMsg("invalid entry");
      return;
    }
    try {
      const response = await axios.post(
        MOBILE_URL,
        JSON.stringify({ mobile }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const otpResponse = await setUpRecaptcha("+91" + mobile);
      setConfirm(otpResponse);
      setSuccess(true);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      if (error.code === "auth/argument-error") {
        setErrMsg("Mobile Number you entered isn't available");
      } else if (error.response?.status === 409) {
        setErrMsg("mobile already taken");
      } else {
        setErrMsg("complete captcha");
      }
      errRef.current.focus();
    }
  };

  const handleOTP = async (e) => {
    e.preventDefault();
    if (!OTP) {
      setErrMsg("Invalid OTP");
      return;
    }
    try {
      await confirm.confirm(OTP).then(async () => {
        const {data} = await axios.post(
          SIGNUP_URL,
          JSON.stringify({ name: user, mobile, password: pwd }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        dispatch(setUserDetails({name:user,mobile,wallet:0}))
        localStorage.setItem("user", JSON.stringify(data));
        setUser("");
        setMobile("");
        setPwd("");
        setMatchPwd("");
        navigatee("/signin");
      });
    } catch (error) {
      console.log(error.message);
      if(error.message === 'Firebase: Error (auth/invalid-verification-code).'){
        setErrMsg('invalid OTP')
      } else if (!error?.response) {
        setErrMsg("no server response");
      } else if (error.response?.status === 409) {
        setErrMsg("Mobile already registered");
      } else {
        setErrMsg("registration failed");
      }
    }
  };

  const handleResendOTP = async ()=> {
    if(timer!==0)return;
    try {
      const otpResponse = await setUpRecaptcha("+91" + mobile);
        setConfirm(otpResponse);
      
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <section>
      <div className="pb-0 sm:pb-32">
        <div className="w-screen sm:container mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
            <div className="hidden sm:block">
              <img src={Signup} alt="" />
            </div>
            {success ? (
              <div className="py-10 sm:pt-40">
                <div className="rounded-lg shadow-xl w-96 h-auto py-4">
                  <div className="px-10 sm:px-4">
                    <h1 className="text-4xl select-none font-semibold font-roboto ">
                      Enter your OTP that send to you mobile
                    </h1>
                    <p className="text-md py-2 font-sans">
                      Just play. Have fun. Enjoy the game.
                    </p>
                    <p
                      ref={errRef}
                      className={errMsg ? "errmsg text-red-700" : "offscreen"}
                    >
                      {errMsg}
                    </p>
                    <form id="otpForm" onSubmit={handleOTP}>
                      <div>
                        <div>
                          <input
                            ref={otpRef}
                            type="number"
                            id="OTP"
                            className=" border my-3 border-gray-300 text-gray-900 text-md rounded-md  w-full p-3 ring-green-300 ring-offset-1 focus:ring dark:text-white dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            placeholder="OTP"
                            required
                            value={OTP}
                            onChange={(e) => setOTP(e.target.value)}
                            onFocus={() => setOTPFocus(true)}
                            onBlur={() => setOTPFocus(false)}
                          />
                          {validOTP && (
                            <div className="absolute ml-80 -mt-12 text-green-400 text-xl pointer-events-none">
                              <Check />
                            </div>
                          )}
                          {!validOTP && OTP && (
                            <div className="absolute ml-80 -mt-12 text-red-400 text-xl pointer-events-none">
                              <Cross />
                            </div>
                          )}
                          <p
                            className={
                              OTPFocus && OTP && !validOTP
                                ? "block font-roboto text-red-700 bg-[#f0e1e1] rounded p-2"
                                : "hidden"
                            }
                          >
                            <Info />
                            enter Six digit OTP.
                          </p>
                        </div>
                        <div id="recaptcha-container" />
                        <p className={`  ${timer===0?"text-blue-500 hover:underline cursor-pointer":"text-cyan-600 cursor-not-allowed"}`} onClick={handleResendOTP} disabled={timer===0?false:true}>Resend OTP <span className={`text-black  ${timer===0 && 'hidden'}`}>{timer}</span></p>
                        <button
                          className="w-full select-none p-3 bg-emerald-700 rounded-full text-white text-xl font-roboto mt-5 font-semibold hover:bg-emerald-800 disabled:hover:bg-emerald-700"
                          disabled={!validOTP ? true : false}
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-10 sm:pt-40">
                <div className="rounded-lg shadow-xl w-96 h-auto">
                  <div className="px-10 sm:px-4">
                    <h1 className="text-4xl select-none font-semibold font-roboto ">
                      Sign up
                    </h1>
                    <p className="text-md py-2 font-sans">
                      Just play. Have fun. Enjoy the game.
                    </p>
                    <p
                      ref={errRef}
                      className={errMsg ? "errmsg text-red-700" : "offscreen"}
                    >
                      {errMsg}
                    </p>
                    <form id="signupForm" onSubmit={handleSignup} noValidate>
                      <div>
                        <div className="relative">
                          <input
                            type="text"
                            id="signupName"
                            autoComplete="off"
                            className="border my-3 border-gray-300 text-gray-900 text-md rounded-md  w-full p-3 ring-green-300 ring-offset-1 focus:ring dark:text-white dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            placeholder="Name"
                            required
                            value={user}
                            ref={userRef}
                            onChange={(e) => setUser(e.target.value)}
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                          />
                          {validName && (
                            <div className="absolute ml-80 -mt-12 text-green-400 text-xl pointer-events-none">
                              <Check />
                            </div>
                          )}
                          {!validName && user && (
                            <div className="absolute ml-80 -mt-12 text-red-400 text-xl pointer-events-none">
                              <Cross />
                            </div>
                          )}
                          <p
                            className={
                              userFocus && user && !validName
                                ? "block font-roboto text-red-700 bg-[#f0e1e1] rounded p-2"
                                : "hidden"
                            }
                          >
                            <Info />
                            4 to 23 character.
                            <br />
                            Must begin with a letter.
                            <br />
                            Letters, numbers, underscores, hyphens allowed.
                          </p>
                        </div>
                        <div>
                          <input
                            type="number"
                            id="signupMobile"
                            className="border my-3 border-gray-300 text-gray-900 text-md rounded-md  w-full p-3 ring-green-300 ring-offset-1 focus:ring dark:text-white dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            placeholder="Mobile"
                            autoComplete="off"
                            maxLength={10}
                            required
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            onFocus={() => setMobileFocus(true)}
                            onBlur={() => setMobileFocus(false)}
                          />
                          {validMobile && (
                            <div className="absolute ml-80 -mt-12 text-green-400 text-xl pointer-events-none">
                              <Check />
                            </div>
                          )}
                          {!validMobile && mobile && (
                            <div className="absolute ml-80 -mt-12 text-red-400 text-xl pointer-events-none">
                              <Cross />
                            </div>
                          )}
                          <p
                            className={
                              mobileFocus && mobile && !validMobile
                                ? "block font-roboto text-red-700 bg-[#f0e1e1] rounded p-2"
                                : "hidden"
                            }
                          >
                            <Info />
                            Enter valid number.
                            <br />
                          </p>
                        </div>
                        <div>
                          <input
                            type="password"
                            id="pwd"
                            className="border my-3 border-gray-300 text-gray-900 text-md rounded-md  w-full p-3 ring-green-300 ring-offset-1 focus:ring dark:text-white dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            placeholder="Set Password"
                            required
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                          />
                          {validPwd && (
                            <div className="absolute ml-80 -mt-12 text-green-400 text-xl pointer-events-none">
                              <Check />
                            </div>
                          )}
                          {!validPwd && pwd && (
                            <div className="absolute ml-80 -mt-12 text-red-400 text-xl pointer-events-none">
                              <Cross />
                            </div>
                          )}
                          <p
                            className={
                              pwdFocus && pwd && !validPwd
                                ? "block font-roboto text-red-700 bg-[#f0e1e1] rounded p-2"
                                : "hidden"
                            }
                          >
                            <Info />
                            8 to 24 character.
                            <br />
                            Must include uppercase and lowercase letters, a
                            number and a special character. <br />
                            Allowed special character: <span>! @ # * $ %</span>
                          </p>
                        </div>
                        <div>
                          <input
                            type="password"
                            id="matchPwd"
                            className="border my-3 border-gray-300 text-gray-900 text-md rounded-md  w-full p-3 ring-green-300 ring-offset-1 focus:ring dark:text-white dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            placeholder="Retype Password"
                            required
                            value={matchPwd}
                            onChange={(e) => setMatchPwd(e.target.value)}
                            onFocus={() => setMatchPwdFocus(true)}
                            onBlur={() => setMatchPwdFocus(false)}
                          />
                          {validMatchPwd && matchPwd && (
                            <div className="absolute ml-80 -mt-12 text-green-400 text-xl pointer-events-none">
                              <Check />
                            </div>
                          )}
                          {!validMatchPwd && matchPwd && (
                            <div className="absolute ml-80 -mt-12 text-red-400 text-xl pointer-events-none">
                              <Cross />
                            </div>
                          )}
                          <p
                            className={
                              matchPwdFocus && !validMatchPwd && matchPwd
                                ? "block font-roboto text-red-700 bg-[#f0e1e1] rounded p-2"
                                : "hidden"
                            }
                          >
                            <Info />
                            Must match the first password input field.
                            <br />
                          </p>
                        </div>
                        <div id="recaptcha-container" />
                        <input
                          type="number"
                          id="first_name"
                          className="hidden border my-3 border-gray-300 text-gray-900 text-md rounded-md  w-full p-3 ring-green-300 ring-offset-1 focus:ring dark:text-white dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          placeholder="OTP"
                          required
                        />
                        <button
                          className="w-full select-none p-4 bg-emerald-700 rounded-full text-white text-xl font-roboto mt-5 font-semibold hover:bg-emerald-800 disabled:hover:bg-emerald-700"
                          disabled={
                            !validName ||
                            !validMobile ||
                            !validPwd ||
                            !validMatchPwd
                              ? true
                              : false
                          }
                          type="submit"
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                    <div className="flex items-center my-4">
                      <hr className="w-1/2 " />
                      <p className="mx-3">or</p>
                      <hr className="w-1/2" />
                    </div>
                    <div>
                      <button className="border-2 select-none bg-white border-slate-300 text-slate-500 hover:bg-[#edf3f2]  rounded-full pl-12 w-full text-xl font-roboto font-semibold  p-3">
                        Sign in with Google
                      </button>
                      <img
                        src={Google}
                        className="h-6 ml-10 sm:ml-16  -mt-10 select-none pointer-events-none"
                        alt=""
                        s
                      />
                    </div>
                  </div>
                  <div className="place-content-center">
                    <p className="px-16 py-10">
                      already have an account?
                      <Link to="/signin">
                        <span className="text-green-800 hover:text-green-900 hover:underline cursor-pointer">
                          Signin
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserSignup;
