<?php
$people = [
        "Damien Tremeri" => "https://www.linkedin.com/in/damien-tremerie/",
        "Romain Loncin" => "https://www.linkedin.com/in/romain-loncin/",
        "Emilie Xu" => "https://www.linkedin.com/in/emilie-qiaoxin-xu/",
    // Ajoute ici les autres personnes au besoin
];

$projects = [
        "wikiadventure" => [
                "title" => "WikiAdventure (terminé)",
                "year" => "BUT 2",
                "description" => " Le jeu repose sur l’idée d’utiliser l’immensité de Wikipedia pour créer une
                                    expérience ludique et éducative. Le concept s’inspire du jeu WikiSpeedia, mais avec
                                    des règles et un gameplay enrichis pour offrir une expérience plus compétitive et
                                    stratégique.
                                    Le but du jeu est de naviguer à travers une sélection d'articles Wikipedia et
                                    d'atteindre tous les articles sélectionnés le plus rapidement possible. Le jeu peut
                                    se jouer en solitaire ou jusqu'à un nombre illimité de joueurs. Le gagnant est celui
                                    qui parvient à visiter tous les articles avant les autres.",
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
                "description" => "Ce projet se déroule dans l’univers fascinant de Star Wars et allie C, PHP, Java,
                                    HTML, CSS, JS, Graphe et BDD. En utilisant ces différents éléments, nous devions
                                    créer un site web proposant aux passagers des voyages entre différentes planètes en
                                    utilisant des trajets optimisés pour répondre à certaines attentes pouvant varier
                                    (le plus rapide, le moins chère, ne passant pas chez certaines factions …).",
                "technos" => ["C", "PHP", "Java", "Graphes"],
                'image' => "projects/travia.png",
                "fait_avec" => ["Damien Tremeri", "Romain Loncin", "Emilie Xu"]
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
                    <li>• <?= $person ?></li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>

        <h3 class="mb-3 h3">Technologies utilisées</h3>

        <div class="mb-4">
            <?php foreach ($project['technos'] as $tech): ?>
                <span class="badge rounded-pill me-1 mb-1 background-blue">
                        <?= $tech ?>
                    </span>
            <?php endforeach; ?>
        </div>

    </div>
</div>

</body>
</html>


