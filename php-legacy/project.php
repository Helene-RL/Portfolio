<?php
$people = [
        "Damien Tremeri" => "https://www.linkedin.com/in/damien-tremerie/",
        "Romain Loncin" => "https://www.linkedin.com/in/romain-loncin/",
        "Emilie Xu" => "https://www.linkedin.com/in/emilie-qiaoxin-xu/",
        "Julie Leroy" => "https://www.linkedin.com/in/julie-leroy-aa671a5a/",
        "Benjamin Rissot" => "https://www.linkedin.com/in/rissot/"
];

$projects = [
        "wikiadventure" => [
                "title" => "WikiAdventure (terminé)",
                "year" => "BUT 2",
                "description" => " Le jeu repose sur l’idée d’utiliser l’immensité de Wikipedia pour créer une expérience ludique et éducative. Le concept s’inspire du jeu WikiSpeedia, mais avec des règles et un gameplay enrichis pour offrir une expérience plus compétitive et stratégique. Le but du jeu est de naviguer à travers une sélection d'articles Wikipedia et d'atteindre tous les articles sélectionnés le plus rapidement possible. Le jeu peut se jouer en solitaire ou jusqu'à un nombre illimité de joueurs. Le gagnant est celui qui parvient à visiter tous les articles avant les autres.",
                "context" => "Projet universitaire réalisé en BUT Informatique.",
                "objectives" => [
                        "Créer un jeu multijoueur",
                        "Utiliser une API externe (Wikipedia)",
                        "Gérer la compétition entre joueurs"
                ],
                "technos" => ["React", "TypeScript", "API Wikipedia"],
                "image" => "projects/wikiadventure.png",
                "fait_avec" => ["Damien Tremeri", "Romain Loncin"],
        ],
        "travia" => [
                "title" => "Travia (terminé)",
                "competence" => "Optimiser",
                "description" => "Ce projet se déroule dans l’univers fascinant de Star Wars et allie C, PHP, Java, HTML, CSS, JS, Graphe et BDD. En utilisant ces différents éléments, nous devions créer un site web proposant aux passagers des voyages entre différentes planètes en utilisant des trajets optimisés pour répondre à certaines attentes pouvant varier (le plus rapide, le moins chère, ne passant pas chez certaines factions …).",
                "image" => "projects/travia.png",
                "url" => "http://localhost/Travia/Account/login_form.php",
                "fait_avec" => ["Damien Tremeri", "Romain Loncin", "Emilie Xu"]
        ],
        "tp_reseau" => [
                "title" => "TP de réseau",
                "competence" => "Administrer",
                "description" => "Au cours de ma formation, j'ai réalisé plusieurs travaux pratiques en réseau informatique qui m'ont permis de développer des compétences solides dans la configuration et l'administration de différents services réseaux. Ces TP incluent la gestion de services DNS, la configuration de serveurs web, l’implémentation de serveurs DHCP, et bien plus. L'objectif était de simuler des environnements réels afin de maîtriser l'administration de réseaux et de services essentiels à une infrastructure IT.",
                "image" => "projects/tp_reseau.png",
                "url" => "",
                "fait_avec" => ["Damien Tremeri", "Romain Loncin"]
        ],
        "easyfunds" => [
                "title" => "EasyFunds (terminé)",
                "competence" => "Gérer",
                "description" => "L’objectif de ce projet était de créer un site de suivi d’activités monétiques au quotidien pour les entreprises afin qu'elles puissent suivre leurs dépenses quotidienne. L’application web devait pouvoir gérer différents types d’utilisateurs : Administrateur, Product Owner et Client; avec chacun leurs spécificités et des attendus divers.",
                "image" => "projects/easyfund.png",
                "url" => "https://damien-tremerie.go.yj.fr/easyfunds2/login.php",
                "fait_avec" => ["Damien Tremeri", "Romain Loncin", "Emilie Xu"]
        ],
        "les_creations_de_julie" => [
                "title" => "Projet Personnel: Les créations de Julie (en pause)",
                "competence" => "Conduire",
                "description" => "Ce projet a vu le jour en collaboration avec un expert en accessibilité, dans le but de créer un site de vente en ligne dédié aux doudous faits main. L'objectif était de concevoir un site simple et attrayant pour présenter et vendre ces créations uniques, tout en assurant une accessibilité optimale pour tous les utilisateurs, y compris ceux ayant des besoins spécifiques en matière d'accessibilité numérique. Le site devait permettre aux clients de découvrir et d’acheter les doudous, tout en offrant une navigation fluide et inclusive.",
                "image" => "projects/petit_creation.png",
                "url" => "http://atout-accessibilite.fr/doudous/index.php",
                "fait_avec" => ["Julie Leroy"]
        ],
        "tchou_tchou" => [
                "title" => "Tchou-Tchou (Terminé)",
                "competence" => "Collaborer",
                "description" => "L’objectif de ce projet était de concevoir et de développer une plateforme moderne, intuitive et sécurisée qui permette aux voyageurs de réserver facilement leurs billets TGV. Le site devait offrir des fonctionnalités pratiques telles que la recherche de trajets, la gestion des réservations et le paiement en ligne.",
                "image" => "projects/tchou-tchou.png",
                "url" => "http://localhost/Tchou-Tchou/web/search.php",
                "fait_avec" => ["Damien Tremeri", "Romain Loncin", "Benjamin Rissot"]
        ]
];

