// src/pages/BlogPost.jsx
import { Fragment, useEffect } from "react";

export default function BlogPost() {
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
              <span>10 Sep 2024</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>Leadership</span>
            </div>
            {/* <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>17 comments</span>
            </div> */}
          </div>
          {/* META ENDS */}

          {/* CONTENT STARTS */}
          <h3>Two Assignments, One Long Day at the Assessment Center</h3>
          <img src="/assets/blog/post-1.jpg" alt="Blog image" />
          <div className="post-content">
            <p>
              I recently took part in a full-day assessment center that started
              at seven in the morning and ended at five in the afternoon. There
              were fifteen of us. After breakfast, the team explained how the
              day would go, collected our phones, and gave us tablets for the
              exercises. Everything felt serious and organized. During the day,
              we worked on different kinds of tasks. Two of them stood out to
              me: one individual case and one role play. They tested completely
              different sides of me and both stayed in my mind after the day
              ended.
            </p>

            <p>
              1. The Individual Case — Thinking Under Pressure. The first
              assignment was a business case about merging two companies. It
              sounded simple at first, but when I saw the time limit, it didn’t
              feel simple anymore. I decided to stay organized. I wrote down the
              main questions and set a time for each one. I also left ten
              minutes at the end to check everything. That small plan helped me
              stay calm when it got stressful. When it was time to present, I
              realized they weren’t looking for a perfect answer. They wanted to
              see how I handle time, pressure, and how I structure my thoughts
              when things move fast.
            </p>

            <p>What helped me:</p>
            <p>— Don’t get lost in details. Keep your logic clear.</p>
            <p>— Finish on time, even if it’s not perfect.</p>
            <p>— Take a breath before presenting. It changes how you speak.</p>
            <p>
              — Explain your reasoning, and if there are risks, say how you
              would deal with them.
            </p>
            <p>
              — Mention any framework you used. It shows how you think, not just
              what you know.
            </p>
            <p>
              Working under pressure wasn’t easy, but it helped me focus. I
              stopped overthinking and just made decisions.
            </p>

            <p>
              2. The Role Play — Leading Through Discomfort. The second task was
              a role play. I had to act as a new manager talking to an older
              employee who had lost motivation and was spending too much time
              online. At first, I thought it would be easy, just a short
              conversation. But when I entered the room, it suddenly felt real.
              The “employee” was a middle-aged man, maybe fifteen years older
              than me. For a second, I didn’t know how to start. He was there to
              challenge me. Sometimes he looked tired, sometimes annoyed,
              sometimes completely silent. My job was to handle it like a real
              conversation: stay calm, listen, and still lead it to a clear
              point.
            </p>

            <p>Things I learned:</p>
            <p>
              — Don’t focus too much on the acting. The point is your reaction.
            </p>
            <p>— Read the situation description carefully. It matters a lot.</p>
            <p>— Don’t take it personally if the other person seems distant.</p>
            <p>
              — Be kind but stay professional. Acknowledge what they do well,
              but clearly explain what needs to change and what comes next.
            </p>

            <p>
              The role play showed me how hard real communication can be. You
              can’t just say the right thing — you have to say it in the right
              way. It’s a balance between listening and leading.
            </p>

            <p>
              Final Thoughts. These two assignments were very different, but
              together they said a lot about how I work. The first one tested
              how I think when time is short. The second one tested how I handle
              people when things feel uncomfortable. Both reminded me that what
              matters most isn’t being perfect — it’s being steady, clear, and
              honest when the situation gets tough.
            </p>
          </div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
      </div>
    </Fragment>
  );
}
