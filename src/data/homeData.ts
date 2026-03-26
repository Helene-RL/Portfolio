import {projects} from "./projectsData";

export const sections = [
    {
        id: "accueil",
        navLabel: "Accueil",
        title: "Bienvenue sur mon portfolio",
        level: 1,
    },
    {
        id: "presentation",
        navLabel: "Présentation",
        title: "Présentation",
    },
    {
        id: "resume",
        navLabel: "Résumé",
        title: "Résumé",
    },
    {
        id: "hard_skills",
        navLabel: "Hard skills",
        title: "Hard Skills",
    },
    {
        id: "soft_skills",
        navLabel: "Soft skills",
        title: "Soft Skills",
    },
    {
        id: "competences",
        navLabel: "Compétences",
        title: "Compétences",
    },
    {
        id: "contact",
        navLabel: "Contact",
        title: "Contact",
    }
];

export const FormationData = [
    {date: "2023-2026", name: "BUT informatique", place: "IUT de Marne la Vallée - Champs-sur-Marne"},
    {date: "2020-2023", name: "Baccalauréat général", place: "Lycée Arago - Paris"},
    {date: "2016-2020", name: "Brevet", place: "Collège Robert Doisneau - Paris"}
];

export const ExperienceData = [
    {date: "2024-2026", name: "Alternance", place: "Caseware France - Paris"},
    {date: "décembre 2019", name: "Stage", place: "CEA - Fontenay-aux-Roses"}
]

export const SkillsData = {
    hard_skills: [
        {
            category: "Frontend",
            skills: [
                {label: "HTML", img: "html.png"},
                {label: "CSS", img: "css.png"},
                {label: "JavaScript", img: "js.png"},
                {label: "TypeScript", img: "typescript.png"},
                {label: "React", img: "react.png"},
                {label: "Bootstrap", img: "bootstrap.png"},
            ]
        },
        {
            category: "Backend",
            skills: [
                {label: "PHP", img: "php.png"},
                {label: "Python", img: "python.png"},
                {label: "Java", img: "java.png"},
                {label: "C", img: "c.png"},
            ]
        },
        {
            category: "Bases de données",
            skills: [
                {label: "MySQL", img: "mysql.png"},
                {label: "PostgreSQL", img: "postgresql.png"},
                {label: "MongoDB", img: "mongodb.png"}
            ]
        },
        {
            category: "Outils & Workflow",
            skills: [
                {label: "Git", img: "git.png"},
                {label: "Github", img: "github.png"},
                {label: "Postman", img: "postman.png"},
                {label: "VS Code", img: "vscode.png"},
                {label: "JetBrains", img: "jetbrains.png"},
                {label: "Docker", img: "docker.png"},
                {label: "Jenkins", img: "jenkins.png"},
                {label: "Figma", img: "figma.png"}
            ]
        },
    ],
    soft_skills: [
        {
            icon: "🤝",
            title: "Travail en équipe",
            description:
                "Collaboration efficace et communication fluide.",
        },
        {
            icon: "📊",
            title: "Esprit analytique",
            description:
                "Analyse des problématiques pour améliorer l’expérience utilisateur.",
        },
        {
            icon: "⚡",
            title: "Adaptabilité",
            description:
                "Capacité à apprendre rapidement et s’ajuster.",
        },
        {
            icon: "🗂️",
            title: "Organisation",
            description:
                "Gestion des tâches et respect des délais.",
        },

    ]
}

export const competences = [
    {
        name: "Realiser",
        description: "Adapter des applications sur un ensemble de supports",
        projects: [projects.qix, projects.wikiadventure, projects.plurielle]
    },
    {
        name: "Optimiser",
        description: "Analyser et optimiser des applications",
        projects: [projects.codexnaturalis, projects.travia, projects.qix_optimisation]
    },
    {
        name: "Administrer",
        description: "Déployer des services dans une infrastructure réseau",
        projects: [projects.sae_reseau, projects.tp_reseau]
    },
    {
        name: "Gérer",
        description: "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
        projects: [projects.primeur_passion, projects.easyfund]
    },
    {
        name: "Conduire",
        description: "Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs",
        projects: [projects.site_vieux, projects.petit_creation]
    },
    {
        name: "Collaborer",
        description: "Manager une équipe informatique",
        projects: [projects.unesco, projects.tchoutchou, projects.jenkins]
    }
];