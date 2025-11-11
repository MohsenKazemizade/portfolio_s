// src/pages/BlogPost2.jsx
import { Fragment, useEffect } from "react";

export default function BlogPost2() {
  useEffect(() => {
    document.body.classList.add("blog-page");
    return () => document.body.classList.remove("blog-page");
  }, []);

  return (
    <Fragment>
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>

      <div className="blog-content">
        <h1>My Blog</h1>

        {/* ARTICLE STARTS */}
        <div className="main-post">
          {/* META STARTS */}
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>3 April 2025</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>Product</span>
            </div>
            {/* <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>17 comments</span>
            </div> */}
          </div>
          {/* META ENDS */}

          {/* CONTENT STARTS */}
          <h3>
            Understanding the Developer’s Language: Key Technical Terms Every
            Product Owner Should Know
          </h3>
          <img src="/assets/blog/post-2.jpg" alt="Blog image" />
          <div className="post-content">
            <p>
              As a Product Owner, you don’t have to be a developer. But you do
              need to understand how your development team thinks and
              communicates. When the team says, “We need to refactor this part”
              or “The API has to be updated,” you should know what that means,
              how much effort it implies, and how it ties to your product goals.
              In this post, I’ll walk through common technical terms you’ll hear
              from your dev team, explain what they mean, and share smart
              questions to clarify scope and impact.
            </p>

            <p>
              Part 1: Key Technical Terms Every Product Owner Should Know. Here
              are common words you’ll hear during standups, sprint planning, or
              daily chats. The goal isn’t to code — it’s to understand the
              conversation so you can make better decisions and manage
              priorities effectively.
            </p>

            <p>
              API (Application Programming Interface): An interface that lets
              different systems communicate and exchange data. If your team
              says, “We need a new API,” it usually means a new data connection
              or integration is needed.
            </p>
            <p>
              Frontend: The part of the product users see and interact with. If
              the change is only on the frontend, it’s usually a visual or
              interaction update.
            </p>
            <p>
              Backend: Where the core logic, computation, and data processing
              happen. Backend changes often take longer and require deeper
              testing.
            </p>
            <p>
              Database: Where data is stored. A change in database structure can
              require migration planning and careful validation.
            </p>
            <p>
              Git/Branch: Version control for code. “I’ll create a new branch”
              means the work happens in isolation and will be merged later.
            </p>
            <p>
              Pull Request (PR) / Merge Request (MR): A request to merge code
              into the main branch. “PR is ready” means changes are complete and
              ready for review.
            </p>
            <p>
              Refactor: Improving existing code without changing behavior.
              Refactoring reduces tech debt and prevents future issues.
            </p>
            <p>
              Testing levels: Unit tests check small pieces; integration tests
              verify how parts work together; E2E tests simulate real user
              flows.
            </p>
            <p>
              Environments: Staging is a pre‑production copy used for final
              checks; Production is live for users.
            </p>
            <p>
              Architecture concepts: Microservices split a system into smaller,
              independent services; Caching stores temporary data to improve
              speed but needs careful invalidation.
            </p>

            <p>
              Part 2: Questions Every Product Owner Should Ask. Just knowing the
              words isn’t enough — the key is asking the right follow‑ups.
            </p>
            <p>
              When it’s about APIs or Backend: What data moves through this API?
              Does it affect other services or users? What’s the failure risk
              and mitigation?
            </p>
            <p>
              When you hear “Refactor”: Is it required now or can it wait? What
              problems does it solve? What risks do we accept if we skip it? How
              long will it take?
            </p>
            <p>
              When it’s about Testing: Which parts are covered? Do we need new
              test cases for this change?
            </p>
            <p>
              When it’s about Deployment: What features are in this release? Has
              it been tested on staging? Do we have a rollback plan?
            </p>
            <p>
              When it’s about Caching or Microservices: How will this affect
              performance and reliability? Are there data consistency or
              coordination risks?
            </p>

            <p>
              Final Thought. You don’t need to write code to lead a tech team
              effectively. But understanding how developers think helps you make
              better decisions, build trust, and manage conversations with
              confidence. What other technical terms have you run into as a PO
              that were tricky at first? I’d love to hear your experience.
            </p>
          </div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
      </div>
    </Fragment>
  );
}
