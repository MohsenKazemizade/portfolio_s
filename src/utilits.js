export const jqueryFuntion = () => {
  window.addEventListener("load", function () {
    /* ----------------------------------------------------------- */
    /*  PAGE PRELOADER
    /* ----------------------------------------------------------- */

    var preloader = document.getElementById("preloader");
    setTimeout(function () {
      if (preloader) {
        preloader.classList.add("preloaded");
      }
    }, 800);

    if (window.innerWidth > 1024) {
      setTimeout(function () {
        var headerInner = document.querySelector(".header-inner");
        if (headerInner) {
          headerInner.classList.add("animated", "fadeInDown");
        }
      }, 1500);
      setTimeout(function () {
        document
          .querySelectorAll(".home>div>div h1 span span")
          .forEach((el) => {
            el.classList.add("animated", "fadeInUp");
          });
        document.querySelectorAll(".home>div>div .intro").forEach((el) => {
          el.classList.add("animated", "fadeInUp");
        });
        document.querySelectorAll(".home .cta").forEach((el) => {
          el.classList.add("animated", "fadeInUp");
        });
      }, 2200);
    } else {
      setTimeout(function () {
        var headerInner = document.querySelector(".header-inner");
        if (headerInner) {
          headerInner.classList.add("animated", "fadeInDown");
        }
      }, 1100);
      setTimeout(function () {
        document
          .querySelectorAll(".home>div>div h1 span span")
          .forEach((el) => {
            el.classList.add("animated", "fadeInUp");
          });
        document.querySelectorAll(".home>div>div .intro").forEach((el) => {
          el.classList.add("animated", "fadeInUp");
        });
        document.querySelectorAll(".home .cta").forEach((el) => {
          el.classList.add("animated", "fadeInUp");
        });
      }, 1800);
    }

    /* ----------------------------------------------------------- */
    /*  SET ACTIVE MENU ITEM ON SCROLL - USING JQUERY LOGIC
    /* ----------------------------------------------------------- */

    var homeElement = document.querySelector(".home");
    var aboutElement = document.querySelector(".about");
    var factsElement = document.querySelector(".facts");
    var portfolioMainContent = document.querySelector(
      ".portfolio .single-item .main-content"
    );
    var portfolioDetails = document.querySelector(
      ".portfolio .single-item .details"
    );
    var clientsElement = document.querySelector(".clients");
    var contactElement = document.querySelector(".contact");
    var testimonialElement = document.querySelector(".testimonials");
    var blogElement = document.querySelector(".blog");
    var copyrightElement = document.querySelector(".copyright");

    // Replicate jQuery .width() calls
    var homewidth = homeElement
      ? homeElement.getBoundingClientRect().width - 10
      : 0;
    var aboutwidth =
      homewidth +
      (aboutElement ? aboutElement.getBoundingClientRect().width : 0) +
      (factsElement ? factsElement.getBoundingClientRect().width : 0) -
      10;
    var portfoliowidth =
      aboutwidth +
      (portfolioMainContent
        ? portfolioMainContent.getBoundingClientRect().width
        : 0) +
      (portfolioDetails ? portfolioDetails.getBoundingClientRect().width : 0) +
      250 +
      65 +
      300 +
      (clientsElement ? clientsElement.getBoundingClientRect().width : 0) -
      10;
    var contactwidth =
      portfoliowidth +
      (contactElement ? contactElement.getBoundingClientRect().width : 0) +
      (testimonialElement
        ? testimonialElement.getBoundingClientRect().width
        : 0) -
      10;
    var blogwidth =
      contactwidth +
      (blogElement ? blogElement.getBoundingClientRect().width : 0) +
      (copyrightElement ? copyrightElement.getBoundingClientRect().width : 0) -
      10;

    /* ----------------------------------------------------------- */
    /*  HORIZONTAL SCROLL & REVEAL ANIMATIONS
    /* ----------------------------------------------------------- */

    function animateContent() {
      var wrapper = document.getElementById("wrapper");
      if (!wrapper) return;

      // Use original jQuery logic: wrapper.width() - window.width() / 2 + 270
      var divWidth =
        wrapper.getBoundingClientRect().width - window.innerWidth / 2 + 270;
      var animated = document.querySelectorAll(".animated-layer");

      animated.forEach(function (anim) {
        // Use offset().left equivalent - getBoundingClientRect().left + scrollLeft
        var offset = anim.getBoundingClientRect().left + wrapper.scrollLeft;

        if (offset < divWidth) {
          // Image Reveal Animation
          if (anim.classList.contains("image-animation")) {
            anim.classList.add("animated");
          }
          // Fade In Up Animation
          else if (anim.classList.contains("fade-in-up-animation")) {
            anim.classList.add("animated", "fadeInUp");
          }
          // Fade In Animation
          else if (anim.classList.contains("fade-in-animation")) {
            anim.classList.add("animated", "fadeIn");
          }
          // Fade In Down Animation
          else if (anim.classList.contains("fade-in-down-animation")) {
            anim.classList.add("animated", "fadeInDown");
          }
          // Fade In Right Animation
          else if (anim.classList.contains("fade-in-right-animation")) {
            anim.classList.add("animated", "fadeInRight");
          }
          // Fade In Left Animation
          else if (anim.classList.contains("fade-in-left-animation")) {
            anim.classList.add("animated", "fadeInLeft");
          }
        }
      });
    }

    function checkScroll() {
      var wrapper = document.getElementById("wrapper");
      if (!wrapper) return;

      // Use wrapper.scrollLeft instead of mCustomScrollbar left value
      var scrollLeft = wrapper.scrollLeft;
      var menuItems = document.querySelectorAll(".menu ul li span");
      var homeLink = document.getElementById("home-link");
      var aboutLink = document.getElementById("about-link");
      var portfolioLink = document.getElementById("portfolio-link");
      var contactLink = document.getElementById("contact-link");
      var blogLink = document.getElementById("blog-link");

      menuItems.forEach(function (item) {
        item.classList.remove("active");
      });

      if (scrollLeft > homewidth && scrollLeft < aboutwidth) {
        aboutLink?.classList.add("active");
      } else if (scrollLeft > aboutwidth && scrollLeft < portfoliowidth) {
        portfolioLink?.classList.add("active");
      } else if (scrollLeft > portfoliowidth && scrollLeft < contactwidth) {
        contactLink?.classList.add("active");
      } else if (scrollLeft > contactwidth && scrollLeft < blogwidth) {
        blogLink?.classList.add("active");
      } else {
        homeLink?.classList.add("active");
      }
    }

    var wrapper = document.getElementById("wrapper");
    if (wrapper && wrapper.length !== 0) {
      if (window.innerWidth > 1024) {
        // Native scroll listener instead of mCustomScrollbar
        wrapper.addEventListener(
          "scroll",
          function () {
            animateContent();
            checkScroll();
          },
          { passive: true }
        );

        // Trigger animation on load
        animateContent();
        checkScroll();
      } else {
        // WOW.js animation library initialization for mobile
        if (typeof window !== "undefined" && window.WOW) {
          new window.WOW().init();
        }
      }
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    /* ----------------------------------------------------------- */
    /*  SAFARI BROWSER FIXES
    /* ----------------------------------------------------------- */

    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      document.body.classList.add("body-safari");
    }

    /* ----------------------------------------------------------- */
    /*  REMOVE # FROM URL
    /* ----------------------------------------------------------- */

    var hashLinks = document.querySelectorAll("a[href='#']");
    hashLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
      });
    });

    function removeHash() {
      history.replaceState(
        "",
        document.title,
        window.location.origin +
          window.location.pathname +
          window.location.search
      );
    }

    var menuLinks = document.querySelectorAll("#menu li a");
    menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        setTimeout(function () {
          removeHash();
        }, 5);
      });
    });

    /* ----------------------------------------------------------- */
    /*  REMOVE ANIMATIONS CLASSES IN DESKTOP
    /* ----------------------------------------------------------- */

    if (window.innerWidth > 1024) {
      document
        .querySelectorAll(
          ".fadeIn, .fadeInUp, .fadeInDown, .fadeInRight, .fadeInLeft"
        )
        .forEach(function (el) {
          el.classList.remove(
            "fadeIn",
            "fadeInUp",
            "fadeInDown",
            "fadeInRight",
            "fadeInLeft"
          );
        });
    }

    /* ----------------------------------------------------------- */
    /*  MENU LINKS
    /* ----------------------------------------------------------- */

    var menuSpans = document.querySelectorAll(".menu ul li span");
    menuSpans.forEach(function (span) {
      span.addEventListener("click", function () {
        var self = this;
        setTimeout(function () {
          self.classList.toggle("active");
        }, 1600);
      });
    });

    var homeLink = document.getElementById("home-link");
    var aboutLink = document.getElementById("about-link");
    var portfolioLink = document.getElementById("portfolio-link");
    var contactLink = document.getElementById("contact-link");
    var blogLink = document.getElementById("blog-link");
    var wrapper = document.getElementById("wrapper");

    function scrollToElement(elementId) {
      var element = document.getElementById(elementId);
      if (element && wrapper) {
        // Smooth scroll using wrapper.scrollLeft
        var targetScroll = element.offsetLeft;
        wrapper.scrollTo({
          left: targetScroll,
          behavior: "smooth",
        });
      }
    }

    homeLink?.addEventListener("click", function () {
      scrollToElement("home");
    });

    aboutLink?.addEventListener("click", function () {
      scrollToElement("about");
    });

    portfolioLink?.addEventListener("click", function () {
      scrollToElement("portfolio");
    });

    contactLink?.addEventListener("click", function () {
      scrollToElement("contact");
    });

    blogLink?.addEventListener("click", function () {
      scrollToElement("blog");
    });

    var checkboxMenu = document.getElementById("checkboxmenu");
    menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        checkboxMenu?.click();
        document.body.classList.toggle("overflow-hidden");
      });
    });

    var menuToggle = document.getElementById("menuToggle");
    menuToggle?.addEventListener("click", function () {
      document.body.classList.toggle("overflow-hidden");
    });

    /* ----------------------------------------------------------- */
    /*  CALL TO ACTION HOME
    /* ----------------------------------------------------------- */

    var cta = document.getElementById("cta");
    cta?.addEventListener("click", function () {
      if (window.innerWidth > 1024) {
        scrollToElement("about");
      } else {
        var myPhoto = document.getElementById("my-photo");
        if (myPhoto) {
          window.scrollTo({
            top: myPhoto.offsetTop,
            behavior: "smooth",
          });
        }
      }
    });
  });
};

export default jqueryFuntion;
