window.Portfolio = window.Portfolio || {};

window.Portfolio.renderCerts = function (certifications) {
  const items = certifications
    .map(
      (cert) => `
        <li>
          <span>${cert.name}</span>
          <span class="org">${cert.org}</span>
        </li>
      `
    )
    .join('');

  return `
    <div class="certs">
      <h2>Certifications</h2>
      <ul>${items}</ul>
    </div>
  `;
};
