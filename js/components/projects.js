window.Portfolio = window.Portfolio || {};

function renderChips(chips) {
  return chips.map((chip) => `<span class="chip">${chip}</span>`).join('');
}

window.Portfolio.renderProjects = function (projects) {
  const cards = projects
    .map(
      (project) => `
        <article class="card" data-stage="${project.stage}">
          <span class="tag">${project.tag}</span>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="chips">${renderChips(project.chips)}</div>
        </article>
      `
    )
    .join('');

  return `
    <section>
      <h2>Selected work</h2>
      <div class="cards" id="cards">${cards}</div>
    </section>
  `;
};
