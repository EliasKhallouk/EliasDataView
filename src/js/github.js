const username = 'EliasKhallouk';

async function afficherStatsGithub() {
  try {
    // Récupérer les données utilisateur
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    const userData = await userResponse.json();

    // Récupérer les repos
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await reposResponse.json();

    if (!Array.isArray(repos) || repos.length === 0) throw new Error('Repos non trouvés');

    // Trouver le repo avec la date pushed_at la plus récente
    const lastPushedRepo = repos.reduce((latest, repo) => {
      return new Date(repo.pushed_at) > new Date(latest.pushed_at) ? repo : latest;
    }, repos[0]);

    const lastCommitDateStr = new Date(lastPushedRepo.pushed_at).toLocaleDateString('fr-FR');

    // Construire le contenu HTML
    const container = document.getElementById('github-stats');
    container.innerHTML = `
      <div class="card" style="--cui-card-cap-bg: #ffffff">
          <div class="card-header position-relative d-flex justify-content-center align-items-center">
            <a href="${userData.html_url}" target="_blank" style="text-decoration: none; color: inherit;">

                <svg class="icon icon-3xl text-white my-4" style="fill: #000000;">
                <use xlink:href="node_modules/@coreui/icons/sprites/brand.svg#cib-github"></use>
                </svg>
                <div class="chart-wrapper position-absolute top-0 start-0 w-100 h-100">
                <canvas id="social-box-chart-3" height="90"></canvas>
                </div>
            </a>
          </div>
          <div class="card-body row text-center">
            <div class="col">
              <div class="fs-5 fw-semibold">${lastCommitDateStr}</div>
              <div class="text-uppercase text-body-secondary small">Dernier commit</div>
            </div>
            <div class="vr"></div>
            <div class="col">
              <div class="fs-5 fw-semibold">${userData.public_repos}</div>
              <div class="text-uppercase text-body-secondary small">Repos publics</div>
            </div>
          </div>
      </div>
    `;
  } catch (error) {
    console.error('Erreur API GitHub:', error);
  }
}

afficherStatsGithub();
