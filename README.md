# Formation Développeur Web
## Projet 5 - Kanap 
------------
### 📝 Description du projet
Ce projet est le n°5 du parcours [Développeur Web](https://openclassrooms.com/fr/paths/556-developpeur-web "Développeur  Web") qui consiste à Construire un site e-commerce en Javascript
### 🎬 Contexte
Employé dans une agence de développement web, on nous confie une mission pour notre nouveau client « KANAP » , 
Une marque de canapés qui vend ses produits depuis sa boutique exclusivement. Aujourd’hui, celle-ci souhaiterait avoir une plateforme de e-commerce en plus de sa boutique physique pour vendre ses produits sur Internet.
<p align="center">
<img alt="Logo kanap" width="200px" src="https://raw.githubusercontent.com/BenBxn/OpenClassRooms_Projet_5/main/logoreadme.png" />
</p>
Pour cette mission l’équipe ce compose de :
<p align="center">

- Corinne, le CTO de l’agence.

- Frank, le développeur front-end qui s’est chargé d’intégrer la maquette statique du site.

- Bilal, le développeur back-end qui implémente l’API à laquelle est connecté le front-end.
</p>

### 🧭 Briefing
Suite aux deux mails de Corinne et Frank, le briefing de la mission est : 
- D'unifier les travaux déjà réalisés par l’équipe en intégrant dynamiquement les éléments de l’API dans les différentes pages web avec JavaScript. 
- De cloner le code du front-end et de l’API qui est disponible sur ce <a href="https://github.com/OpenClassrooms-Student-Center/P5-Dev-Web-Kanap">repo</a>.
- De mettre en place un plan de test d’acceptation à partir de ce <a href="https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P5/DW+P5+-+Modele+plan+tests+acceptation.xlsx">template</a>.
- De respecter les <a href="https://course.oc-static.com/projects/DWJ_FR_P5/DW+P5+-+Specifications+fonctionnelles.pdf">spécifications techniques et fonctionnelles</a> du projet.
- De prendre connaissance des 4 pages qui ont été mises en place : page d’Accueil, page Produit, page Panier et page Confirmation.
- D'intégrer les contenus dynamiquement grâce à JS et l’API.
- L'utilisation de tout framework ou librairie JavaScript (React, Angular, Vue ou jQuery, par exemple) est interdite pour ce projet.

### 📘 Cahier des charges
#### Spécifications techniques & fonctionnelles 🧬🌐
● La page d’Accueil
- Présenter l’ensemble des produits retournés par l’API sur la page d’accueil.
- Afficher l’image, le nom et le début de la description de chaque produit.
- Rediriger l’utilisateur sur la page du produit pour consulter celui-ci plus en détail en cliquant sur le produit.

● La page Produit
- Présenter un seul produit.
- Un menu déroulant permettant à l’utilisateur de choisir une option de personnalisation.
- Un input permettant à l’utilisateur de saisir la quantité. 
- Ces éléments doivent être pris en compte dans le panier.

● La page Panier
- Donner à l’utilisateur la possibilité de modifier la quantité d’un produit de son panier ; à ce moment, le total du panier devra bien se mettre à jour.
- Donner à l’utilisateur la possibilité de supprimer un produit de son panier, le produit devra donc disparaître de la page.
- Les inputs des utilisateurs doivent être analysés et validés pour vérifier le format et le type de données avant l’envoi à l’API.  En cas de problème de saisie, un message d’erreur devra être affiché en dessous du champ correspondant.
- Ne pas stocker le prix des articles en local.

● La page Confirmation
- Afficher le numéro de commande de l’utilisateur.
- Ce numéro ne doit pas être stocké.

● Le code source
- Il doit être indenté et utiliser des commentaires en début de chaque fonction pour décrire son rôle. 
- Doit être découpé en plusieurs fonctions réutilisables (nommées). 
- Une fonction doit être courte et répondre à un besoin précis.

● API
- Des promesses devront être utilisées pour éviter les callbacks. Il est possible d’utiliser des solutions alternatives comme fetch, celle-ci englobant la promesse.
- L’API n’est actuellement que dans sa première version. La requête post qu’il faudra formuler pour passer une commande ne prend pas encore en considération la quantité ni la couleur des produits achetés.

● Fonctionnement du panier
- Les produits doivent toujours apparaître de manière regroupée par modèle et par couleur.
- Si un produit est ajouté dans le panier à plusieurs reprises avec la même couleur, celui-ci ne doit apparaître qu’une seule fois mais avec le nombre d’exemplaires ajusté.
- Si un produit est ajouté dans le panier à plusieurs reprises, mais avec des couleurs différentes, il doit apparaître en deux lignes distinctes avec la couleur et la quantité correspondantes indiquées à chaque fois.

### 🎓 Compétences acquises et/ou Mises à jour
- Programmer avec Javascript
- Déboguer l'interface du site internet
- Creer des pages dynamiques avec Javascript
- Interagir avec un web service avec JavaScript
- Valider des données issues de sources externes
- Créer un plan de test pour une application
- Gérer des événements JavaScript

### 🔍 Informations complémentaires
- Installation du Back end 🔗

Clonez le dépôt. Depuis le dossier "back" du projet, exécutez `npm install`.  
Vous pouvez alors exécuter le serveur avec `node server`.  
Le serveur doit fonctionner sur `localhost` avec le port par défaut `3000`.  
Si la serveur s'exécute sur un autre port pour une raison quelconque, ceci est imprimé sur le console au démarrage du serveur, par ex. `Écoute sur le port 3001`.  
Et pour accéder au site il suffit d'ouvrir le fichier 'index' dans le dossier 'front/html'.
- Soutenance validée le 12/09/2022. ✅


