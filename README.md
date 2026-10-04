# Risk at Work

Site web statique (HTML, CSS, JavaScript, sans framework ni dépendance) qui présente
**cinq risques courants au travail** : leurs causes, leurs conséquences et les solutions
recommandées par le *Health and Safety Executive* (HSE), l'organisme britannique chargé de
la santé et de la sécurité au travail.

Le contenu du site est en **anglais** ; le code et les commentaires sont en **français**.

## Sommaire

- [Aperçu](#aperçu)
- [Lancer le site](#lancer-le-site)
- [Structure du projet](#structure-du-projet)
- [Fonctionnement](#fonctionnement)
- [Direction artistique](#direction-artistique)
- [Modifier le contenu](#modifier-le-contenu)
- [Accessibilité et responsive](#accessibilité-et-responsive)
- [Sources](#sources)
- [Auteur](#auteur)

## Aperçu

Le site comporte deux vues, qui partagent le même en-tête (logo, titre, intro), la même
barre de navigation et le même pied de page.

### Accueil

| Zone | Contenu |
| --- | --- |
| Cartes | Les 5 risques, disposés en 2 + 2 + 1, chacun avec numéro, icône, titre et phrase d'accroche |
| *Why it matters* | 4 chiffres clés du HSE (maladies, blessures, jours perdus, coût) |
| *Hazard and risk* | Différence entre un danger (*hazard*) et un risque (*risk*), cadre légal |
| *The five steps of risk assessment* | Les 5 étapes de l'évaluation des risques |
| *The hierarchy of controls* | L'ordre dans lequel appliquer les solutions |
| *Conclusion* et *Glossary* | Conclusion du dossier et définitions des sigles (HSE, RIDDOR, MSD, PPE, RCD…) |

### Détail d'un risque

Chaque risque a sa propre vue, construite toujours sur le même modèle :

1. **Chiffre clé** – une statistique HSE mise en avant
2. **Overview** – présentation du risque
3. **Main causes** / **Consequences**
4. **Legal duties (UK)** – la réglementation britannique concernée
5. **Solutions for employers** / **Tips for employees**
6. **What HSE guidance adds** – précisions tirées directement du site du HSE
7. **Quick checklist** – liste de vérification avec cases à cocher
8. **Source** – lien vers la page HSE correspondante

En bas de page, deux liens permettent de passer au risque précédent ou suivant.

### Les cinq risques

| N° | Risque | Adresse |
| --- | --- | --- |
| 01 | Slips, trips and falls (glissades, trébuchements et chutes de plain-pied) | `#glissades` |
| 02 | Manual handling (manutention manuelle) | `#manutention` |
| 03 | Work-related stress (stress au travail) | `#stress` |
| 04 | Falls from height (chutes de hauteur) | `#hauteur` |
| 05 | Electrical hazards (risques électriques) | `#electricite` |

## Lancer le site

Aucune installation n'est nécessaire : il suffit d'ouvrir `index.html` dans un navigateur
(double-clic sur le fichier).

Pour le servir en local, par exemple avec Python :

```bash
python -m http.server 5500
```

puis ouvrir <http://localhost:5500>.

Une connexion internet est utile pour charger les polices Google Fonts. Sans connexion,
le site fonctionne quand même avec les polices du système.

## Structure du projet

```
Risk-at-Work/
├── index.html        Squelette de la page : en-tête, navigation, zone de contenu, pied de page
├── asset/
│   └── logo_paul_langevin-beauvais.png   Logo du lycée, affiché dans le pied de page
├── css/
│   └── style.css     Toute la mise en forme (variables, blocs, cartes, détail, responsive)
├── js/
│   ├── donnees.js    Tous les textes du site : chiffres clés, notions de base, les 5 risques
│   └── app.js        Affichage : navigation, vue accueil, vue détail, choix de la vue
└── README.md
```

## Fonctionnement

Le site tient sur **une seule page HTML**. La partie centrale (`<main id="contenu">`) est
remplie par JavaScript en fonction de l'ancre présente dans l'adresse :

| Adresse | Vue affichée |
| --- | --- |
| `index.html` ou `index.html#accueil` | Accueil |
| `index.html#stress` | Détail du risque dont l'`id` est `stress` |
| Ancre inconnue | Accueil |

Comme chaque vue a sa propre adresse, les boutons Précédent / Suivant du navigateur
fonctionnent et on peut partager un lien direct vers un risque.

### `js/donnees.js`

Contient uniquement des données, dans trois constantes :

- `chiffresCles` – les 4 statistiques de l'accueil ;
- `bases` – introduction, 5 étapes, hiérarchie des contrôles, conclusion, glossaire ;
- `risques` – le tableau des 5 risques.

### `js/app.js`

| Fonction | Rôle |
| --- | --- |
| `icone`, `liste`, `listeNumerotee`, `numero` | Petits outils qui fabriquent du HTML |
| `afficherNavigation(idActif)` | Construit la barre de navigation et marque le lien actif |
| `afficherAccueil()` | Construit la vue d'accueil |
| `afficherRisque(risque)` | Construit la vue détail d'un risque |
| `afficherVue()` | Lit l'ancre de l'adresse et appelle la bonne vue |

`afficherVue()` est appelée au chargement, puis à chaque changement d'ancre
(évènement `hashchange`).

### `css/style.css`

Le fichier est découpé en sections commentées, dans l'ordre de la page : variables, base,
bloc, en-tête, navigation, contenu, cartes, rubriques, détail d'un risque, pied de page,
puis les adaptations aux petits écrans.

## Direction artistique

La maquette de départ donne la **disposition** des éléments (logo rond en haut à gauche,
titre, intro, navigation, cartes en 2 + 2 + 1, pied de page) et la **palette verte**.
L'habillage a ensuite été retravaillé : les blocs noirs de la maquette sont devenus des
surfaces translucides teintées de vert.

| Élément | Valeur |
| --- | --- |
| Fond | Dégradé vert profond (`#0a4a38` → `#052a20` → `#031a14`) éclairé par trois halos verts |
| Blocs | Surface translucide : blanc à 6–10 % d'opacité, bordure vert clair, coins de 18 px |
| Titre du site | Grand titre sans cadre, le mot « at » en vert menthe |
| Logo | Bouclier dans une pastille ronde en dégradé menthe → émeraude |
| Pied de page | Logo du lycée (fond transparent), auteur, établissement et sources |
| Navigation | Barre en forme de pilule, lien actif sur fond menthe |
| Texte | `#f1f8f5` (principal), `#b3cdc2` (secondaire) |
| Accent | Vert menthe `#3ddc97` et menthe clair `#a8f0cf` (liens, icônes, chiffres) |
| Titres | Police *Outfit* |
| Texte courant | Police *Work Sans* |

Toutes ces valeurs sont des variables CSS déclarées dans `:root`, au début de
`css/style.css` : changer une couleur à cet endroit la change sur tout le site.

Détails ajoutés : icônes SVG dans des pastilles teintées, numérotation des risques,
liseré et léger soulèvement des cartes au survol, étapes numérotées dans des pastilles,
navigation qui reste visible en haut de l'écran sur ordinateur.

## Modifier le contenu

Tout le texte se trouve dans `js/donnees.js` ; il n'y a rien à modifier dans le HTML.

### Ajouter un risque

Ajouter un objet dans le tableau `risques`. Il apparaît automatiquement dans la navigation,
sur l'accueil et dans les liens précédent / suivant.

```js
{
  id: "bruit",                       // adresse de la vue : index.html#bruit
  titre: "Noise at work",            // titre complet
  titreCourt: "Noise",               // libellé dans la navigation
  icone: '<path d="..."/>',          // tracé SVG, viewBox 24x24
  accroche: "…",                     // phrase de la carte d'accueil
  chiffre: { valeur: "…", libelle: "…" },
  presentation: "…",
  causes: ["…"],
  consequences: ["…"],
  loi: "…",
  solutions: ["…"],
  conseils: ["…"],
  precisions: ["…"],
  titrePrecisions: "…",              // facultatif, remplace "What HSE guidance adds"
  verifications: ["…"],
  source: { nom: "…", url: "https://…" }
}
```

## Accessibilité et responsive

- Structure sémantique : `header`, `nav`, `main`, `footer`, titres hiérarchisés.
- Icône d'onglet (favicon) : le bouclier du logo, écrit en SVG directement dans `index.html` (aucun fichier image).
- Lien d'évitement « Skip to content » visible au clavier.
- Contour de focus visible sur tous les éléments interactifs.
- Lien actif de la navigation signalé par `aria-current="page"`.
- Icônes décoratives masquées aux lecteurs d'écran (`aria-hidden`).
- Zones cliquables d'au moins 44 px de haut.
- Animations désactivées si l'utilisateur a choisi « réduire les animations ».
- Mise en page adaptée :
  - au-dessus de 860 px : logo en haut à gauche, navigation collante, cartes sur 2 colonnes ;
  - sous 860 px : logo centré au-dessus du titre, navigation dans le flux de la page ;
  - sous 640 px : tout passe sur une seule colonne.

## Sources

Le contenu vient du dossier *Risks at Work: Causes, Consequences and Solutions* et a été
complété avec les pages du HSE consultées en octobre 2026 :

- [Health and safety statistics – key figures](https://www.hse.gov.uk/statistics/overview.htm)
- [Non-fatal injuries at work in Great Britain](https://www.hse.gov.uk/statistics/causinj/overview.htm)
- [Preventing slips and trips at work](https://www.hse.gov.uk/slips/preventing.htm)
- [Manual handling at work](https://www.hse.gov.uk/msd/manual-handling/index.htm)
- [Good handling technique](https://www.hse.gov.uk/msd/manual-handling/good-handling-technique.htm)
- [Stress Management Standards](https://www.hse.gov.uk/stress/standards/index.htm)
- [Safe use of ladders and stepladders](https://www.hse.gov.uk/work-at-height/ladders/index.htm)
- [Electrical safety – frequently asked questions](https://www.hse.gov.uk/electricity/faq.htm)
- [Portable appliance testing (PAT) – FAQ](https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm)

Les statistiques portent sur la Grande-Bretagne, période 2024/25 (2023/24 pour le coût
estimé). Elles sont mises à jour chaque année par le HSE : penser à les vérifier avant de
republier le site.

## Auteur

Site réalisé par **Priam**, élève du **Lycée Paul-Langevin de Beauvais**, dans le cadre
d'un devoir scolaire.
