window.Portfolio = window.Portfolio || {};

window.Portfolio.renderHeader = function ({ brand, tagline }) {
  return `
    <header class="site">
      <div class="brand">${brand}</div>
      <div class="tagline">${tagline}</div>
    </header>
  `;
};