$key = $_GET['project'] ?? null;

if (!isset($projects[$key])) {
    header("Location: index.html");
    exit;
}

$project = $projects[$key];
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title><?= $project['title'] ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
</head>
<body>
<div class="project-page">
    <div class="container my-5">

        <a href="index.html#competences" class="btn btn-outline-primary mb-4">
            ← Retour au portfolio
        </a>

        <div class="card border-0 mb-4 project-header">
            <div class="text-white text-center py-5">
                <h1 class="fw-bold"><?= $project['title'] ?></h1>
                <?php if (!empty($project['year'])): ?>
                    <p class="mb-0 fs-5"><?= $project['year'] ?></p>
                <?php endif; ?>
            </div>
        </div>

        <?php if (!empty($project['image'])): ?>
            <div class="text-center mb-4">
                <img src="<?= $project['image'] ?>"
                     alt="<?= $project['title'] ?>"
                     class="img-fluid rounded"
                     style="max-height: 350px;">
            </div>
        <?php endif; ?>

        <p class="fs-5 text-center mb-5"><?= $project['description'] ?></p>

        <?php if (!empty($project['context'])): ?>
            <h3 class="mb-3" style="color:#4F8FCC;">Contexte</h3>
            <p><?= $project['context'] ?></p>
        <?php endif; ?>

        <?php if (!empty($project['objectives'])): ?>
            <h3 class="mb-3 h3">Objectifs</h3>
            <div class="row">
                <?php foreach ($project['objectives'] as $objective): ?>
                    <div class="col-md-4 mb-3 h3">
                        <div class="card border-0 shadow-sm h-100">
                            <div class="card-body text-center">
                                <?= $objective ?>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>

        <?php if (!empty($project['fait_avec'])): ?>
            <hr class="my-4">
            <h3 class="mb-3 h3">Fait avec</h3>
            <ul class="list-unstyled">
                <?php foreach ($project['fait_avec'] as $person): ?>
                    <?php if (isset($people[$person])): ?>
                        <li>• <a href="<?= htmlspecialchars($people[$person]) ?>" target="_blank"
                                 rel="noopener noreferrer" class="lien-projet"><?= htmlspecialchars($person) ?></a></li>
                    <?php else: ?>
                        <li>• <?= htmlspecialchars($person) ?></li>
                    <?php endif; ?>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>

        <?php if (!empty($project['technos'])): ?>
            <h3 class="mb-3 h3">Technologies utilisées</h3>

            <div class="mb-4">
                <?php foreach ($project['technos'] as $tech): ?>
                    <span class="badge rounded-pill me-1 mb-1 background-blue">
                        <?= $tech ?>
                    </span>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>

    </div>
</div>

</body>
</html>


