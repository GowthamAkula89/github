import React from "react";
import "./userRepoCard.css";

const UserRepoCard = ({ repository }) => {
  const updatedAt = new Date(repository.updated_at);
  const formattedDate = updatedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="user-repo-card">
      <div className="repo-card-title">
        <p className="repo-title">{repository.full_name}</p>
        <p className="repo-visibility">{repository.private ? "private" : "public"}</p>
      </div>
      <p>{repository.description}</p>
      <div className="repo-card-data">
        <p>Language: {repository.language}</p>
        <p>Forks: {repository.forks_count}</p>
        <p>Open Issuses: {repository.open_issues}</p>
        <p>Updated on {formattedDate}</p>
      </div>
    </div>
  );
};

export default UserRepoCard;
