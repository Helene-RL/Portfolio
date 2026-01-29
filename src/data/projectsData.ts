export type Project = {
    id: string;
    title: string;
    year: string;
    competence: string;
    description_card: string;
    description: string;
    context: string;
    objectives: string[];
    technos: string[];
    image: string;
    url?: string;
    faitAvec?: string[];
};

export const projects: Record<string, Project> = {
    wikiadventure: {
        id: "wikiadventure",
        title: "WikiAdventure (terminé)",
        year: "BUT 2",
        competence: "Realiser",
        description_card:
            "Le jeu repose sur l’idée d’utiliser Wikipedia pour créer une expérience ludique et éducative.",
        description:
            "Le jeu repose sur l’idée d’utiliser l’immensité de Wikipedia pour créer une expérience ludique et éducative. Le concept s’inspire du jeu WikiSpeedia, mais avec des règles et un gameplay enrichis pour offrir une expérience plus compétitive et stratégique. Le but du jeu est de naviguer à travers une sélection d'articles Wikipedia et d'atteindre tous les articles sélectionnés le plus rapidement possible. Le jeu peut se jouer en solitaire ou jusqu'à un nombre illimité de joueurs. Le gagnant est celui qui parvient à visiter tous les articles avant les autres.",
        context: "Projet universitaire réalisé en BUT Informatique.",
        objectives: [
            "Créer un jeu multijoueur",
            "Utiliser une API externe (Wikipedia)",
            "Gérer la compétition entre joueurs",
        ],
        technos: ["React", "TypeScript", "API Wikipedia"],
        image: "wikiadventure.png",
        url: "",
        faitAvec: ["Damien Tremeri", "Romain Loncin"],
    },

    travia: {
        id: "travia",
        title: "Travia (terminé)",
        year: "BUT 2",
        competence: "Optimiser",
        description_card:
            "Créer un site web proposant des voyages optimisés dans l’univers de Star Wars.",
        description:
            "Ce projet se déroule dans l’univers fascinant de Star Wars et allie C, PHP, Java, HTML, CSS, JS, Graphe et BDD. En utilisant ces différents éléments, nous devions créer un site web proposant aux passagers des voyages entre différentes planètes en utilisant des trajets optimisés pour répondre à certaines attentes pouvant varier (le plus rapide, le moins cher, ne passant pas chez certaines factions …).",
        context: "",
        objectives: [],
        technos: ["C", "PHP", "Java", "HTML", "CSS", "JS", "Graphe", "BDD"],
        image: "travia.png",
        url: "http://localhost/Travia/Account/login_form.php",
        faitAvec: ["Damien Tremeri", "Romain Loncin", "Emilie Xu"],
    },

    tp_reseau: {
        id: "tp_reseau",
        title: "TP de réseau",
        year: "BUT 2",
        competence: "Administrer",
        description_card:
            "Travaux pratiques en réseau pour développer des compétences solides en administration.",
        description:
            "Au cours de ma formation, j'ai réalisé plusieurs travaux pratiques en réseau informatique qui m'ont permis de développer des compétences solides dans la configuration et l'administration de différents services réseaux. Ces TP incluent la gestion de services DNS, la configuration de serveurs web, l’implémentation de serveurs DHCP, et bien plus. L'objectif était de simuler des environnements réels afin de maîtriser l'administration de réseaux et de services essentiels à une infrastructure IT.",
        context: "",
        objectives: [],
        technos: ["DNS", "DHCP", "Serveur Web"],
        image: "tp_reseau.png",
        url: "",
        faitAvec: ["Damien Tremeri", "Romain Loncin"],
    },

    easyfund: {
        id: "easyfund",
        title: "EasyFunds (terminé)",
        year: "BUT 2",
        competence: "Gérer",
        description_card:
            "Créer un site de suivi d’activités monétiques pour les entreprises.",
        description:
            "L’objectif de ce projet était de créer un site de suivi d’activités monétiques au quotidien pour les entreprises afin qu'elles puissent suivre leurs dépenses quotidiennes. L’application web devait pouvoir gérer différents types d’utilisateurs : Administrateur, Product Owner et Client; avec chacun leurs spécificités et des attendus divers.",
        context: "",
        objectives: [],
        technos: ["PHP", "MySQL", "HTML", "CSS", "JS"],
        image: "easyfund.png",
        url: "https://damien-tremerie.go.yj.fr/easyfunds2/login.php",
        faitAvec: ["Damien Tremeri", "Romain Loncin", "Emilie Xu"],
    },

    petit_creation: {
        id: "petit_creation",
        title: "Les créations de Julie (en pause)",
        year: "Projet Personnel",
        competence: "Conduire",
        description_card:
            "Site e-commerce pour doudous faits main avec focus sur l’accessibilité.",
        description:
            "Ce projet a vu le jour en collaboration avec un expert en accessibilité, dans le but de créer un site de vente en ligne dédié aux doudous faits main. L'objectif était de concevoir un site simple et attrayant pour présenter et vendre ces créations uniques, tout en assurant une accessibilité optimale pour tous les utilisateurs, y compris ceux ayant des besoins spécifiques en matière d'accessibilité numérique. Le site devait permettre aux clients de découvrir et d’acheter les doudous, tout en offrant une navigation fluide et inclusive.",
        context: "",
        objectives: [],
        technos: ["PHP", "HTML", "CSS", "JS", "BDD"],
        image: "petit_creation.png",
        url: "http://atout-accessibilite.fr/doudous/index.php",
        faitAvec: ["Julie Leroy"],
    },

    tchoutchou: {
        id: "tchoutchou",
        title: "Tchou-Tchou (Terminé)",
        year: "BUT 2",
        competence: "Collaborer",
        description_card:
            "Plateforme moderne pour réserver des billets TGV facilement et en sécurité.",
        description:
            "L’objectif de ce projet était de concevoir et de développer une plateforme moderne, intuitive et sécurisée qui permette aux voyageurs de réserver facilement leurs billets TGV. Le site devait offrir des fonctionnalités pratiques telles que la recherche de trajets, la gestion des réservations et le paiement en ligne.",
        context: "",
        objectives: [],
        technos: ["PHP", "HTML", "CSS", "JS", "BDD"],
        image: "tchou-tchou.png",
        url: "http://localhost/Tchou-Tchou/web/search.php",
        faitAvec: ["Damien Tremeri", "Romain Loncin", "Benjamin Rissot"],
    },
};
