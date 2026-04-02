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

export const SkillsData = {
    hard_skills: [
        {
            category: "frontend",
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
            category: "backend",
            skills: [
                {label: "PHP", img: "php.png"},
                {label: "Python", img: "python.png"},
                {label: "Java", img: "java.png"},
                {label: "C", img: "c.png"},
            ]
        },
        {
            category: "database",
            skills: [
                {label: "MySQL", img: "mysql.png"},
                {label: "PostgreSQL", img: "postgresql.png"},
                {label: "MongoDB", img: "mongodb.png"}
            ]
        },
        {
            category: "tools_workflow",
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
}

export const competences = {
    realiser: [projects.qix, projects.wikiadventure, projects.plurielle],
    optimiser: [projects.codexnaturalis, projects.travia, projects.qix_optimisation],
    administrer: [projects.sae_reseau, projects.tp_reseau],
    gerer: [projects.primeur_passion, projects.easyfund],
    conduire: [projects.site_vieux, projects.petit_creation],
    collaborer: [projects.unesco, projects.tchoutchou, projects.jenkins],
};