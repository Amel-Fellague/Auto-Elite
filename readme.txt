================================================================================
                        AUTO ELITE — README
              Site de vente de voitures de luxe en ligne
================================================================================


 DESCRIPTION DU SITE :

AutoElite est un site web de vente de véhicules haut de gamme destiné au marché
algérien. Il propose une expérience d'achat en ligne élégante et immersive,
inspirée des standards des grandes concessions automobiles de prestige.

Le site présente une interface sombre et luxueuse (dark luxury theme) mettant en
valeur des véhicules premium de marques telles que Porsche, Ferrari, Lamborghini,
Rolls-Royce, Bentley, McLaren et bien d'autres. L'utilisateur peut parcourir le
catalogue, choisir la couleur de son véhicule, gérer sa commande, et procéder au
paiement de manière fluide et intuitive.


 FONCTIONNALITÉS :

  [1] PAGE D'ACCUEIL (index.html)
      - Présentation de la marque AutoElite avec section hero animée
      - Statistiques (années d'expérience, clients, véhicules vendus)
      - Section services, à propos et contact
      - Navigation dynamique selon l'état de connexion (connecté / non connecté)
      - Compteurs animés au défilement

  [2] CATALOGUE DE VOITURES (produits.html)
      - Affichage de 12 véhicules de luxe avec images, spécifications et prix
      - Filtrage par catégorie : Électrique, Berline, SUV, Sportive
      - Recherche en temps réel par marque ou modèle
      - Bascule de devise : EUR ↔ DZD (taux 1 EUR = 145 DZD)
      - Système de favoris (persisté en localStorage)
      - Sélection de couleur via modal avant ajout au panier
      - Redirection vers connexion si l'utilisateur n'est pas authentifié

  [3] INSCRIPTION (inscription.html)
      - Formulaire en deux colonnes (Prénom / Nom)
      - Validation en temps réel de tous les champs
      - Indicateur de force du mot de passe (4 niveaux)
      - Stockage sécurisé dans localStorage
      - Vérification de doublon d'email

  [4] CONNEXION (connexion.html)
      - Authentification par email et mot de passe
      - Aperçu du mot de passe (toggle)
      - Gestion de session via sessionStorage
      - Redirection automatique après connexion
      - Messages d'erreur contextuels

  [5] COMMANDE / PANIER (panier.html)
      - Liste des véhicules ajoutés avec image, couleur et prix
      - Modification de quantité et suppression d'articles
      - Calcul automatique du sous-total et du total TTC
      - Livraison gratuite incluse
      - Bouton "Vider la commande"
      - Redirection vers la page de paiement

  [6] PAIEMENT (paiement.html)
      - Résumé de la commande récupéré depuis le localStorage
      - Deux modes de paiement : Carte Bancaire / PayPal
      - Aperçu visuel de la carte en temps réel (numéro, titulaire, expiration)
      - Validation complète des champs (format, date d'expiration, CVV)
      - Simulation du traitement du paiement avec animation de chargement

  [7] CONFIRMATION (confirmation.html)
      - Affichage du numéro de commande généré automatiquement
      - Date de commande et délai de livraison estimé
      - Statut de confirmation
      - Liens de retour vers l'accueil et le catalogue


 STRUCTURE DU PROJET :

  AutoElite/
  │
  ├── index.html                    ← Page d'accueil
  │
  ├── content/                      ← Pages secondaires
  │   ├── produits.html             ← Catalogue de voitures
  │   ├── connexion.html            ← Page de connexion
  │   ├── inscription.html          ← Page d'inscription
  │   ├── panier.html               ← Page de commande / panier
  │   ├── paiement.html             ← Page de paiement
  │   └── confirmation.html         ← Page de confirmation
  │
  ├── style/                        ← Feuilles de style
  │   ├── common.css                ← Système de design global (dark luxury)
  │   ├── connexion.css             ← Styles authentification
  │   ├── inscription.css           ← Styles supplémentaires inscription
  │   ├── produits.css              ← Styles catalogue
  │   ├── panier.css                ← Styles panier / commande
  │   └── paiement.css              ← Styles paiement
  │   └── style.css                 ← Styles spécifiques à l'accueil
  |
  ├── javascript/                   ← Scripts par page
  │   ├── connexion.js              ← Logique de connexion
  │   ├── inscription.js            ← Logique d'inscription
  │   ├── produits.js               ← Catalogue, filtres, panier, modal
  │   ├── panier.js                 ← Gestion du panier
  │   |── paiement.js               ← Formulaire de paiement
  │   └── javascript.js             ← Script principal (accueil)
  |
  └── images/                       ← Images locales 

 INSTRUCTIONS D'UTILISATION :

  Prérequis :
  -----------
  Aucune installation requise. Le projet fonctionne entièrement côté client
  (HTML / CSS / JavaScript pur). Il suffit d'un navigateur web moderne.

  Lancement :
  -----------
  1. Télécharger ou cloner le dossier du projet.
  2. Ouvrir le fichier "index.html" directement dans un navigateur
     (double-clic ou glisser-déposer dans le navigateur).
     → Ou utiliser une extension comme "Live Server" (VS Code) pour éviter
       les éventuels problèmes de chargement de modules JavaScript.

  Parcours utilisateur recommandé :
  ----------------------------------
  1. Accueil              → Explorer la présentation du site
  2. Nos Voitures         → Parcourir le catalogue, filtrer, rechercher
  3. Inscription          → Créer un compte (nécessaire pour commander)
  4. Connexion            → Se connecter avec le compte créé
  5. Nos Voitures         → Choisir un véhicule et une couleur → Ajouter
  6. Commande             → Vérifier le panier et passer la commande
  7. Paiement             → Remplir les informations de paiement
  8. Confirmation         → Voir le récapitulatif de commande

  Notes importantes :
  -------------------
  - Les données utilisateurs sont stockées dans le localStorage du navigateur.
    Elles sont propres à chaque navigateur et ne transitent pas par un serveur.
  - Le paiement est entièrement simulé : aucune transaction réelle n'est effectuée.
  - Pour réinitialiser les données (comptes, panier), vider le localStorage
    via les outils de développement du navigateur (F12 → Application → Storage).


 TECHNOLOGIES UTILISÉES :

  Langages :
  ----------
  - HTML5               → Structure sémantique des pages
  - CSS3                → Mise en forme, animations, responsive design
  - JavaScript          → Interactivité, logique métier, gestion des données

  Polices (Google Fonts) :
  ------------------------
  - Cormorant Garamond  → Titres et éléments de prestige
  - DM Sans             → Corps de texte et interface

  Stockage navigateur :
  ---------------------
  - localStorage        → Comptes utilisateurs, panier, favoris
  - sessionStorage      → Session utilisateur active (connexion)

  Outils recommandés :
  --------------------
  - Visual Studio Code  → Éditeur de code
  - Live Server         → Extension VS Code pour serveur local
  - Google Chrome       → Navigateur de test principal

  Images :
  --------
  - Pinterest → Photographies de véhicules 


 MEMBRES DU GROUPE :

    ✦  OUALI Ikram
    ✦  FELLAGUE Amel

    Formation  : Informatique 
    Établissement : UMMTO
    Année académique : 2025 – 2026


  AutoElite est un projet réalisé dans un but pédagogique afin de mettre en
pratique les compétences acquises en développement web front-end, notamment
la conception d'interfaces utilisateur modernes, la structuration d'un projet
multi-pages, la manipulation du DOM en JavaScript, la gestion de données
côté client, ainsi que l'application des principes du design responsive et
de l'expérience utilisateur (UX/UI). Ce projet nous a permis de simuler le
cycle complet d'une application e-commerce réelle, de l'authentification
jusqu'à la confirmation de commande, dans un contexte professionnel et
esthétique soigné.


================================================================================
                        © 2026 AutoElite — Tous droits réservés
================================================================================
