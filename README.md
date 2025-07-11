# React + Vite

# 🏠 Kasa – Plateforme de location d'appartements

Ce projet est le résultat d'une mission en tant que **développeur front-end freelance** pour l’entreprise **Kasa**, un acteur majeur de la location d’appartements entre particuliers en France depuis plus de 10 ans.

> Objectif : refondre totalement l’ancienne plateforme en ASP.NET avec une stack moderne **React + Vite**, selon les maquettes Figma fournies, et sans back-end actif.

---

## 🚀 Stack utilisée

- [React](https://reactjs.org/) (fonctionnel, composants modulaires)
- [Vite](https://vitejs.dev/) (bundler ultra-rapide)
- [React Router](https://reactrouter.com/) (gestion des routes dynamiques)
- [SASS / SCSS](https://sass-lang.com/) (modularité des styles)
- Données en **JSON** simulant une API (logements.json)
- Comportements animés via **CSS transition**

---

## 📁 Structure du projet

src/ ├── components/ → Composants réutilisables (Header, Footer, Accordion, Banner) ├── pages/ → Pages du site (Home, About, Logement, NotFound) ├── hooks/ → Hooks personnalisés (ex: useFetchLogement) ├── utils/ → Fonctions utilitaires (ex: gestion des bannières statiques) ├── assets/ → Images, logos, bannières ├── routes/ → Déclaration des routes principales └── layouts/ → Fichiers globaux (App, global.css, etc.)

---

## ▶️ Lancer le projet en local

### 1. **Installation des dépendances**

```bash
npm install
npm run dev

Le site est accessible sur http://localhost:5173



🛠️ Fonctionnalités clés

🔍 Filtres / Navigation
Navigation dynamique avec React Router

Routes dynamiques /logement/:id avec fallback 404

Scroll vers le haut automatique en cas de changement de page

🎨 Composants visuels
Accordion avec animation CSS pour afficher/masquer des informations

Banner contextuelle (image + texte) selon la page

Gallery de photos avec navigation circulaire (retour à la première/dernière image)

📱 Responsive Design
Fidèle aux maquettes Figma

Layouts adaptatifs (desktop, tablette, mobile)

✅ Comportement React
Utilisation de hooks personnalisés (useFetchLogement) pour centraliser les appels de données

Données simulées via /logements.json

Vérification du comportement correct même en cas de données manquantes


✨ Auteur
Développé par frederic Projet réalisé dans le cadre d’une mission fictive pour Kasa – OpenClassrooms / Développeur Front-End React.

💼 Contexte de la mission
> Kasa vous recrute en tant que développeur front-end freelance pour développer sa nouvelle plateforme web. L’ancienne version, développée en ASP.NET, est remplacée par une architecture JavaScript moderne avec une refonte complète en React. Maquettes, prototypes et guidelines ont été fournis pour garantir un design responsive, accessible, et modulaire. En l'absence de back-end actif, les données sont simulées via un fichier JSON.
```
