import { useEffect, useState } from "react";
export default function ScrollBar() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setP(Math.max(0, Math.min(1, scrolled)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="scroll-progress hide-mobile">
      <div>
        <div style={{ transform: `scaleY(${p})`, transformOrigin: "top" }} />
      </div>
    </div>
  );
}
