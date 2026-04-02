export type Project = {
    id: string;
    year: string;
    technos: string[];
    image: string;
    url?: string;
    faitAvec: string[];
    github?: string;
};

export const projects: Record<string, Project> = {
    wikiadventure: {
        id: "wikiadventure",
        year: "BUT 2",
        technos: ["React", "TypeScript", "API Wikipedia"],
        image: "wikiadventure.png",
        faitAvec: ["damienTremerie", "romainLoncin"],
        github: "https://github.com/Helene-RL/WikiAdventure"
    },

    travia: {
        id: "travia",
        year: "BUT 2",
        technos: ["C", "PHP", "Java", "HTML", "CSS", "JS", "Graphe", "BDD"],
        image: "travia.png",
        faitAvec: ["damienTremerie", "romainLoncin", "emilieXu"],
        github: "https://github.com/Helene-RL/travia"
    },

    tp_reseau: {
        id: "tp_reseau",
        year: "BUT 2",
        technos: ["Pare-feu", "NAT", "Proxy", "HTTPS", "VPN", "Réseaux"],
        image: "tp_reseau.png",
        faitAvec: ["damienTremerie", "romainLoncin"],
    },

    easyfund: {
        id: "easyfund",
        year: "BUT 2",
        technos: ["PHP", "MySQL", "HTML", "CSS", "JS"],
        image: "easyfund.png",
        url: "https://damien-Tremeriee.go.yj.fr/easyfunds2/login.php",
        faitAvec: ["damienTremerie", "romainLoncin", "emilieXu"],
        github: "https://github.com/RunsFire/EasyFunds",
    },

    petit_creation: {
        id: "petit_creation",
        year: "Projet Personnel",
        technos: ["PHP", "HTML", "CSS", "JS", "BDD"],
        image: "petit_creation.png",
        url: "https://atout-accessibilite.fr/doudous/index.php",
        faitAvec: ["julieLeroy"],
    },

    tchoutchou: {
        id: "tchoutchou",
        year: "BUT 2",
        technos: ["PHP", "HTML", "CSS", "JS", "MongoDB", "NoSQL"],
        image: "tchou-tchou.png",
        faitAvec: ["damienTremerie", "romainLoncin", "benjaminRissot"],
        github: "https://github.com/Tirlen/Tchou-Tchou",
    },

    codexnaturalis: {
        id: "codexnaturalis",
        year: "BUT 1",
        technos: ["Java"],
        image: "codexnaturalis.png",
        faitAvec: ["charlyJanvier"],
    },

    unesco: {
        id: "unesco",
        year: "BUT 1",
        technos: ["PHP", "HTML", "CSS", "JS", "BDD"],
        image: "Site_Alger.png",
        faitAvec: ["martialCarceles", "loicRakotoniary", "julesRenaudGrange", "danielDosSantos", "khephrenDjelidi"],
    },

    primeur_passion: {
        id: "primeur_passion",
        year: "BUT 1",
        technos: ["PHP", "HTML", "CSS", "BDD"],
        image: "primeur_passion.png",
        faitAvec: ["charlyJanvier"],
    },

    qix: {
        id: "qix",
        year: "BUT 1",
        technos: ["Python"],
        image: "qix.png",
        url: "https://replit.com/@heleneraluleroy/Qix",
        faitAvec: ["inesBenameur"],
    },

    sae_reseau: {
        id: "sae_reseau",
        year: "BUT 1",
        technos: ["Netkit", "Wireshark", "Bash"],
        image: "sae_reseau.png",
        faitAvec: ["charlyJanvier"],
    },

    site_vieux: {
        id: "site_vieux",
        year: "BUT 1",
        technos: ["HTML", "CSS", "PHP", "BDD"],
        image: "site_vieux.png",
        faitAvec: ["charlyJanvier", "loicRakotoniary", "yevhenKefa"],
    },

    qix_optimisation: {
        id: "qix_optimisation",
        year: "BUT 3",
        technos: ["Python"],
        image: "qix.png",
        url: "https://replit.com/@heleneraluleroy/Qix",
        faitAvec: ["benjaminRissot"],
        github: "https://github.com/Helene-RL/Qix",
    },

    plurielle: {
        id: "plurielle",
        year: "BUT 3",
        technos: ["Next.js", "Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Docker", "GitLab CI/CD",],
        image: "plurielle.png",
        faitAvec: ["damienTremerie", "romainLoncin", "randyBouJaber", "alexisTelle", "julienSynaeve"],
        github: "https://gitlab.julien-synaeve.fr/",
    },

    jenkins: {
        id: "jenkins",
        year: "BUT 3",
        technos: ["C", "Jenkins", "Docker", "Github", "CI/CD"],
        image: "jenkins.png",
        faitAvec: ["damienTremerie", "romainLoncin", "emilieXu", "jeremyZheng"],
        github: "https://github.com/Helene-RL/Jenkins",
    },
};
