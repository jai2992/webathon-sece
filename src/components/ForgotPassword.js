import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailVal = e.target.email.value;
        sendPasswordResetEmail(database, emailVal)
            .then(() => {
                alert("Check your email for password reset instructions.");
                history("/");
            })
            .catch((err) => {
                console.error("Error sending password reset email:", err);
                alert("Failed to send password reset email. Please try again later.");
            });
    };

    return (
        <div className="App">
            <h1>Forgot Password</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input name="email" /><br/><br/>
                <button>Reset</button>
            </form>
        </div>
    );
}

export default ForgotPassword;
