/* ==========================================================================
   Affichage du site : navigation + vue accueil + vue détail d'un risque.
   La vue dépend de l'ancre de l'URL : #accueil ou #<id du risque>.
   Les textes viennent de js/donnees.js.
   ========================================================================== */

const navigation = document.getElementById("navigation");
const contenu = document.getElementById("contenu");

/* ---------- Petits outils de mise en forme ---------- */

function icone(trace) {
  return `<svg class="icone" viewBox="0 0 24 24" aria-hidden="true">${trace}</svg>`;
}

function liste(elements, classe = "") {
  return `<ul class="${classe}">${elements.map((e) => `<li>${e}</li>`).join("")}</ul>`;
}

function listeNumerotee(elements) {
  return `<ol class="liste-numerotee">${elements.map((e) => `<li>${e}</li>`).join("")}</ol>`;
}

function numero(index) {
  return String(index + 1).padStart(2, "0");
}

/* ---------- Navigation ---------- */

function afficherNavigation(idActif) {
  const liens = [{ id: "accueil", titreCourt: "Home" }, ...risques];

  navigation.innerHTML = liens
    .map((lien) => {
      const actif = lien.id === idActif ? ' aria-current="page"' : "";
      return `<a href="#${lien.id}"${actif}>${lien.titreCourt}</a>`;
    })
    .join("");
}

/* ---------- Vue accueil ---------- */

function afficherAccueil() {
  const cartes = risques
    .map(
      (risque, index) => `
      <a class="bloc carte" href="#${risque.id}">
        <span class="carte-entete">
          <span class="carte-numero">${numero(index)}</span>
          ${icone(risque.icone)}
        </span>
        <h2>${risque.titre}</h2>
        <p>${risque.accroche}</p>
        <span class="carte-lien">Read more <span aria-hidden="true">&rarr;</span></span>
      </a>`
    )
    .join("");

  const chiffres = chiffresCles
    .map(
      (chiffre) => `
      <li>
        <strong>${chiffre.valeur}</strong>
        <span>${chiffre.libelle}</span>
      </li>`
    )
    .join("");

  const glossaire = bases.glossaire
    .map((entree) => `<div><dt>${entree.terme}</dt><dd>${entree.definition}</dd></div>`)
    .join("");

  contenu.innerHTML = `
    <section class="cartes" aria-label="The five risks">${cartes}</section>

    <section class="bloc rubrique" aria-labelledby="titre-chiffres">
      <h2 id="titre-chiffres">Why it matters</h2>
      <ul class="chiffres">${chiffres}</ul>
      <p class="note">Great Britain, HSE statistics.</p>
    </section>

    <section class="bloc rubrique" aria-labelledby="titre-bases">
      <h2 id="titre-bases">Hazard and risk</h2>
      <p>${bases.introduction}</p>
    </section>

    <div class="grille-deux">
      <section class="bloc rubrique" aria-labelledby="titre-etapes">
        <h2 id="titre-etapes">The five steps of risk assessment</h2>
        ${listeNumerotee(bases.etapes)}
      </section>
      <section class="bloc rubrique" aria-labelledby="titre-hierarchie">
        <h2 id="titre-hierarchie">The hierarchy of controls</h2>
        <p class="note">Solutions are most effective when applied in this order.</p>
        ${listeNumerotee(bases.hierarchie)}
      </section>
    </div>

    <div class="grille-deux">
      <section class="bloc rubrique" aria-labelledby="titre-conclusion">
        <h2 id="titre-conclusion">Conclusion</h2>
        <p>${bases.conclusion}</p>
      </section>
      <section class="bloc rubrique" aria-labelledby="titre-glossaire">
        <h2 id="titre-glossaire">Glossary</h2>
        <dl class="glossaire">${glossaire}</dl>
      </section>
    </div>`;
}

/* ---------- Vue détail d'un risque ---------- */

function afficherRisque(risque) {
  const index = risques.indexOf(risque);
  const precedent = risques[index - 1];
  const suivant = risques[index + 1];

  // Liste à cocher : chaque question a sa case
  const verifications = risque.verifications
    .map((question) => `<li><label><input type="checkbox"> <span>${question}</span></label></li>`)
    .join("");

  contenu.innerHTML = `
    <div class="bloc titre-risque">
      ${icone(risque.icone)}
      <h2><span class="carte-numero">Risk ${numero(index)}</span> ${risque.titre}</h2>
    </div>

    <article class="bloc description">
      <p class="chiffre-cle">
        <strong>${risque.chiffre.valeur}</strong>
        <span>${risque.chiffre.libelle}</span>
      </p>

      <section class="rubrique">
        <h3>Overview</h3>
        <p>${risque.presentation}</p>
      </section>

      <div class="grille-deux">
        <section class="rubrique">
          <h3>Main causes</h3>
          ${liste(risque.causes)}
        </section>
        <section class="rubrique">
          <h3>Consequences</h3>
          ${liste(risque.consequences)}
        </section>
      </div>

      <section class="rubrique encadre">
        <h3>Legal duties (UK)</h3>
        <p>${risque.loi}</p>
      </section>

      <div class="grille-deux">
        <section class="rubrique">
          <h3>Solutions for employers</h3>
          ${liste(risque.solutions, "liste-validee")}
        </section>
        <section class="rubrique">
          <h3>Tips for employees</h3>
          ${liste(risque.conseils, "liste-validee")}
        </section>
      </div>

      <section class="rubrique">
        <h3>${risque.titrePrecisions || "What HSE guidance adds"}</h3>
        ${liste(risque.precisions)}
      </section>

      <section class="rubrique encadre">
        <h3>Quick checklist</h3>
        <ul class="liste-a-cocher">${verifications}</ul>
      </section>

      <p class="note">
        Source:
        <a href="${risque.source.url}" target="_blank" rel="noopener">${risque.source.nom}</a>
      </p>
    </article>

    <div class="pagination">
      ${precedent ? `<a class="bloc" href="#${precedent.id}"><span aria-hidden="true">&larr;</span> ${precedent.titre}</a>` : "<span></span>"}
      ${suivant ? `<a class="bloc" href="#${suivant.id}">${suivant.titre} <span aria-hidden="true">&rarr;</span></a>` : `<a class="bloc" href="#accueil">Back to home</a>`}
    </div>`;
}

/* ---------- Choix de la vue selon l'URL ---------- */

function afficherVue() {
  const id = location.hash.slice(1);
  const risque = risques.find((r) => r.id === id);

  if (risque) {
    afficherRisque(risque);
    document.title = `${risque.titre} – Risk at Work`;
  } else {
    afficherAccueil();
    document.title = "Risk at Work";
  }

  afficherNavigation(risque ? risque.id : "accueil");
}

window.addEventListener("hashchange", () => {
  // Le lien d'évitement (#contenu) ne change pas de vue : on y place juste le focus
  if (location.hash === "#contenu") {
    contenu.focus();
    return;
  }
  afficherVue();
  // Après un changement de vue, on remonte au début du contenu
  const haut = location.hash === "#accueil" ? document.body : navigation;
  haut.scrollIntoView();
});

afficherVue();
