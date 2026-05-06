(function () {
  const links = Array.from(document.querySelectorAll('.nav-list a[href^="#"]'));
  const sections = links
    .map((link) => {
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      return el ? { id, link, el } : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  const byId = new Map(sections.map((s) => [s.id, s]));

  function setActive(id) {
    sections.forEach((s) => s.link.classList.toggle('active', s.id === id));
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
      if (visible[0]) {
        const id = visible[0].target.id;
        if (byId.has(id)) setActive(id);
      }
    },
    { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.1, 0.5, 1] }
  );

  sections.forEach((s) => observer.observe(s.el));

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + id);
      setActive(id);
    });
  });
})();
