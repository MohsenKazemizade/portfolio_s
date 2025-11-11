// src/components/sections/Copyright.js
const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="/assets/separator-copyright.png"
      />
      <div>
        {/* <span>© {new Date().getFullYear()} Steven Walker</span> */}
        <span>
          Designed By{" "}
          <a target="__blank" href="https://mohsenkazemi.com/" rel="noreferrer">
            MaisonDevs
          </a>
        </span>
        <ul>
          <li>
            <a
              target="__blank"
              href="https://www.linkedin.com/in/mohsen-kazemizade/"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          {/* other social links were commented in the original */}
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
