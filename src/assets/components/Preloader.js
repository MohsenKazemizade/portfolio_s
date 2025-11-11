import { useEffect, useState } from "react";

export default function Preloader() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 800);
    return () => clearTimeout(t);
  }, []);
  return (
    <div id="preloader" className={ready ? "preloaded" : ""}>
      <div className="line" />
    </div>
  );
}
