import "./Topbar.css";
import { useState } from "react";
import SearchBar from "../../Components/search";
import { Person } from "@mui/icons-material";
import BlogsData from "./feed/BlogsData.json";
import { Link } from "react-router-dom";

const Topbar = () => {
  const allTags = BlogsData.map((blog) => blog.username);
  const nav = allTags.map((tag) => ({ path: `/${tag}`, link: tag }));

  const [filteredTags, setFilteredTags] = useState(allTags);

  const handleSearch = (filtered) => {
    const filteredObjects = allTags.filter((tag) => filtered.includes(tag));
    setFilteredTags(filteredObjects);
  };

  return (
    <>
      <div className="topbarRight">
        <div className="topbarLinks"></div>
        <div className="topbarIcons">
          <div className="topbarIconItem"></div>
          {/* <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge"></span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge"></span>
          </div> */}
        </div>
        <div className="topbarContainer">
          <Link to="/" className="logo">
            Snapgram
          </Link>
          <div className="topbarCenter">
            <div className="searchbar">
              {/* Search Bar */}
              <div className="App">
                <SearchBar tags={allTags} onSearch={handleSearch} />
                <div className="tag-list">
                  {filteredTags.length > 0 ? (
                    filteredTags.map((tag, index) => (
                      <Link
                        key={index}
                        to={nav.find((n) => n.link === tag).path}
                        className="tag"
                        style={{
                          ":focus": {
                            display: "block",
                            position: "relative",
                            flexDirection: "column",
                          },
                        }}
                      >
                        {tag}
                      </Link>
                    ))
                  ) : (
                    <p>No tags found</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="topbarRight">
            <div className="topbarLinks"></div>
            <div className="topbarIcons">
              <div className="topbarIconItem">
                <a href="/profile">
                  {" "}
                  <Person />
                </a>
              </div>
              {/* <div className="topbarIconItem">
                         <Chat />
                         <span className="topbarIconBadge"></span>
                     </div>
                     <div className="topbarIconItem">
                         <Notifications />
                         <span className="topbarIconBadge"></span>
                     </div> */}
            </div>
            <a href="/login">
              <img
                src="../src/images/person/1.jpeg"
                alt="an image of a girl"
                className="topbarImg"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
