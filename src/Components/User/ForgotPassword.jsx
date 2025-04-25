// import { useForm } from "react-hook-form";
import { ToastContainer,  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import backgroundImage from "../../assets/image/background .jpg";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  // const navigate = useNavigate();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

   const [email, setEmail] = useState("");


  // const forgotPasswordHandler = async (data) => {
  //   try {
  //     const email = data.email.trim();
  //     const res = await axios.post("/user/forgotpassword", { email });
  //     if (res.status === 200) {
  //       toast.success("Reset link sent to your email!", {
  //         position: "top-center",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         theme: "dark",
  //         transition: Bounce,
  //       });
  //     }
  //   } catch (error) {
  //     toast.error(
  //       error.response?.data?.message || "Failed to send reset link.",
  //       {
  //         position: "top-center",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         theme: "dark",
  //       }
  //     );
  //     console.error("Forgot Password Error:", error);
  //   }
  // };




  const forgotPasswordHandler =async()=>{
        alert(`Password reset link sent to ${email}`);
        console.log(email)
        const res = await axios.post("/user/forgotpassword", { email });

        // const res = await axios.post("api/forgotpassword?email=" + email)
        console.log(res.data)
      }

  return (
    <div
      style={{
        width: "1600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        // backgroundImage: url`(${backgroundImage}),
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        // onSubmit={handleSubmit(forgotPasswordHandler)}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "430px",
          padding: "20px",
          backgroundColor: "black",
          borderRadius: "8px",
          textAlign: "center",
          height: "350px",
        }}
      >
        <h1 style={{ color: "white", marginBottom: "20px" }}>
          Forgot Password
        </h1>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
         onChange={(event) => {setEmail(event.target.value)}}

            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />
          <span style={{ color: "red", display: "block" }}>
            {/* {errors.email?.message} */}
          </span>
        </div>

        <br />
        <input
          type="submit"
          value="Send Reset Link"
          onClick={forgotPasswordHandler}
          style={{
            height: "45px",
            width: "100%",
            borderRadius: "5px",
            background: "linear-gradient(to right, #b08d57, #e0c084)",
            color: "white",
            fontWeight: "bold",
            border: "none",
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            fontSize: "17px",
          }}
        />

        <br />
        <div>
          <a
            href="/login"
            style={{ color: "white", marginRight: "30px" }}
          >
            Back to Login
          </a>
          <a href="/signup" style={{ color: "white", fontSize: "larger" }}>
            Signup
          </a>
        </div>
      </div>
      <ToastContainer limit={3} newestOnTop pauseOnFocusLoss />
    </div>
  );
};

export default ForgotPassword;