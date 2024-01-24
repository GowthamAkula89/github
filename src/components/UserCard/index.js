import React, { useEffect, useState } from "react";
import "./userCard.css";
import axios from "axios";
const UserCard = ({user,handleReposOnClick,handleFollowsOnClick, isFollower}) => {
    const [userData,setUserData]=useState([]);
    const accessToken = "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";
    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };
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