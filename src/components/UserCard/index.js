import React, { useEffect, useState } from "react";
import "./userCard.css";
import axios from "axios";
const UserCard = ({user,handleReposOnClick,handleFollowsOnClick, isFollower}) => {
    const [userData,setUserData]=useState([]);
    const accessToken =process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
    console.log(accessToken)
    // const accessToken = "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";
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
                <div style={{"cursor":"pointer"}} onClick={() => handleReposOnClick(userData)}>
                    <p className="user-card-title">{userData.name} / {userData.login}</p> 
                    <p className="user-card-text">{userData.company}</p>
                </div>
                
                <div className="user-card-details">
                    <p className="link-data" onClick={() => handleReposOnClick(userData)}>Repositories: {userData.public_repos}</p> 
                    <p className="link-data" onClick={() => handleFollowsOnClick(userData)}>Followers: {userData.followers}</p> 
                    <p className="link-data">Following: {userData.following}</p> 
                </div>
                
            </div>
        </div>
    )
}
export default UserCard;
