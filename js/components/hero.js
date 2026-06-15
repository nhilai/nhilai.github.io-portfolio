window.Portfolio = window.Portfolio || {};

window.Portfolio.renderHero = function ({ eyebrow, headline, lede, pipelineStages }) {
  const nodes = pipelineStages
    .map(
      (stage, index) => `
        ${index > 0 ? '<div class="arrow" aria-hidden="true">→</div>' : ''}
        <button class="node" data-stage="${stage.id}" aria-pressed="false">
          <strong>${stage.label}</strong>
          <small>${stage.description}</small>
        </button>
      `
    )
    .join('');

  return `
    <section class="hero">
      <div class="eyebrow">${eyebrow}</div>
      <h1>${headline}</h1>
      <p class="lede">${lede}</p>

      <div class="lineage">
        <div class="lineage-label">LINEAGE MAP — SELECT A STAGE TO FILTER PROJECTS</div>
        <div class="pipeline" id="pipeline">${nodes}</div>
        <div class="where" id="where">WHERE 1 = 1 — showing all projects</div>
      </div>
    </section>
  `;
};
