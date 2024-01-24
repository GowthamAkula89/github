import React from "react";
import UserCard from "../UserCard";
import UserRepoCard from "../UserRepoCard";
import "./reposPage.css";
const ReposPage = ({user,userRepos,handleReposOnClick,handleFollowsOnClick})=>{
    return(
        <div className="user-repos-card">
            <UserCard user={user} handleReposOnClick={handleReposOnClick} handleFollowsOnClick={handleFollowsOnClick}/>
            <div className="user-repos">
                {userRepos.map((repository)=>
                    <UserRepoCard key={repository.id} repository={repository}/>
                )}
            </div>
        </div>
    )
}
export default ReposPage;