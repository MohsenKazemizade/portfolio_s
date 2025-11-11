// src/components/sections/Testimonials.js
const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " I have to mention that she is the kind of person who never
                stops learning. Every day she surprises you with new tools,
                insights, and methods. "
              </span>
              <span className="person">Mehdi Malekifar</span>
              <span className="job">
                PhD Candidate at emlyon business school
              </span>
            </p>
            <img src="/assets/testimonials/Mehdi-Malekifar.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}

        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Shadi is an excellent manager. I had a pleasure working for 2
                years with her, and she leads by example. She always kept the
                team morale up, and I believe she is the best manager I ever had
                as she is friendly. "
              </span>
              <span className="person">Niloofar Zeinalian</span>
              <span className="job">Digital Marketing Specialist</span>
            </p>
            <img src="/assets/testimonials/Niloofar-zeinalian.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>

      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="/assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
