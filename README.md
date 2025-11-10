# Strapi-recettes

API de gestion de **recettes de cuisine** développée avec [Strapi](https://strapi.io/).  
Ce projet est réalisé dans le cadre de la formation **Simplon – Concepteur Développeur d’Applications (CDA)**.  
L’objectif est de créer une **API RESTful** permettant des opérations CRUD sur des recettes, avec authentification JWT.

---

## Description du projet

L’API a pour but de stocker, afficher et gérer des recettes de cuisine.  
Chaque recette contient plusieurs informations clés :  
- **Titre** (string)  
- **Temps de préparation** (integer)  
- **Difficulté (niveau 1 à 5)** (integer)  
- **Budget (niveau 1 à 3)** (integer)  
- **Description (texte libre)** (text)  

Une table **utilisateurs** gère l’authentification et la sécurité de l’API via JWT.

---

## Stack technique

- **CMS** [Strapi v5.30.1](https://strapi.io/) 
- **Langage** Node.js (v22 LTS recommandé) 
- **Base de données**  SQLite (par défaut) 
- **Authentification**  JWT 
- **Documentation API**  Swagger 
- **Outils de test** REST Client (VS Code) 
- **Bonus**  GraphQL, Puppeteer (scraping) 

---

## Installation et lancement

### 1. Cloner le projet
```bash
git clone git@github.com:2025-10-CDA-ECO-P6/Mona-Strapi-Recettes.git
cd mona-strapi-recettes
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer le projet en mode développement
```bash
npm run develop
```

### Autres commandes utiles
1. Lance Strapi en mode production  
```bash
npm run start
```
2. Compile l’application Strapi pour le déploiement  
```bash
npm run build
```