import React from "react";
import UserCard from "../UserCard";
import "./followersPage.css";
const FollowersPage=({user,userFollowers,handleReposOnClick,handleFollowsOnClick})=>{
    return(
        <div className="user-followers-card">
            <UserCard user={user} handleReposOnClick={handleReposOnClick} handleFollowsOnClick={handleFollowsOnClick}/>
            <div className="user-followers">
                {userFollowers.map((follower)=>
                    <UserCard user={follower} handleReposOnClick={handleReposOnClick} handleFollowsOnClick={handleFollowsOnClick} isFollower={true}/>
                )}
            </div>
        </div>
    )
}
export default FollowersPage;