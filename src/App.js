import React, { useEffect, useState } from 'react';
import './App.css';
import SearchPage from './components/SearchPage';
import axios from 'axios';
import UserPages from './components/UsersPage';
import UserCard from './components/UserCard';
// import { Route, Routes } from "react-router-dom";
// import HomePage from './components/HomePage';
import ReposPage from './components/ReposPage';
import FollowersPage from './components/FollowersPage';
function App() {
  const url="https://api.github.com/users"
  const accessToken = "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";
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const [users,setUsers]=useState([]);
  const [selectedUser,setSelectedUser]=useState([]);
  const [userRepos,setUserRepos] = useState([]);
  const [userFollowers,setUserFollowers] =useState([]);
  //
  const [isUsersPage,setIsUsersPage]=useState(true);
  const [isReposPage,setIsReposPage]=useState(false);
  //
  const [isFollowersPage,setIsFollowersPage]=useState(false);
  useEffect(()=>{
    loadUser();
  },[])
  const loadUser= async()=>{
    try{
      const response=await axios.get(url,{ headers });
      setUsers(response.data);
    }catch(err){
      console.log(err);
    }
    
  }
  const getUser = async(user)=>{
    try{
      const response = await axios.get(user.url,{ headers });
      setSelectedUser(response.data);
      setIsReposPage(false);
    }catch(err){
      setSelectedUser([]);
      console.log(err);
    }
  }
  const handleReposOnClick = async(user) =>{
    try{
      const response =await axios.get(user.repos_url,{ headers });
      setUserRepos(response.data);
      setSelectedUser(user);
      setIsReposPage(true);
      setIsUsersPage(false);
      setIsFollowersPage(false);
    }catch(err){
      console.log(err);
    }
  }
  const handleFollowsOnClick = async(user)=>{
    try{
      const response =await axios.get(user.followers_url,{ headers });
      setUserFollowers(response.data);
      setSelectedUser(user);
      setIsFollowersPage(true);
      setIsReposPage(false);
      setIsUsersPage(false);
    }catch(err){
      console.log(err);
    }
  }
  console.log(selectedUser)
  return (
    <div className="App">
      {isUsersPage &&(
        <>
        <SearchPage users={users} getUser={getUser}/>
        {selectedUser.length === 0 &&(
          <UserPages users={users}  handleReposOnClick={handleReposOnClick} handleFollowsOnClick={handleFollowsOnClick}/>)
        }
        {selectedUser.length !== 0 &&(
          <UserCard user={selectedUser} 
            handleReposOnClick={handleReposOnClick} 
            handleFollowsOnClick={handleFollowsOnClick}
          />
        )}
        </>
      )}
      {isReposPage && (
        <ReposPage user={selectedUser} 
          userRepos={userRepos} 
          handleReposOnClick={handleReposOnClick}
          handleFollowsOnClick={handleFollowsOnClick}
        />
      )}
      {isFollowersPage &&(
        <FollowersPage user={selectedUser} 
          userFollowers={userFollowers} 
          handleReposOnClick={handleReposOnClick}
          handleFollowsOnClick={handleFollowsOnClick}
        />
      )}
      {/* <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path="/repos"Component={ReposPage}/>
      </Routes> */}
    </div>
  );
}

export default App;
