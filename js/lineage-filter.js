window.Portfolio = window.Portfolio || {};

window.Portfolio.initLineageFilter = function () {
  const nodes = document.querySelectorAll('.node');
  const cards = document.querySelectorAll('.card');
  const where = document.getElementById('where');
  let active = null;

  nodes.forEach((node) => {
    node.addEventListener('click', () => {
      const stage = node.dataset.stage;
      active = active === stage ? null : stage;

      nodes.forEach((n) => {
        const on = n.dataset.stage === active;
        n.classList.toggle('active', on);
        n.setAttribute('aria-pressed', on);
      });

      let matched = 0;
      cards.forEach((card) => {
        const hit = active && card.dataset.stage === active;
        card.classList.toggle('hidden', active && !hit);
        card.classList.toggle('hit', !!hit);
        if (!active || hit) matched++;
      });

      if (active) {
        where.textContent = `WHERE stage = '${active}' — ${matched} project${matched > 1 ? 's' : ''} matched`;
        where.classList.add('filtered');
      } else {
        where.textContent = 'WHERE 1 = 1 — showing all projects';
        where.classList.remove('filtered');
      }
    });
  });
};
