export type Project = {
    id: string;
    title: string;
    year: string;
    description_card: string;
    description: string;
    objectives: string[];
    technos: string[];
    image: string;
    url?: string;
    faitAvec: string[];
};

export const projects: Record<string, Project> = {
    wikiadventure: {
        id: "wikiadventure",
        title: "WikiAdventure (terminé)",
        year: "BUT 2",
        description_card:
            "Le jeu repose sur l’idée d’utiliser Wikipedia pour créer une expérience ludique et éducative.",
        description:
            "Le jeu repose sur l’idée d’utiliser l’immensité de Wikipedia pour créer une expérience ludique et éducative. Le concept s’inspire du jeu WikiSpeedia, mais avec des règles et un gameplay enrichis pour offrir une expérience plus compétitive et stratégique. Le but du jeu est de naviguer à travers une sélection d'articles Wikipedia et d'atteindre tous les articles sélectionnés le plus rapidement possible. Le jeu peut se jouer en solitaire ou jusqu'à un nombre illimité de joueurs. Le gagnant est celui qui parvient à visiter tous les articles avant les autres.",
        objectives: [
            "Créer un jeu multijoueur",
            "Utiliser une API externe (Wikipedia)",
            "Gérer la compétition entre joueurs",
        ],
        technos: ["React", "TypeScript", "API Wikipedia"],
        image: "wikiadventure.png",
        faitAvec: ["damienTremerie", "romainLoncin"],
    },

    travia: {
        id: "travia",
        title: "Travia (terminé)",
        year: "BUT 2",
        description_card:
            "Créer un site web proposant des voyages optimisés dans l’univers de Star Wars.",
        description:
            "Ce projet se déroule dans l’univers fascinant de Star Wars et allie C, PHP, Java, HTML, CSS, JS, Graphe et BDD. En utilisant ces différents éléments, nous devions créer un site web proposant aux passagers des voyages entre différentes planètes en utilisant des trajets optimisés pour répondre à certaines attentes pouvant varier (le plus rapide, le moins cher, ne passant pas chez certaines factions …).",
        objectives: [
            "Utiliser et interconnecter plusieurs langages de programmation",
            "Mettre en œuvre les concepts de graphes pour l’optimisation de trajets",
            "Développer une application web complète",
            "Mobiliser des compétences issues de plusieurs matières de l’année",
            "Travailler en équipe sur un projet de grande ampleur"
        ],
        technos: ["C", "PHP", "Java", "HTML", "CSS", "JS", "Graphe", "BDD"],
        image: "travia.png",
        faitAvec: ["damienTremerie", "romainLoncin", "emilieXu"],
    },

    tp_reseau: {
        id: "tp_reseau",
        title: "TP de réseau",
        year: "BUT 2",
        description_card:
            "Travaux pratiques en réseau pour développer des compétences solides en administration.",
        description:
            "Ces travaux pratiques ont été réalisés dans le cadre de la formation en BUT Informatique. Ils portaient sur la mise en œuvre et la configuration de différents mécanismes et services réseaux, ainsi que sur l’analyse de la sécurité des infrastructures. Les TP comprenaient notamment la configuration de pare-feu et de la translation d’adresses (NAT), l’analyse d’attaques réseau, la mise en place d’un serveur mandataire (proxy), d’un serveur HTTPS et d’un VPN.",
        objectives: [
            "Comprendre et configurer des mécanismes de sécurité réseau",
            "Mettre en place la translation d’adresses (NAT) et des règles de pare-feu",
            "Analyser des attaques réseau et leurs impacts",
            "Configurer des services réseaux sécurisés (HTTPS, VPN, proxy)",
            "Renforcer les compétences en administration et en diagnostic réseau"
        ],
        technos: ["Pare-feu", "NAT", "Proxy", "HTTPS", "VPN", "Réseaux"],
        image: "tp_reseau.png",
        faitAvec: ["damienTremerie", "romainLoncin"],
    },

    easyfund: {
        id: "easyfund",
        title: "EasyFunds (terminé)",
        year: "BUT 2",
        description_card:
            "Créer un site de suivi d’activités monétiques pour les entreprises.",
        description:
            "L’objectif de ce projet était de créer un site de suivi d’activités monétiques au quotidien pour les entreprises afin qu'elles puissent suivre leurs dépenses quotidiennes. L’application web devait pouvoir gérer différents types d’utilisateurs : Administrateur, Product Owner et Client; avec chacun leurs spécificités et des attendus divers.",
        objectives: [
            "Appliquer la méthode Scrum dans un projet web",
            "Travailler avec un client simulé en respectant ses exigences",
            "Organiser le travail en sprints et livrer des fonctionnalités itératives",
            "Développer un site web fonctionnel et structuré",
            "Renforcer les bonnes pratiques de qualité web"
        ],
        technos: ["PHP", "MySQL", "HTML", "CSS", "JS"],
        image: "easyfund.png",
        url: "https://damien-Tremeriee.go.yj.fr/easyfunds2/login.php",
        faitAvec: ["damienTremerie", "romainLoncin", "emilieXu"],
    },

    petit_creation: {
        id: "petit_creation",
        title: "Les créations de Julie (en pause)",
        year: "Projet Personnel",
        description_card:
            "Site e-commerce pour doudous faits main avec focus sur l’accessibilité.",
        description:
            "Ce projet a vu le jour en collaboration avec un expert en accessibilité, dans le but de créer un site de vente en ligne dédié aux doudous faits main. L'objectif était de concevoir un site simple et attrayant pour présenter et vendre ces créations uniques, tout en assurant une accessibilité optimale pour tous les utilisateurs, y compris ceux ayant des besoins spécifiques en matière d'accessibilité numérique. Le site devait permettre aux clients de découvrir et d’acheter les doudous, tout en offrant une navigation fluide et inclusive.",
        objectives: [
            "Créer un site de vente en ligne pour des créations artisanales",
            "Appliquer les principes d’accessibilité numérique",
            "Concevoir une interface simple et inclusive",
            "Mettre en pratique des compétences web acquises en formation",
            "Collaborer avec une cliente experte en accessibilité"
        ],
        technos: ["PHP", "HTML", "CSS", "JS", "BDD"],
        image: "petit_creation.png",
        url: "https://atout-accessibilite.fr/doudous/index.php",
        faitAvec: ["julieLeroy"],
    },

    tchoutchou: {
        id: "tchoutchou",
        title: "Tchou-Tchou (Terminé)",
        year: "BUT 2",
        description_card:
            "Plateforme moderne pour réserver des billets TGV facilement et en sécurité.",
        description:
            "L’objectif de ce projet était de concevoir et de développer une plateforme moderne, intuitive et sécurisée qui permette aux voyageurs de réserver facilement leurs billets TGV. Le site devait offrir des fonctionnalités pratiques telles que la recherche de trajets, la gestion des réservations et le paiement en ligne.",
        objectives: [
            "Découvrir et utiliser une base de données NoSQL",
            "Mettre en œuvre MongoDB dans une application web",
            "Comprendre les différences entre bases relationnelles et NoSQL",
            "Développer une application web conforme aux principes de qualité web",
            "Renforcer les compétences en conception d’architectures web"
        ],
        technos: ["PHP", "HTML", "CSS", "JS", "MongoDB", "NoSQL"],
        image: "tchou-tchou.png",
        faitAvec: ["damienTremerie", "romainLoncin", "benjaminRissot"],
    },

    codexnaturalis: {
        id: "codexnaturalis",
        title: "Codex Naturalis (Terminé)",
        year: "BUT 1",
        description_card:
            "Developpement d'un jeu de société: le Codex Naturalis",
        description:
            "Projet universitaire consistant à développer une adaptation numérique du jeu de cartes Codex Naturalis. Le jeu respecte les règles officielles et propose une interface permettant à plusieurs joueurs de s'affronter. Le projet met l'accent sur la logique de jeu, la gestion des cartes, le calcul des scores et la structuration du code.",
        objectives: [
            "Analyser et comprendre les règles d’un jeu de société existant",
            "Modéliser les entités du jeu (cartes, joueurs, plateau, score)",
            "Implémenter la logique complète du jeu en Java",
            "Appliquer les principes de la programmation orientée objet",
            "Travailler en collaboration sur un projet informatique"
        ],
        technos: ["Java"],
        image: "codexnaturalis.png",
        faitAvec: ["charlyJanvier"],
    },

    unesco: {
        id: "unesco",
        title: "Project Alger(UNESCO) (Terminé)",
        year: "BUT 1",
        description_card:
            "Création d'un site culturel sur Alger en partenariat avec l’Unesco.",
        description:
            "Ce projet a été réalisé tout au long de l’année dans le cadre d’une SAE et correspond au premier site web développé durant la formation. Le site a été conçu pour promouvoir la culture d’Alger à travers la mise en valeur de son patrimoine historique, culturel et urbain. Le projet a permis de découvrir les bases du développement web tout en travaillant sur un sujet à forte dimension culturelle.",
        objectives: [
            "Développer un premier site web fonctionnel",
            "Promouvoir la culture et le patrimoine de la ville d’Alger",
            "Travailler en équipe sur un projet de longue durée",
            "Développer la communication au sein d’un groupe de projet",
            "Appliquer une méthodologie de travail adaptée à un projet web"
        ],
        technos: ["PHP", "HTML", "CSS", "JS", "BDD"],
        image: "Site_Alger.png",
        faitAvec: ["martialCarceles", "loicRakotoniary", "julesRenaudGrange", "danielDosSantos", "khephrenDjelidi"],
    },

    primeur_passion: {
        id: "primeur_passion",
        title: "Primeur Passion (Terminé)",
        year: "BUT 1",
        description_card:
            "Création d’un site de vente de fruits et légumes pour s’entraîner aux bases de données.",
        description:
            "Ce projet a été réalisé dans le cadre de la formation afin de s’entraîner à l’utilisation des bases de données. Le travail a commencé par une phase théorique, comprenant l’étude et la conception de la base de données, avant de passer à la mise en pratique à travers le développement d’un site web. L’objectif principal était d’appliquer concrètement les notions étudiées en cours.",
        objectives: [
            "Appliquer les notions théoriques de bases de données",
            "Concevoir et utiliser une base de données",
            "Mettre en pratique les concepts étudiés en cours",
            "Développer un site web connecté à une base de données",
            "Comprendre le lien entre modélisation et implémentation"
        ],
        technos: ["PHP", "HTML", "CSS", "BDD"],
        image: "primeur_passion.png",
        faitAvec: ["charlyJanvier"],
    },

    qix: {
        id: "qix",
        title: "Qix (Terminé)",
        year: "BUT 1",
        description_card:
            "Qix est un projet Python où le joueur trace des lignes pour capturer des zones tout en évitant un ennemi mouvant et imprévisible.",
        description:
            "Qix est un projet développé en Python où le joueur doit remplir l’aire de jeu en traçant des lignes verticales et horizontales, tout en évitant le Qix, un ennemi abstrait qui se déplace librement, ainsi que des obstacles comme les sparx le long des bords. L’objectif est de sécuriser un certain pourcentage du terrain pour passer au niveau suivant, combinant stratégie, rapidité et anticipation dans un environnement minimaliste mais stimulant.",
        objectives: [
            "Appliquer les notions de programmation Python vues en cours",
            "Utiliser une bibliothèque fournie par l’université",
            "Implémenter la logique d’un jeu",
            "Gérer les déplacements et les interactions",
            "Développer un projet fonctionnel à partir de consignes imposées"
        ],
        technos: ["Python"],
        image: "qix.png",
        url: "https://replit.com/@heleneraluleroy/Qix",
        faitAvec: ["inesBenameur"],
    },

    sae_reseau: {
        id: "sae_reseau",
        title: "SAE réseau (Terminé)",
        year: "BUT 1",
        description_card:
            "Mise en place d'un serveur DHCP sur une machine local.",
        description:
            "Ce projet consistait à mettre en place et configurer un serveur DHCP sur une machine locale à l’aide de Netkit. L’objectif était de comprendre le fonctionnement de l’attribution automatique d’adresses IP, d’analyser les échanges réseau à l’aide de Wireshark et de manipuler des scripts Bash pour automatiser certaines tâches. Ce travail a permis de renforcer les bases en administration réseau et en compréhension des protocoles. ",
        objectives: [
            "Comprendre le fonctionnement du protocole DHCP",
            "Configurer un serveur réseau en environnement simulé",
            "Analyser le trafic réseau avec Wireshark",
            "Automatiser des tâches via des scripts Bash"
        ],
        technos: ["Netkit", "Wireshark", "Bash"],
        image: "sae_reseau.png",
        faitAvec: ["charlyJanvier"],
    },

    site_vieux: {
        id: "site_vieux",
        title: "Ami d'Âge (Terminé)",
        year: "BUT 1",
        description_card:
            "Creation d'un site de rencontre amicale entre personne agés",
        description:
            "Ami d’Âge est un projet réalisé dans le cadre d’un enseignement de qualité web. L’objectif était de concevoir un site permettant aux personnes âgées de s’organiser pour se rencontrer, se faire des amis et participer à des sorties. Une attention particulière a été portée à la qualité globale du site, tant sur le plan fonctionnel que sur l’organisation du projet.",
        objectives: [
            "Concevoir un site web destiné à un public spécifique",
            "Faciliter les rencontres et les échanges entre personnes âgées",
            "Appliquer les principes de qualité web",
            "Mettre en place une gestion de projet propre et structurée",
            "Travailler en équipe sur un projet web"
        ],
        technos: ["HTML", "CSS", "PHP", "BDD"],
        image: "site_vieux.png",
        faitAvec: ["charlyJanvier", "loicRakotoniary", "yevhenKefa"],
    },

    qix_optimisation: {
        id: "qix_optimisation",
        title: "Qix Optimisation (Terminé)",
        year: "BUT 3",
        description_card:
            "Optimisation du code d'un project de 1er année: Qix.",
        description:
            "Ce projet consiste à reprendre le jeu Qix développé en première année afin d’en améliorer les performances, la lisibilité du code et la structure globale. Le travail a porté sur l’optimisation des algorithmes, la réduction de la complexité inutile, ainsi que sur une meilleure organisation du code pour faciliter sa maintenance et son évolution.",
        objectives: [
            "Optimiser les performances du jeu",
            "Refactoriser le code existant",
            "Améliorer la lisibilité et la maintenabilité",
            "Appliquer de bonnes pratiques de développement"
        ],
        technos: ["Python"],
        image: "qix.png",
        url: "https://replit.com/@heleneraluleroy/Qix",
        faitAvec: ["benjaminRissot"],
    },

    plurielle: {
        id: "plurielle",
        title: "Pluri'elle (En cours)",
        year: "BUT 3",
        description_card:
            "Creation d'un site d'aide à la gestion du recrutement pour l'entreprise Pluri'elle",
        description:
            "L’objectif de ce projet est de concevoir deux applications web pour répondre aux besoins de l’entreprise Pluri’Elles. La première application vise à faciliter la gestion du recrutement en permettant au service des ressources humaines de centraliser et d’analyser les candidatures plus efficacement. La seconde est un module d’e-learning destiné aux employés, leur permettant d’accéder à différentes formations. Ce module intègre également une solution utilisant la réalité virtuelle (VR) afin de proposer des expériences de formation immersives.",
        objectives: [
            "Concevoir une application web full-stack pour la gestion du recrutement",
            "Développer une API backend avec Python et FastAPI",
            "Mettre en place une architecture moderne avec Next.js et React",
            "Gérer les données et les utilisateurs avec PostgreSQL",
            "Déployer et automatiser le projet avec Docker et GitLab CI/CD"
        ],
        technos: ["Next.js", "Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Docker", "GitLab CI/CD",],
        image: "plurielle.png",
        faitAvec: ["damienTremerie", "romainLoncin", "randyBouJaber", "alexisTelle", "julienSynaeve"],
    },

    jenkins: {
        id: "jenkins",
        title: "Jenkins (Terminé)",
        year: "BUT 3",
        description_card:
            "Simulation d’une chaîne CI/CD pour un projet C avec tests automatisés.",
        description:
            "Ce projet a consisté à simuler une chaîne CI/CD en utilisant Jenkins pour un projet C développant l’algorithme du tri à bulle. L’objectif était de mettre en place une chaîne complète de tests automatisés et de déploiement avec Docker, en utilisant GitHub pour la gestion du code. Le projet s’inscrit dans le cadre de la qualité web, avec un accent sur les bonnes pratiques de développement, l’automatisation et la fiabilité des livraisons.",
        objectives: [
            "Mettre en place une chaîne CI/CD complète avec Jenkins",
            "Automatiser les tests d’un projet C",
            "Utiliser Docker pour faciliter le déploiement et la simulation d’environnements",
            "Gérer le code et les versions via GitHub",
            "Appliquer les bonnes pratiques de qualité web et de développement"
        ],
        technos: ["C", "Jenkins", "Docker", "Github", "CI/CD"],
        image: "jenkins.png",
        faitAvec: ["damienTremerie", "romainLoncin", "emilieXu", "jeremyZheng"],
    },
};
