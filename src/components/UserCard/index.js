import React, { useEffect, useState } from "react";
import "./userCard.css";
import axios from "axios";
const UserCard = ({user,handleReposOnClick,handleFollowsOnClick, isFollower}) => {
    const [userData,setUserData]=useState([]);
<<<<<<< HEAD
    // const accessToken = "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";
    // const headers = {
    //     Authorization: `Bearer ${accessToken}`,
    // };
=======
    const accessToken = "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";
    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };
>>>>>>> 4fb45f0238996c2ee157a95ee74b7f314b2f8672
    useEffect(()=>{
        loadUser()
    },[]);
    const loadUser = async()=>{
        const response =await axios.get(user.url);
        setUserData(response.data);
    }
    return(
        <div className="user-card" style={isFollower ? { "width": "100%","height":"100%" } : null}>
            <img className="user-card-img" src={userData.avatar_url} alt="user-card-img"/>
            <div className="user-card-description">
                <div className="hover-data" onClick={() => handleReposOnClick(userData)}>
                    <p className="user-card-title">{userData.name} / {userData.login}</p> 
                    <p className="user-card-text">{userData.company}</p>
                </div>
                
                <div className="user-card-details">
                    <p className="hover-data" onClick={() => handleReposOnClick(userData)}>Repositories: {userData.public_repos}</p> 
                    <p className="hover-data" onClick={() => handleFollowsOnClick(userData)}>Followers: {userData.followers}</p> 
                    <p className="hover-data">Following: {userData.following}</p> 
                </div>
                
            </div>
        </div>
    )
}
export default UserCard;
