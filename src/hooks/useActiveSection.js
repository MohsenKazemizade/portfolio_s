import { useEffect, useState } from "react";

export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids?.[0] ?? null);
  useEffect(() => {
    const sections = (ids || [])
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { threshold: 0.6 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [ids?.join("|")]);
  return active;
}
