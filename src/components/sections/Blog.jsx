// src/components/sections/Blog.js
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Latest Posts
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}

      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link to="/blog-post">
            <span className="img-holder">
              <img src="/assets/blog/post-1.jpg" alt="" />
            </span>
            <div className="content">
              <span className="category">Leadership</span>
              <span className="title">
                Two Assignments, One Long Day at the Assessment Center
              </span>
              <p>
                I recently took part in a full-day assessment center that
                started at seven in the...
              </p>
              <div className="meta d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <i className="fa-regular fa-calendar" />
                  <span>10 Sep 2024</span>
                </div>
                {/* <div className="d-flex align-items-center">
                  <i className="fa-regular fa-comments" />
                  <span>17 comments</span>
                </div> */}
              </div>
            </div>
          </Link>
        </div>
        {/* POST ITEM ENDS */}

        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link to="/blog-post2">
            <span className="img-holder">
              <img src="/assets/blog/post-2.jpg" alt="" />
            </span>
            <div className="content">
              <span className="category">development</span>
              <span className="title">
                Understanding the Developer’s Language: Key Technical Terms
                Every Product Owner Should Know
              </span>
              <p>As a Product Owner, you...</p>
              <div className="meta d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <i className="fa-regular fa-calendar" />
                  <span>3 April 2025</span>
                </div>
                {/* <div className="d-flex align-items-center">
                  <i className="fa-regular fa-comments" />
                  <span>34 comments</span>
                </div> */}
              </div>
            </div>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};

export default Blog;
