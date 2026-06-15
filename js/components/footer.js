window.Portfolio = window.Portfolio || {};

window.Portfolio.renderFooter = function ({ signOff, links }) {
  return `
    <footer class="site">
      <div class="sign-off">${signOff}</div>
      <div class="btns">
        <a class="btn btn-ink" href="${links.linkedin}">LinkedIn</a>
        <a class="btn btn-amber" href="${links.email}">Email me</a>
      </div>
    </footer>
  `;
};
