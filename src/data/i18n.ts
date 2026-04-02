export type Language = "fr" | "en";

export const translations = {
    fr: {
        "accueil": {
            title: "Bienvenue sur mon portfolio",
            navLabel: "Accueil",
            buttonCV: "Télécharger mon CV",
            level: 1,
        },
        "presentation": {
            title: "Présentation",
            text: "Apprendre à me connaître !",
            paragraphe1: "Bonjour! Je m'appelle <strong>Hélène Ralu--Leroy</strong> et je suis <strong>étudiante " +
                "en 3<sup>ème</sup> année de BUT informatique </strong> à l'IUT de Marne la Vallée.",
            paragraphe2: "Je suis en alternance chez Caseware France, où je développe mes compétences en " +
                "développement et en travail d'équipe sur des projets concrets.",
            paragraphe3: "Curieuse et ouverte d’esprit, j’aime travailler sur des problématiques variées, coder " +
                "et découvrir de nouvelles technologies. Au cours de mes études, j’ai déjà participé " +
                "à plusieurs projets web réalisés en équipe, ce qui m’a permis de renforcer mes " +
                "compétences techniques et collaboratives.",
            paragraphe4: "N’hésitez pas à parcourir mes projets ou à me contacter pour échanger !"
        },
        "resume": {
            title: "Résumé",
            formation: "Formation",
            experience: "Expérience",
        },
        "hard_skills": {
            title: "Hard Skills",
            category: {
                frontend: "Frontend",
                backend: "Backend",
                database: "Bases de données",
                tools_workflow: "Outils & Workflow"
            }
        },
        "soft_skills": {
            title: "Soft Skills",
            skills: [
                {
                    icon: "🤝",
                    title: "Travail en équipe",
                    description: "Collaboration efficace et communication fluide.",
                },
                {
                    icon: "📊",
                    title: "Esprit analytique",
                    description: "Analyse des problématiques pour améliorer l’expérience utilisateur.",
                },
                {
                    icon: "⚡",
                    title: "Adaptabilité",
                    description: "Capacité à apprendre rapidement et s’ajuster.",
                },
                {
                    icon: "🗂️",
                    title: "Organisation",
                    description: "Gestion des tâches et respect des délais.",
                },
            ]
        },
        "competences": {
            title: "Compétences",
            back: "← Retour au portfolio",
            objectives: "Objectifs",
            madeWith: "Fait avec",
            technologies: "Technologies utilisées",
            descriptions: {
                realiser: {
                    name: "Realiser",
                    description: "Adapter des applications sur un ensemble de supports"
                },
                optimiser: {
                    name: "Optimiser",
                    description: "Analyser et optimiser des applications"
                },
                administrer: {
                    name: "Administrer",
                    description: "Déployer des services dans une infrastructure réseau"
                },
                gerer: {
                    name: "Gérer",
                    description: "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité"
                },
                conduire: {
                    name: "Conduire",
                    description: "Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs"
                },
                collaborer: {
                    name: "Collaborer",
                    description: "Manager une équipe informatique"
                },
            },
            projects: {
                wikiadventure: {
                    title: "WikiAdventure (terminé)",
                    description_card:
                        "Le jeu repose sur l’idée d’utiliser Wikipedia pour créer une expérience ludique et éducative.",
                    description:
                        "Le jeu repose sur l’idée d’utiliser l’immensité de Wikipedia pour créer une expérience ludique et éducative. Le concept s’inspire du jeu WikiSpeedia, mais avec des règles et un gameplay enrichis pour offrir une expérience plus compétitive et stratégique. Le but du jeu est de naviguer à travers une sélection d'articles Wikipedia et d'atteindre tous les articles sélectionnés le plus rapidement possible. Le jeu peut se jouer en solitaire ou jusqu'à un nombre illimité de joueurs. Le gagnant est celui qui parvient à visiter tous les articles avant les autres.",
                    objectives: [
                        "Créer un jeu multijoueur",
                        "Utiliser une API externe (Wikipedia)",
                        "Gérer la compétition entre joueurs",
                    ],
                },

                travia: {
                    title: "Travia (terminé)",
                    description_card:
                        "Créer un site web proposant des voyages optimisés dans l’univers de Star Wars.",
                    description:
                        "Ce projet se déroule dans l’univers fascinant de Star Wars et allie C, PHP, Java, HTML, CSS, JS, Graphe et BDD. En utilisant ces différents éléments, nous devions créer un site web proposant aux passagers des voyages entre différentes planètes en utilisant des trajets optimisés pour répondre à certaines attentes pouvant varier (le plus rapide, le moins cher, ne passant pas chez certaines factions …).",
                    objectives: [
                        "Utiliser et interconnecter plusieurs langages de programmation",
                        "Mettre en œuvre les concepts de graphes pour l’optimisation de trajets",
                        "Développer une application web complète",
                        "Mobiliser des compétences issues de plusieurs matières de l’année",
                        "Travailler en équipe sur un projet de grande ampleur",
                    ],
                },

                tp_reseau: {
                    title: "TP de réseau",
                    description_card:
                        "Travaux pratiques en réseau pour développer des compétences solides en administration.",
                    description:
                        "Ces travaux pratiques ont été réalisés dans le cadre de la formation en BUT Informatique. Ils portaient sur la mise en œuvre et la configuration de différents mécanismes et services réseaux, ainsi que sur l’analyse de la sécurité des infrastructures. Les TP comprenaient notamment la configuration de pare-feu et de la translation d’adresses (NAT), l’analyse d’attaques réseau, la mise en place d’un serveur mandataire (proxy), d’un serveur HTTPS et d’un VPN.",
                    objectives: [
                        "Comprendre et configurer des mécanismes de sécurité réseau",
                        "Mettre en place la translation d’adresses (NAT) et des règles de pare-feu",
                        "Analyser des attaques réseau et leurs impacts",
                        "Configurer des services réseaux sécurisés (HTTPS, VPN, proxy)",
                        "Renforcer les compétences en administration et en diagnostic réseau",
                    ],
                },

                easyfund: {
                    title: "EasyFunds (terminé)",
                    description_card:
                        "Créer un site de suivi d’activités monétiques pour les entreprises.",
                    description:
                        "L’objectif de ce projet était de créer un site de suivi d’activités monétiques au quotidien pour les entreprises afin qu'elles puissent suivre leurs dépenses quotidiennes. L’application web devait pouvoir gérer différents types d’utilisateurs : Administrateur, Product Owner et Client; avec chacun leurs spécificités et des attendus divers.",
                    objectives: [
                        "Appliquer la méthode Scrum dans un projet web",
                        "Travailler avec un client simulé en respectant ses exigences",
                        "Organiser le travail en sprints et livrer des fonctionnalités itératives",
                        "Développer un site web fonctionnel et structuré",
                        "Renforcer les bonnes pratiques de qualité web",
                    ],
                },

                petit_creation: {
                    title: "Les créations de Julie (en pause)",
                    description_card:
                        "Site e-commerce pour doudous faits main avec focus sur l’accessibilité.",
                    description:
                        "Ce projet a vu le jour en collaboration avec un expert en accessibilité, dans le but de créer un site de vente en ligne dédié aux doudous faits main...",
                    objectives: [
                        "Créer un site de vente en ligne pour des créations artisanales",
                        "Appliquer les principes d’accessibilité numérique",
                        "Concevoir une interface simple et inclusive",
                        "Mettre en pratique des compétences web acquises en formation",
                        "Collaborer avec une cliente experte en accessibilité",
                    ],
                },

                tchoutchou: {
                    title: "Tchou-Tchou (Terminé)",
                    description_card:
                        "Plateforme moderne pour réserver des billets TGV facilement et en sécurité.",
                    description:
                        "L’objectif de ce projet était de concevoir et de développer une plateforme moderne, intuitive et sécurisée...",
                    objectives: [
                        "Découvrir et utiliser une base de données NoSQL",
                        "Mettre en œuvre MongoDB dans une application web",
                        "Comprendre les différences entre bases relationnelles et NoSQL",
                        "Développer une application web conforme aux principes de qualité web",
                        "Renforcer les compétences en conception d’architectures web",
                    ],
                },

                codexnaturalis: {
                    title: "Codex Naturalis (Terminé)",
                    description_card:
                        "Developpement d'un jeu de société: le Codex Naturalis",
                    description:
                        "Projet universitaire consistant à développer une adaptation numérique du jeu de cartes Codex Naturalis...",
                    objectives: [
                        "Analyser et comprendre les règles d’un jeu de société existant",
                        "Modéliser les entités du jeu",
                        "Implémenter la logique complète du jeu en Java",
                        "Appliquer les principes de la programmation orientée objet",
                        "Travailler en collaboration sur un projet informatique",
                    ],
                },

                unesco: {
                    title: "Project Alger (UNESCO) (Terminé)",
                    description_card:
                        "Création d'un site culturel sur Alger en partenariat avec l’Unesco.",
                    description:
                        "Ce projet a été réalisé tout au long de l’année dans le cadre d’une SAE...",
                    objectives: [
                        "Développer un premier site web fonctionnel",
                        "Promouvoir la culture et le patrimoine de la ville d’Alger",
                        "Travailler en équipe",
                        "Développer la communication",
                        "Appliquer une méthodologie de travail adaptée",
                    ],
                },

                primeur_passion: {
                    title: "Primeur Passion (Terminé)",
                    description_card:
                        "Création d’un site de vente de fruits et légumes pour s’entraîner aux bases de données.",
                    description:
                        "Ce projet a été réalisé dans le cadre de la formation afin de s’entraîner à l’utilisation des bases de données...",
                    objectives: [
                        "Appliquer les notions théoriques de bases de données",
                        "Concevoir et utiliser une base de données",
                        "Mettre en pratique les concepts étudiés",
                        "Développer un site web connecté à une base de données",
                        "Comprendre le lien entre modélisation et implémentation",
                    ],
                },

                qix: {
                    title: "Qix (Terminé)",
                    description_card:
                        "Qix est un projet Python où le joueur trace des lignes pour capturer des zones.",
                    description:
                        "Qix est un projet développé en Python où le joueur doit remplir l’aire de jeu...",
                    objectives: [
                        "Appliquer les notions de programmation Python",
                        "Utiliser une bibliothèque fournie",
                        "Implémenter la logique d’un jeu",
                        "Gérer les déplacements",
                        "Développer un projet fonctionnel",
                    ],
                },

                sae_reseau: {
                    title: "SAE réseau (Terminé)",
                    description_card:
                        "Mise en place d'un serveur DHCP sur une machine local.",
                    description:
                        "Ce projet consistait à mettre en place et configurer un serveur DHCP...",
                    objectives: [
                        "Comprendre le fonctionnement du protocole DHCP",
                        "Configurer un serveur réseau",
                        "Analyser le trafic réseau",
                        "Automatiser des tâches",
                    ],
                },

                site_vieux: {
                    title: "Ami d'Âge (Terminé)",
                    description_card:
                        "Creation d'un site de rencontre amicale entre personne agés",
                    description:
                        "Ami d’Âge est un projet réalisé dans le cadre d’un enseignement de qualité web...",
                    objectives: [
                        "Concevoir un site web pour un public spécifique",
                        "Faciliter les rencontres",
                        "Appliquer les principes de qualité web",
                        "Mettre en place une gestion de projet",
                        "Travailler en équipe",
                    ],
                },

                qix_optimisation: {
                    title: "Qix Optimisation (Terminé)",
                    description_card:
                        "Optimisation du code d'un project de 1er année: Qix.",
                    description:
                        "Ce projet consiste à reprendre le jeu Qix développé en première année...",
                    objectives: [
                        "Optimiser les performances",
                        "Refactoriser le code",
                        "Améliorer la lisibilité",
                        "Appliquer de bonnes pratiques",
                    ],
                },

                plurielle: {
                    title: "Pluri'elle (En cours)",
                    description_card:
                        "Creation d'un site d'aide à la gestion du recrutement",
                    description:
                        "L’objectif de ce projet est de concevoir deux applications web...",
                    objectives: [
                        "Concevoir une application full-stack",
                        "Développer une API backend",
                        "Mettre en place une architecture moderne",
                        "Gérer les données",
                        "Déployer avec Docker",
                    ],
                },

                jenkins: {
                    title: "Jenkins (Terminé)",
                    description_card:
                        "Simulation d’une chaîne CI/CD pour un projet C.",
                    description:
                        "Ce projet a consisté à simuler une chaîne CI/CD en utilisant Jenkins...",
                    objectives: [
                        "Mettre en place une chaîne CI/CD",
                        "Automatiser les tests",
                        "Utiliser Docker",
                        "Gérer le code avec GitHub",
                        "Appliquer les bonnes pratiques",
                    ],
                },
            }
        },
        "contact": {
            title: "Contact",
            info: "N'hésitez pas à me contacter...",
            nom: "Nom",
            email: "Email",
            placeholder: "Entrer votre",
            bouton: "Envoyer"
        },
    },
    en: {
        "accueil": {
            title: "Welcome to my portfolio",
            navLabel: "Home",
            buttonCV: "Download my CV",
        },
        "presentation": {
            title: "About Me",
            text: "Learn more about me",
            paragraphe1: "Hello! My name is <strong>Hélène Ralu--Leroy</strong> and I am a <strong>third-year Computer " +
                "Science student</strong> at IUT Marne-la-Vallée.",
            paragraphe2: "I am currently doing a work-study program at Caseware France, where I am developing my skills " +
                "in software development and teamwork through real-world projects.",
            paragraphe3: "Curious and open-minded, I enjoy working on a variety of challenges, coding, and exploring " +
                "new technologies. During my studies, I have already taken part in several team-based web projects, " +
                "which helped me strengthen both my technical and collaborative skills.",
            paragraphe4: "Feel free to explore my projects or get in touch with me!"
        },
        "resume": {
            title: "Resume",
            formation: "Education",
            experience: "Experience",
        },
        "hard_skills": {
            title: "Hard Skills",
            category: {
                frontend: "Frontend",
                backend: "Backend",
                database: "Database",
                tools_workflow: "Tools & workflow",
            }
        },
        "soft_skills": {
            title: "Soft Skills",
            skills: [
                {
                    icon: "🤝",
                    title: "Teamwork",
                    description: "Effective collaboration and clear communication.",
                },
                {
                    icon: "📊",
                    title: "Analytical mindset",
                    description: "Analyzing problems to improve user experience.",
                },
                {
                    icon: "⚡",
                    title: "Adaptability",
                    description: "Ability to learn quickly and adjust to new situations.",
                },
                {
                    icon: "🗂️",
                    title: "Organization",
                    description: "Task management and meeting deadlines.",
                },
            ]
        },
        "competences": {
            title: "Competences",
            back: "← Back to portfolio",
            objectives: "Objectives",
            madeWith: "Built with",
            technologies: "Technologies used",
            descriptions: {
                realiser: {
                    name: "Develop",
                    description: "Adapt applications across multiple platforms"
                },
                optimiser: {
                    name: "Optimize",
                    description: "Analyze and optimize applications"
                },
                administrer: {
                    name: "Administer",
                    description: "Deploy services within a network infrastructure"
                },
                gerer: {
                    name: "Manage",
                    description: "Optimize databases, interact with applications, and implement security measures"
                },
                conduire: {
                    name: "Lead",
                    description: "Apply project management methodologies based on client and user needs"
                },
                collaborer: {
                    name: "Collaborate",
                    description: "Manage and work within an IT team"
                },
            },
            projects: {
                wikiadventure: {
                    title: "WikiAdventure (finished)",
                    description_card:
                        "A game based on using Wikipedia to create a fun and educational experience.",
                    description:
                        "The game leverages the vastness of Wikipedia to create a fun and educational experience. It is inspired by WikiSpeedia but introduces enhanced rules and gameplay for a more competitive and strategic experience. The goal is to navigate through a selection of Wikipedia articles and reach all of them as quickly as possible. The game can be played solo or with an unlimited number of players. The winner is the one who visits all the articles first.",
                    objectives: [
                        "Create a multiplayer game",
                        "Use an external API (Wikipedia)",
                        "Manage player competition",
                    ],
                },

                travia: {
                    title: "Travia (finished)",
                    description_card:
                        "A website offering optimized travel routes in the Star Wars universe.",
                    description:
                        "This project takes place in the fascinating Star Wars universe and combines C, PHP, Java, HTML, CSS, JavaScript, graph theory, and databases. Using these technologies, we developed a website that allows users to plan trips between different planets using optimized routes based on various criteria (fastest, cheapest, avoiding certain factions, etc.).",
                    objectives: [
                        "Use and interconnect multiple programming languages",
                        "Apply graph theory for route optimization",
                        "Develop a complete web application",
                        "Leverage skills from multiple subjects",
                        "Work as a team on a large-scale project",
                    ],
                },

                tp_reseau: {
                    title: "Networking labs",
                    description_card:
                        "Hands-on networking labs to build strong administration skills.",
                    description:
                        "These labs were carried out as part of the Computer Science degree. They focused on implementing and configuring various network mechanisms and services, as well as analyzing infrastructure security. Tasks included firewall configuration, NAT setup, network attack analysis, and deploying services such as proxy servers, HTTPS servers, and VPNs.",
                    objectives: [
                        "Understand and configure network security mechanisms",
                        "Set up NAT and firewall rules",
                        "Analyze network attacks and their impact",
                        "Configure secure network services (HTTPS, VPN, proxy)",
                        "Strengthen network administration and troubleshooting skills",
                    ],
                },

                easyfund: {
                    title: "EasyFunds (finished)",
                    description_card:
                        "A web application for tracking financial activities for companies.",
                    description:
                        "The goal of this project was to create a web platform that allows companies to track their daily financial activities. The application supports different user roles such as Administrator, Product Owner, and Client, each with specific permissions and requirements.",
                    objectives: [
                        "Apply Scrum methodology in a web project",
                        "Work with a simulated client and meet requirements",
                        "Organize work into sprints and deliver iteratively",
                        "Develop a functional and well-structured web application",
                        "Follow web quality best practices",
                    ],
                },

                petit_creation: {
                    title: "Julie’s Creations (on hold)",
                    description_card:
                        "An e-commerce website for handmade plush toys with a focus on accessibility.",
                    description:
                        "This project was created in collaboration with an accessibility expert to build an online store dedicated to handmade plush toys. The goal was to design a simple and attractive website while ensuring optimal accessibility for all users, including those with specific needs. The platform allows users to browse and purchase products through an inclusive and smooth user experience.",
                    objectives: [
                        "Create an e-commerce website for handmade products",
                        "Apply web accessibility principles",
                        "Design a simple and inclusive interface",
                        "Put academic web skills into practice",
                        "Collaborate with an accessibility-focused client",
                    ],
                },

                tchoutchou: {
                    title: "Tchou-Tchou (finished)",
                    description_card:
                        "A modern platform to easily and securely book train tickets.",
                    description:
                        "The goal of this project was to design and develop a modern, intuitive, and secure platform that allows users to book train tickets easily. The website includes features such as route search, booking management, and online payment.",
                    objectives: [
                        "Discover and use a NoSQL database",
                        "Implement MongoDB in a web application",
                        "Understand differences between SQL and NoSQL databases",
                        "Develop a web application following quality standards",
                        "Improve web architecture design skills",
                    ],
                },

                codexnaturalis: {
                    title: "Codex Naturalis (finished)",
                    description_card:
                        "Development of a digital version of the Codex Naturalis card game.",
                    description:
                        "This academic project involved developing a digital version of the Codex Naturalis card game. The implementation follows the official rules and provides an interface for multiple players. The focus was on game logic, card management, scoring, and clean code structure.",
                    objectives: [
                        "Analyze and understand an existing board game",
                        "Model game entities (cards, players, board, score)",
                        "Implement full game logic in Java",
                        "Apply object-oriented programming principles",
                        "Collaborate on a software project",
                    ],
                },

                unesco: {
                    title: "Project Algiers (UNESCO) (finished)",
                    description_card:
                        "Creation of a cultural website about Algiers in partnership with UNESCO.",
                    description:
                        "This project was carried out over a full academic year as part of a course project and represents the first website developed during the program. It aims to promote the culture of Algiers by showcasing its historical, cultural, and urban heritage.",
                    objectives: [
                        "Develop a first functional website",
                        "Promote the culture and heritage of Algiers",
                        "Work as a team on a long-term project",
                        "Improve team communication",
                        "Apply a structured project methodology",
                    ],
                },

                primeur_passion: {
                    title: "Primeur Passion (finished)",
                    description_card:
                        "A website for selling fruits and vegetables to practice database concepts.",
                    description:
                        "This project was developed as part of database training. It started with a theoretical phase involving database design, followed by practical implementation through a web application.",
                    objectives: [
                        "Apply theoretical database concepts",
                        "Design and use a database",
                        "Put academic knowledge into practice",
                        "Develop a database-connected website",
                        "Understand the link between modeling and implementation",
                    ],
                },

                qix: {
                    title: "Qix (finished)",
                    description_card:
                        "A Python game where players capture areas while avoiding enemies.",
                    description:
                        "Qix is a Python project where the player must capture areas by drawing lines while avoiding a moving enemy and obstacles. The objective is to secure a percentage of the map to progress to the next level.",
                    objectives: [
                        "Apply Python programming concepts",
                        "Use a provided library",
                        "Implement game logic",
                        "Handle movement and interactions",
                        "Develop a functional project",
                    ],
                },

                sae_reseau: {
                    title: "Networking project (finished)",
                    description_card:
                        "Setting up a DHCP server on a local machine.",
                    description:
                        "This project involved setting up and configuring a DHCP server using Netkit. The goal was to understand automatic IP assignment, analyze network traffic using Wireshark, and automate tasks with Bash scripts.",
                    objectives: [
                        "Understand the DHCP protocol",
                        "Configure a network server",
                        "Analyze network traffic",
                        "Automate tasks using Bash",
                    ],
                },

                site_vieux: {
                    title: "Ami d'Âge (finished)",
                    description_card:
                        "A social website for elderly people to meet and connect.",
                    description:
                        "Ami d’Âge is a project focused on web quality. It aims to help elderly people connect, make friends, and organize activities. Special attention was given to usability and project organization.",
                    objectives: [
                        "Design a website for a specific audience",
                        "Facilitate social interactions",
                        "Apply web quality principles",
                        "Implement structured project management",
                        "Work as a team",
                    ],
                },

                qix_optimisation: {
                    title: "Qix Optimization (finished)",
                    description_card:
                        "Optimization of a first-year Qix project.",
                    description:
                        "This project revisits the Qix game developed in the first year to improve performance, readability, and overall structure. It focuses on algorithm optimization and code refactoring.",
                    objectives: [
                        "Optimize performance",
                        "Refactor existing code",
                        "Improve readability and maintainability",
                        "Apply best development practices",
                    ],
                },

                plurielle: {
                    title: "Pluri'elle (ongoing)",
                    description_card:
                        "Development of a recruitment management and e-learning platform.",
                    description:
                        "The goal of this project is to develop two web applications for the company Pluri’Elles. The first focuses on recruitment management, while the second is an e-learning platform including virtual reality training experiences.",
                    objectives: [
                        "Design a full-stack web application",
                        "Develop a backend API with FastAPI",
                        "Build a modern frontend with Next.js and React",
                        "Manage data with PostgreSQL",
                        "Deploy using Docker and CI/CD pipelines",
                    ],
                },

                jenkins: {
                    title: "Jenkins (finished)",
                    description_card:
                        "Simulation of a CI/CD pipeline for a C project.",
                    description:
                        "This project involved simulating a CI/CD pipeline using Jenkins for a C project implementing a bubble sort algorithm. It includes automated testing and deployment using Docker and GitHub.",
                    objectives: [
                        "Set up a full CI/CD pipeline",
                        "Automate testing",
                        "Use Docker for deployment",
                        "Manage code with GitHub",
                        "Apply development best practices",
                    ],
                },
            },
        },
        "contact": {
            title: "Contact",
            info: "Feel free to contact me...",
            nom: "Name",
            email: "E-mail",
            placeholder: "Enter your",
            bouton: "Submit"
        },
    },
};