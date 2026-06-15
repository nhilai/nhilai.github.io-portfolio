window.Portfolio = window.Portfolio || {};

window.Portfolio.renderStack = function ({ groups, learning }) {
  const groupMarkup = groups
    .map(
      (group) => `
        <div class="group-label">${group.label}</div>
        <div class="pills">${group.pills.map((pill) => `<span class="pill">${pill}</span>`).join('')}</div>
      `
    )
    .join('');

  return `
    <div class="panel">
      <h2>Stack</h2>
      ${groupMarkup}
      <div class="learning">${learning}</div>
    </div>
  `;
};
