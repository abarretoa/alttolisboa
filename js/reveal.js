// Scroll reveals. Content is visible by default; this only adds motion
// when JS runs and the visitor hasn't asked for reduced motion.
(() => {
  const root = document.documentElement;
  const targets = document.querySelectorAll("[data-reveal], [data-cue]");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );

  targets.forEach((el) => io.observe(el));

  // Never leave anything hidden if the observer is slow to fire (e.g. print, jump links).
  window.addEventListener("beforeprint", () => targets.forEach((el) => el.classList.add("is-in")));
  root.classList.add("reveal-ready");
})();
