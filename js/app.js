(function () {
  const { site, pipelineStages, projects, stack, certifications } = Portfolio.data;
  const app = document.getElementById('app');

  app.innerHTML = [
    Portfolio.renderHeader(site),
    Portfolio.renderHero({ ...site, pipelineStages }),
    Portfolio.renderProjects(projects),
    `<section class="twocol">${Portfolio.renderStack(stack)}${Portfolio.renderCerts(certifications)}</section>`,
    Portfolio.renderFooter(site),
  ].join('');

  Portfolio.initLineageFilter();
})();
