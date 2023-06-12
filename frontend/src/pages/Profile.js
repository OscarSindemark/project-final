import React from "react";
import './Profile.css'
import { useSelector } from "react-redux";
import Header from "../components/Header";


const Profile = () => {
    const { username } = useSelector((state) => state.user)

    return(
        <>
        <Header />
            <div>
            <figure>{username?.username.charAt(0).toUpperCase()}</figure>
            <span>
                <p>Welcome <strong>{username?.username}!</strong> Access granted to your profile.</p>
            </span>
        </div><section className="profile-section">
                <img className="profile-pic" />
                <div className="name">{username}</div>
                <div className="about-section">placeholder text...</div>
                <div className="favorite-games">Here's where you can find your favorite games</div>
            </section></>

        
    )
}

export default Profile
