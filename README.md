# Portfolio de Helene RL

Bienvenue sur mon portfolio interactif réalisé en **React** et **Vite**, hébergé sur **GitHub Pages**.

🔗 Site en ligne : [https://helene-rl.github.io/Portfolio/](https://helene-rl.github.io/Portfolio/)

---

## Description

Ce portfolio présente mes projets réalisés en informatique et mes compétences.  
Il inclut :

- Pages de projets détaillées avec description, technologies et collaborateurs
- Navigation fluide avec **React Router** et ancres
- Composants réutilisables pour les compétences et projets
- Déploiement automatique sur GitHub Pages via GitHub Actions

---

# Structure du projet

portfolio_js/
│
├─ public/ # Fichiers statiques (images, favicon)
├─ src/
│ ├─ components/ # Composants React (Skill, NavItem, Menu, etc.)
│ ├─ pages/ # Pages (Portfolio, Projet)
│ ├─ assets/ # Images utilisées dans le projet
│ └─ main.tsx # Point d'entrée React
├─ .github/workflows/ # Workflow GitHub Actions pour déploiement automatique
├─ package.json
├─ vite.config.ts
└─ README.md


---

## Installation & développement local

1. Cloner le dépôt :

```bash
git clone https://github.com/Helene-RL/Portfolio.git
cd Portfolio
```
### Installer les dépendances :
```bash
npm install
```
### Lancer le serveur de développement :
```bash
npm run dev
```

Le site sera disponible sur http://localhost:5173/

### Build & Déploiement
Build local
```bash
npm run build
```
Le site est compilé dans le dossier dist/

### Déploiement automatique

Le déploiement sur GitHub Pages est automatisé via GitHub Actions à chaque push sur la branche main.

La branche gh-pages contient le site compilé

L’URL publique : https://helene-rl.github.io/Portfolio/

## Technologies utilisées

* React 19
* TypeScript
* Vite
* React Router DOM
* GitHub Pages
* Bootstrap 5
* GitHub Actions pour le déploiement automatique

## Licence

MIT © Helene RL