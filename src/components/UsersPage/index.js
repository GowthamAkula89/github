import React from "react";
import "./usersPage.css";
import UserCard from "../UserCard";
const UserPages = ({users,handleReposOnClick,handleFollowsOnClick}) => {
    return(
        <div className="user-page">
            {users.map((user)=>
                <UserCard className="user-cards" key={user.id} 
                user={user} 
                handleReposOnClick={handleReposOnClick} 
                handleFollowsOnClick={handleFollowsOnClick}/>
            )}
        </div>
    );
}
export default UserPages;