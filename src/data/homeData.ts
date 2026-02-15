import {projects} from "./projectsData";

export const FormationData = [
    {date: "2023-2026", name: "BUT informatique", place: "IUT de Marne la Vallée - Champs-sur-Marne"},
    {date: "2020-2023", name: "Baccalauréat général", place: "Lycée Arago - Paris"},
    {date: "2016-2020", name: "Brevet", place: "Collège Robert Doisneau - Paris"}
];

export const ExperienceData = [
    {date: "2024-2026", name: "Alternance", place: "Caseware France - Paris"},
    {date: "décembre 2019", name: "Stage", place: "CEA - Fontenay-aux-Roses"}
]

export const SkillsData = [
    {
        category: "Frontend",
        skills: [
            { label: "HTML", img: "html.png" },
            { label: "CSS", img: "css.png"},
            { label: "JavaScript", img: "js.png"},
            { label: "TypeScript", img: "typescript.png" },
            { label: "React", img: "react.png" }
        ]
    },
    {
        category: "Backend",
        skills: [
            { label: "PHP", img: "php.png"},
            { label: "Python", img: "python.png"},
            { label: "Java", img: "java.png"},
            { label: "C", img: "c.png"}
        ]
    },
    {
        category: "Bases de données",
        skills: [
            { label: "MySQL", img: "sql.png" },
            { label: "PostgreSQL", img: "postgresql.png" }
        ]
    },
    {
        category: "Outils & design",
        skills: [
            { label: "Figma", img: "figma-logo.svg" }
        ]
    },
]

export const competences = [
    {
        name: "Realiser",
        description: "Partir des exigences et aller jusqu'à une application complète.",
        projects: [projects.qix, projects.wikiadventure]
    },
    {
        name: "Optimiser",
        description: "Sélectionner les algorithmes adéquats pour répondre à un problème donné",
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
        projects: [projects.site_vieux, projects.jenkins, projects.petit_creation]
    },
    {
        name: "Collaborer",
        description: "Situer son rôle et ses missions au sein d'une équipe informatique",
        projects: [projects.unesco, projects.tchoutchou, projects.plurielle]
    }
];