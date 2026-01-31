export type Project = {
    id: string;
    title: string;
    year: string;
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
        faitAvec: ["Damien Tremerie", "Romain Loncin"],
    },

    travia: {
        id: "travia",
        title: "Travia (terminé)",
        year: "BUT 2",
        description_card:
            "Créer un site web proposant des voyages optimisés dans l’univers de Star Wars.",
        description:
            "Ce projet se déroule dans l’univers fascinant de Star Wars et allie C, PHP, Java, HTML, CSS, JS, Graphe et BDD. En utilisant ces différents éléments, nous devions créer un site web proposant aux passagers des voyages entre différentes planètes en utilisant des trajets optimisés pour répondre à certaines attentes pouvant varier (le plus rapide, le moins cher, ne passant pas chez certaines factions …).",
        context: "",
        objectives: [],
        technos: ["C", "PHP", "Java", "HTML", "CSS", "JS", "Graphe", "BDD"],
        image: "travia.png",
        faitAvec: ["Damien Tremerie", "Romain Loncin", "Emilie Xu"],
    },

    tp_reseau: {
        id: "tp_reseau",
        title: "TP de réseau",
        year: "BUT 2",
        description_card:
            "Travaux pratiques en réseau pour développer des compétences solides en administration.",
        description:
            "Au cours de ma formation, j'ai réalisé plusieurs travaux pratiques en réseau informatique qui m'ont permis de développer des compétences solides dans la configuration et l'administration de différents services réseaux. Ces TP incluent la gestion de services DNS, la configuration de serveurs web, l’implémentation de serveurs DHCP, et bien plus. L'objectif était de simuler des environnements réels afin de maîtriser l'administration de réseaux et de services essentiels à une infrastructure IT.",
        context: "",
        objectives: [],
        technos: ["DNS", "DHCP", "Serveur Web"],
        image: "tp_reseau.png",
        faitAvec: ["Damien Tremerie", "Romain Loncin"],
    },

    easyfund: {
        id: "easyfund",
        title: "EasyFunds (terminé)",
        year: "BUT 2",
        description_card:
            "Créer un site de suivi d’activités monétiques pour les entreprises.",
        description:
            "L’objectif de ce projet était de créer un site de suivi d’activités monétiques au quotidien pour les entreprises afin qu'elles puissent suivre leurs dépenses quotidiennes. L’application web devait pouvoir gérer différents types d’utilisateurs : Administrateur, Product Owner et Client; avec chacun leurs spécificités et des attendus divers.",
        context: "",
        objectives: [],
        technos: ["PHP", "MySQL", "HTML", "CSS", "JS"],
        image: "easyfund.png",
        url: "https://damien-Tremeriee.go.yj.fr/easyfunds2/login.php",
        faitAvec: ["Damien Tremerie", "Romain Loncin", "Emilie Xu"],
    },

    petit_creation: {
        id: "petit_creation",
        title: "Les créations de Julie (en pause)",
        year: "Projet Personnel",
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
        description_card:
            "Plateforme moderne pour réserver des billets TGV facilement et en sécurité.",
        description:
            "L’objectif de ce projet était de concevoir et de développer une plateforme moderne, intuitive et sécurisée qui permette aux voyageurs de réserver facilement leurs billets TGV. Le site devait offrir des fonctionnalités pratiques telles que la recherche de trajets, la gestion des réservations et le paiement en ligne.",
        context: "",
        objectives: [],
        technos: ["PHP", "HTML", "CSS", "JS", "BDD"],
        image: "tchou-tchou.png",
        faitAvec: ["Damien Tremerie", "Romain Loncin", "Benjamin Rissot"],
    },
    unesco: {
        id: "unesco",
        title: "Project Alger(UNESCO) (Terminé)",
        year: "BUT 1",
        description_card:
            "Création d'un site culturel sur Alger en partenariat avec l’Unesco.",
        description:
            "Ce projet, développé en collaboration avec l’UNESCO, vise à concevoir un site web dédié à Alger. Cette plateforme en ligne mettra en valeur la richesse et la diversité du patrimoine historique, culturel et urbain de la ville.",
        context: "",
        objectives: [],
        technos: ["PHP", "HTML", "CSS", "JS", "BDD"],
        image: "Site_Alger.png",
        faitAvec: ["Martial Carceles", "Loïc Rakotoniary", "Jules Renaud--Grange", "Daniel Dos Santos", "Khephren Djelidi"],
    },
    primeur_passion: {
        id: "primeur_passion",
        title: "Primeur Passion (Terminé)",
        year: "BUT 1",
        description_card:
            "Creation d'un site de vente fruits et légumes",
        description:
            "L’objectif de ce projet était de concevoir et de développer un site de vente de fruits et légumes pour s'exercer à l'utilisation des bases de données.",
        context: "",
        objectives: [],
        technos: ["PHP", "HTML", "CSS", "BDD"],
        image: "primeur_passion.png",
        faitAvec: ["Charly Janvier"],
    },
    qix: {
        id: "qix",
        title: "Qix (Terminé)",
        year: "BUT 1",
        description_card:
            "Qix est un projet Python où le joueur trace des lignes pour capturer des zones tout en évitant un ennemi mouvant et imprévisible.",
        description:
            "Qix est un projet développé en Python où le joueur doit remplir l’aire de jeu en traçant des lignes verticales et horizontales, tout en évitant le Qix, un ennemi abstrait qui se déplace librement, ainsi que des obstacles comme les sparx le long des bords. L’objectif est de sécuriser un certain pourcentage du terrain pour passer au niveau suivant, combinant stratégie, rapidité et anticipation dans un environnement minimaliste mais stimulant.",
        context: "",
        objectives: [],
        technos: ["Python"],
        image: "qix.png",
        faitAvec: ["Inès Benameur"],
    },
    qix_optimisation: {
        id: "qix_optimisation",
        title: "Qix Optimisation(Terminé)",
        year: "BUT 3",
        description_card:
            "Optimisation du code d'un project de 1er année: Qix.",
        description:
            "Qix est un projet développé en Python où le joueur doit remplir l’aire de jeu en traçant des lignes verticales et horizontales, tout en évitant le Qix, un ennemi abstrait qui se déplace librement, ainsi que des obstacles comme les sparx le long des bords. L’objectif est de sécuriser un certain pourcentage du terrain pour passer au niveau suivant, combinant stratégie, rapidité et anticipation dans un environnement minimaliste mais stimulant.",
        context: "",
        objectives: [],
        technos: ["Python"],
        image: "qix.png",
        faitAvec: ["Benjamin Rissot"],
    },
};
