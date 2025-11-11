import { useEffect } from "react";

export default function useRevealanimations(selector = ".animated-layer") {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector));
    if (!("InrersectonObserver" in window)) {
      els.forEach((el) => el.classList.add("animated"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animated");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -20% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [selector]);
}
