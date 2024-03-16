import React from "react";
import { signOut } from "firebase/auth";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";

function HomeScreen(){
    const history = useNavigate();

    const handleClick = () =>{
        signOut(database).then(() => {
            console.log("User signed out successfully");
            // Redirect user to the desired route after signing out
            history('/');
        }).catch(error => {
            console.error("Error signing out:", error);
        });
    };

    return(
        <div>
            <h1>Home</h1>
            <button onClick={handleClick}>Sign Out</button>
        </div>
    );
}

export default HomeScreen;
