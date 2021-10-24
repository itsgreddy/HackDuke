import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import "./Homepage.css";
import SearchBar from "./Search";
import { useState } from "react";

function Homepage() {
  const posts = [
    {
      id: "1",
      data: [
        "Feb 25th Wednesday",
        "Breakfast on Time",
        "Lack of Sleep",
        "No exercise",
      ],
      image: "Clobber_Girl.png",
      blog: "Feel a bit headache today. Maybe because I stay up too late last night.",
    },
    {
      id: "2",
      data: ["Feb 20th Thursday", "Breakfast on Time", "Good Sleep", "Jogging"],
      image: "Doctor.png",
      blog: "I wake up naturally and have a healthy breakfast. Today, I also go jogging in IMA for about 50 minutes. I feel really great today~!",
    },
  ];

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    }

    return posts.filter((post) => {
      const postBlog = post.blog.toLowerCase();
      return postBlog.includes(query);
    });
  };
  const filteredPosts = filterPosts(posts, searchQuery);

  return (
    <>
      <div className="right-body">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ul>
          {filteredPosts.map((post) => (
            <div className="blog-content">
              <div>
                <img src={post.name}></img>
              </div>
              <div className="blog-info">
                {post.data.map((data) => {
                  return (
                    <p>
                      {data} <br />
                    </p>
                  );
                })}
              </div>
              <div className="blog-sentence">
                <p>{post.blog}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Homepage;
