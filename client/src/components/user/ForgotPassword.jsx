import React, { useEffect, useState, useRef } from "react";
import { Check, Cross, Info } from "./assets/Iconos";
import axios from "../../api/axios";
import SignImage from "./SignImageSection";
import { useNavigate } from "react-router-dom";
import setUpRecaptcha from "../../context/UserAuth";
const MOBILE_REGEX = /^[0-9]{10}$/;
const VALID_OTP = /^[0-9]{6}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const MOBILE_URL = "/forgotPwd/mobileExist";
const NEW_PASS = "/forgotPwd";

function ForgotPassword() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [valid, setValid] = useState(false);
  const [mobileFocus, setMobileFocus] = useState(false);
  const [confirm, setConfirm] = useState("");
  const [success, setSuccess] = useState(false);
  const [newPwdSection, setNewPwdSection] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const mobileRef = useRef();
  const [pwd, setPwd] = useState("");
  const [matchPwd, setMatchPwd] = useState("");
  const [pwdFocus, setPwdFocus] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [validMatchPwd, setValidMatchPwd] = useState(false);
  const [matchPwdFocus, setMatchPwdFocus] = useState(false);

  const [timer, setTimer] = useState(60);

  const errRef = useRef();

  const [OTP, setOTP] = useState("");
  const [OTPFocus, setOTPFocus] = useState(false);
  const [validOTP, setValidOTP] = useState("");

  const [otpMatch, setOtpMatch] = useState("");

  useEffect(() => {
    mobileRef.current.focus();
  }, []);

  useEffect(() => {
    const result = VALID_OTP.test(OTP);
    setValidOTP(result);
  }, [OTP]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatchPwd(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [mobile, OTP, pwd, matchPwd]);

  useEffect(() => {
    const result = MOBILE_REGEX.test(mobile);
    setValid(result);
  }, [mobile]);

  useEffect(() => {
    let Timer;
    if (success && timer > 0) {
      Timer = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
    return () => clearTimeout(Timer);
  }, [success, timer]);

  const handleForgotPwd = async (e) => {
    e.preventDefault();
    const result = MOBILE_REGEX.test(mobile);
    if (!result) return setErrMsg("invalid entry");

    try {
      await axios.get(MOBILE_URL, { params: { mobile } });
      const otpResponse = await setUpRecaptcha("+91" + mobile);
      setConfirm(otpResponse);
      setSuccess(true);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      if (error.code === "auth/argument-error") {
        setErrMsg("Mobile Number you entered isn't available");
      } else if (error.response?.status === 404) {
        setErrMsg("Mobile number Not registered");
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
      await confirm.confirm(OTP).then(() => {
        setNewPwdSection(true);
      });
    } catch (error) {
      console.log(error.message);
      setOtpMatch(error.message);
      if(error.message === 'Firebase: Error (auth/invalid-verification-code).'){
        setErrMsg('invalid OTP')
      } else if (!error?.response) {
        setErrMsg("no server response");
      } else {
        setErrMsg("otp verification failed");
      }
    }
  };

  const handleResendOTP = async () => {
    if (timer !== 0) return;
    try {
      const otpResponse = await setUpRecaptcha("+91" + mobile);
      setConfirm(otpResponse);
    } catch (error) {
      console.log(error.message);
    }
  };

  const newPassSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post(NEW_PASS, JSON.stringify({ mobile, pwd }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      // localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/signin");
    } catch (error) {
      console.log(error.message);
      if (!error?.response) {
        setErrMsg("no server response");
      } else {
        setErrMsg("password change failed");
      }
    }
  };

  return (
    <div className="pb-0 sm:pb-32 h-screen">
      <div className="w-screen sm:container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <SignImage />
          {!success ? (
            <div className="py-8 sm:pt-40">
              <div className="rounded-lg shadow-xl w-96 h-auto">
                <div className="px-10 sm:px-4">
                  <h1 className="text-4xl select-none font-semibold font-roboto ">Forgot Password</h1>
                  <p className="text-md py-2 font-sans">Enter your registered mobile number</p>
                  <p ref={errRef} className={errMsg ? "errMsg bg-red-600 p-1 text-white  " : "hidden  "}>
                    {errMsg}
                  </p>
                  <form onSubmit={handleForgotPwd}>
                    <input
                      type="number"
                      id="signupMobile"
                      className="border my-3 border-gray-300 text-gray-900 text-md rounded-md  w-full p-3 ring-green-300 ring-offset-1 focus:ring dark:text-white dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      placeholder="Mobile"
                      autoComplete="off"
                      maxLength={10}
                      required
                      ref={mobileRef}
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      onFocus={() => setMobileFocus(true)}
                      onBlur={() => setMobileFocus(false)}
                    />
                    {valid && (
                      <div className="absolute ml-80 -mt-12 text-green-400 text-xl pointer-events-none">
                        <Check />
                      </div>
                    )}
                    {!valid && mobile && (
                      <div className="absolute ml-80 -mt-12 text-red-400 text-xl pointer-events-none">
                        <Cross />
                      </div>
                    )}
                    <p className={mobileFocus && mobile && !valid ? "block font-roboto text-red-700 bg-[#f0e1e1] rounded p-2" : "hidden"}>
                      <Info />
                      Enter valid number.
                      <br />
                    </p>
                    <div id="recaptcha-container" />
                    <button type="submit" className="w-full select-none p-4 bg-emerald-700 rounded-full text-white text-xl font-roboto mt-5 font-semibold hover:bg-emerald-800">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="place-content-center">
                  <p className="px-16 py-10">
                    Back to sign in page?
                    <span onClick={() => navigate("/signin")} className="text-green-800 hover:text-green-900 hover:underline cursor-pointer">
                      {" "}
                      Signin
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-10 sm:pt-40">
              <div className="rounded-lg shadow-xl w-96 py-2 h-auto">
                <div className="px-10 sm:px-4">
                  {!newPwdSection ? (
                    <>
                      <h1 className="text-4xl select-none font-semibold font-roboto ">Enter your OTP that send to you mobile</h1>
                      <p className="text-md py-2 font-sans">Just play. Have fun. Enjoy the game.</p>
                      <p ref={errRef} className={errMsg ? "errmsg text-red-700" : "offscreen"}>
                        {errMsg}
                      </p>
                      {otpMatch && <div>{otpMatch}</div>}
                      <form id="otpForm" onSubmit={handleOTP}>
                        <div>
                          <div>
                            <input
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
                            <p className={OTPFocus && OTP && !validOTP ? "block font-roboto text-red-700 bg-[#f0e1e1] rounded p-2" : "hidden"}>
                              <Info />
                              enter Six digit OTP.
                            </p>
                          </div>
                          <div id="recaptcha-container" />
                          <p
                            className={`  ${timer === 0 ? "text-blue-500 hover:underline cursor-pointer" : "text-cyan-600 cursor-not-allowed"}`}
                            onClick={handleResendOTP}
                            disabled={timer === 0 ? false : true}
                          >
                            Resend OTP <span className={`text-black  ${timer === 0 && "hidden"}`}>{timer}</span>
                          </p>
                          <button
                            className="w-full select-none p-4 bg-emerald-700 rounded-full text-white text-xl font-roboto mt-5 font-semibold hover:bg-emerald-800 disabled:hover:bg-emerald-700"
                            disabled={!validOTP ? true : false}
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </>
                  ) : (
                    <>
                      <h1 className="text-4xl select-none font-semibold font-roboto ">Enter new Password</h1>
                      <p className="text-md py-2 font-sans">Just play. Have fun. Enjoy the game.</p>
                      <p ref={errRef} className={errMsg ? "errmsg text-red-700" : "offscreen"}>
                        {errMsg}
                      </p>
                      <form id="otpForm" onSubmit={newPassSubmit}>
                        <div>
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
                            <p className={pwdFocus && pwd && !validPwd ? "block font-roboto text-red-700 bg-[#f0e1e1] rounded p-2" : "hidden"}>
                              <Info />
                              8 to 24 character.
                              <br />
                              Must include uppercase and lowercase letters, a number and a special character. <br />
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
                            <p className={matchPwdFocus && !validMatchPwd && matchPwd ? "block font-roboto text-red-700 bg-[#f0e1e1] rounded p-2" : "hidden"}>
                              <Info />
                              Must match the first password input field.
                              <br />
                            </p>
                          </div>
                          <button
                            className="w-full select-none p-4 bg-emerald-700 rounded-full text-white text-xl font-roboto mt-5 font-semibold hover:bg-emerald-800 disabled:hover:bg-emerald-700"
                            disabled={!validPwd ? true : false}
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
