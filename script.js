const questionData = {
  facile: [
    {
      question: "Quel langage permet de structurer le contenu d'une page web ?",
      options: ["CSS", "HTML", "JavaScript", "Python"],
      answer: 1
    },
    {
      question: "quel est le rôle principal du CSS ?",
      options: ["Ajouter les images", "Créer des bases des données", "Créer des vidéos", "Donner du style aux pages"],
      answer: 3
    },
    {
      question: "Que signifie HTTP ?",
      options: ["HyperText Transfer Protocol", "High Tech Transfer Program", "Home Tool Transfer Process", "Hyperlink Text Transfer Protocol"],
      answer: 0
    },
    {
      question: "Quel tag HTML permet d'insérer une image ?",
      options: ["<img>", "<image>", "<src>", "<pic>"],
      answer: 0
    },
    {
      question: "Quel est le langage qui permet d'ajouter de l'interactivité à une page web ?",
      options: ["HTML", "CSS", "JavaScript", "PHP"],
      answer: 2
    },
    {
      question: "Qu'est-ce qu'un navigateur web ?",
      options: ["Un langage de programmation", "Un logiciel pour lire des vidéos", "Un outil pour accéder à des pages web", "Un moteur de recherche"],
      answer: 2
    },
    {
      question: "C'est quoi le web ?",
      options: ["Un programme informatique", "Un réseau des documents consultables sur Internet", "Un moteur de recherche", "Un langage de programmation"],
      answer: 1
    },
    {
      question: "Quel est le format d'image le plus utilisé sur le web ?",
      options: ["JPG", "BMP", "TIFF", "PSD"],
      answer: 0
    },
    {
      question: "Quel éditeur n'est PAS adapté au développement web ?",
      options: ["VS Code", "Sublime Text", "Notepad++", "Microsoft Word"],
      answer: 3
    },
    {
      question: "Lequel de ces navigateurs n'existe pas ?",
      options: ["Chrome", "Firefox", "Safari", "Firetruck"],
      answer: 3
    },
    {
      question: "Qu'est-ce qu'un langage de programmation ?",
      options: ["Un langage parlé sur internet", "Un logiciel de dessin", "Un moyen de donner des instructions à un ordinateur", "Un outil pour se connecter à Internet"],
      answer: 2
    },
    {
      question: "Une page web est : ",
      options: ["Un serveur web", "Un fichier HTML qu'on peut afficher dans un navigateur", "Un logiciel de programmation", "un moteur de recherche"],
      answer: 1
    },
    {
      question: "Quel langage est principalement utilisé côté serveur ?",
      options: ["JavaScript", "PHP", "HTML", "CSS"],
      answer: 1
    },
    {
      question: "Que signifie 'responsive design' ?",
      options: ["Un design qui répond aux e-mails", "Un design adapté à tous les écrans", "Un design rapide", "Un design interactif"],
      answer: 1
    },
    {
      question: "Quelle est la balise pour les titres principaux ?",
      options: ["<p>", "<title>", "<h1>", "<main>"],
      answer: 2
    },
    {
      question: "Quel symbole identifie une classe en CSS ?",
      options: ["#", ".", "-", "_"],
      answer: 1
    },
    {
      question: "Quel est le rôle d'un serveur web ?",
      options: ["Stocker et envoyer des pages aux clients", "Dessiner une page web", "Créer un virus", "Faire des recherches en ligne"],
      answer: 0
    },
    {
      question: "Quel est le port par défaut pour le protocole HTTPS ?",
      options: ["80", "21", "443", "8080"],
      answer: 2
    },
    {
      question: "Pour tester un site en local, on utilise souvent :",
      options: ["FTP", "Serveur local", "VPN", "Cloud"],
      answer: 1
    },
    {
      question: "Quel attribut permet de donner un texte alternatif à une image ?",
      options: ["alt", "src", "title", "desc"],
      answer: 0
    },
    {
      question: "Quel est l'extension d'un fichier de feuille de style ?",
      options: [".html", ".js", ".css", ".php"],
      answer: 2
    },
    {
      question: "Quel navigateur est développé par Google ?",
      options: ["Safari", "Edge", "Chrome", "Firefox"],
      answer: 2
    },
    {
      question: "Quel langage n'est pas utilisé pour la création de sites web ?",
      options: ["Python", "JavaScript", "HTML", "CSS"],
      answer: 0
    },
    {
      question: "Que veut dire le tag <br> en HTML ?",
      options: ["Balise de titre", "Saut de ligne", "Lien", "Tableau"],
      answer: 1
    },
    {
      question: "Quel est le caractère utilisé pour les IDs en CSS ?",
      options: ["#", ".", "@", "$"],
      answer: 0
    },
    {
      question: "Où place-t-on généralement les scripts JS dans une page HTML ?",
      options: ["Dans la balise <head>", "Au début du fichier CSS", "Avant </body>", "Entre les balises <html>"],
      answer: 2
    },
    {
      question: "Laquelle de ces extensions est un fichier JavaScript ?",
      options: [".js", ".css", ".html", ".php"],
      answer: 0
    },
    {
      question: "Quel type de fichier permet d'afficher une vidéo sur le web ?",
      options: [".mp3", ".mp4", ".jpg", ".pdf"],
      answer: 1
    },
    {
      question: "Comment appelle-t-on le langage des feuilles de style ?",
      options: ["HTML", "PHP", "SQL", "CSS"],
      answer: 3
    },
    {
      question: "Quel est le rôle de la balise <form> ?",
      options: ["Créer un tableau", "Créer une image", "Créer une liste", "Créer un formulaire"],
      answer: 3
    },
    {
      question: "Qui est le client dans le web ?",
      options: ["Le serveur", "Utilisateur ou son navigateur", "L'administrateur système", "La base de données"],
      answer: 1
    },
    {
      question: "Quel format d'image supporte la transparence ?",
      options: ["JPG", "PNG", "BMP", "TIFF"],
      answer: 1
    },
    {
      question: "Quel attribut HTML permet de donner un identifiant unique ?",
      options: ["class", "id", "name", "style"],
      answer: 1
    },
    {
      question: "Que signifie le tag <ul> ?",
      options: ["Liste non ordonnée", "Souligner", "Lien", "Titre"],
      answer: 0
    },
    {
      question: "Quel langage permet d'interroger une base de données ?",
      options: ["HTML", "PHP", "JS", "SQL"],
      answer: 3
    },
    {
      question: "Que veut dire CDN ?",
      options: ["Content Delivery Network", "Central Data Node", "Creative Digital Network", "Computer Data Network"],
      answer: 0
    },
    {
      question: "Comment sélectionne-t-on tous les éléments <p> en CSS ?",
      options: [".p", "#p", "p", "*p"],
      answer: 2
    },
    {
      question: "Quel attribut permet de relier un fichier CSS à un fichier HTML ?",
      options: ["href", "src", "link", "rel"],
      answer: 0
    },
    {
      question: "Quel logiciel permet de transférer des fichiers vers un hébergement web ?",
      options: ["FTP", "Word", "Excel", "Paint"],
      answer: 0
    },
    {
      question: "Quel langage est interprété par le navigateur ?",
      options: ["PHP", "JavaScript", "Python", "Ruby"],
      answer: 1
    },
    {
      question: "Quel format est utilisé pour les icônes sur le web ?",
      options: ["ICO", "DOC", "XLS", "TXT"],
      answer: 0
    },
    {
      question: "Comment appelle-t-on la structure d'un site web ?",
      options: ["Photosynthèse", "Sécurité", "Compression", "Arborescence"],
      answer: 3
    },
    {
      question: "Que signifie le tag <ol> ?",
      options: ["Onglet", "Lien", "Liste ordonnée", "Option"],
      answer: 2
    },
    {
      question: "Quel format n'est pas adapté à une image web ?",
      options: ["JPG", "PNG", "RAW", "GIF"],
      answer: 2
    },
    {
      question: "Quel attribut rend un champ obligatoire dans un formulaire ?",
      options: ["mandatory", "required", "obligatoire", "needed"],
      answer: 1
    },
    {
      question: "Quel outil permet de versionner le code source ?",
      options: ["Git", "FTP", "Paint", "Chrome"],
      answer: 0
    },
    {
      question: "Quel est le langage natif du web ?",
      options: ["Python", "HTML", "C++", "Ruby"],
      answer: 1
    },
    {
      question: "Quelle extension est celle d'un fichier PHP ?",
      options: [".html", ".css", ".js", ".php"],
      answer: 3
    },
    {
      question: "Quelle balise permet de mettre du texte en gras ?",
      options: ["<i>", "<em>", "<u>", "<b>"],
      answer: 3
    },
    {
      question: "Quel outil permet d'inspecter le code d'une page web ?",
      options: ["Inspecteur d'éléments", "Word", "Excel", "Paint"],
      answer: 0
    },
    {
      question: "Quel est le rôle du DNS ?",
      options: ["Créer des images", "Gérer le style", "Donner des noms de domaine", "Compiler le code"],
      answer: 2
    },
    {
      question: "Quel est le rôle du favicon ?",
      options: ["Petite icône du site", "Image de fond", "Bouton principal", "Police d'écriture"],
      answer: 0
    },
    {
      question: "Quelle est la page d'accueil d'un site par défaut ?",
      options: ["home.html", "index.html", "main.html", "accueil.html"],
      answer: 1
    }
  ],
  moyen: [
    {
      question: "Quel attribut HTML permet d'inclure un script externe JavaScript ?",
      options: ["src", "href", "link", "type"],
      answer: 0
    },
    {
      question: "Quel est le rôle du localStorage en JavaScript ?",
      options: ["Stocker des données côté serveur", "Stocker des données côté client de façon persistante", "Stocker des images", "Créer des sessions PHP"],
      answer: 1
    },
    {
      question: "À quoi sert la balise <meta charset='UTF-8'> ?",
      options: ["Définir le titre de la page", "Définir l'encodage des caractères", "Définir la langue de la page", "Définir le style de la page"],
      answer: 1
    },
    {
      question: "Quel est le rôle du fichier robots.txt ?",
      options: ["Empêcher l'accès de certains robots aux pages", "Créer des robots virtuels", "Améliorer le design du site", "Stocker des données"],
      answer: 0
    },
    {
      question: "Que signifie API ?",
      options: ["Advanced Programming Internet", "App Project Interface", "Application Programming Interface", "Application Public Interface"],
      answer: 2
    },
    {
      question: "Quel est le rôle du protocole FTP ?",
      options: ["Protéger le site", "Gérer la base de données", "Créer des formulaires", "Transférer des fichiers"],
      answer: 3
    },
    {
      question: "Quel est le bon sélecteur CSS pour cibler tous les <div> d'une page ?",
      options: [".div", "#div", "*div", "div"],
      answer: 3
    },
    {
      question: "Quelle propriété CSS permet de changer la taille du texte ?",
      options: ["text-size", "font-size", "size-text", "text-font"],
      answer: 1
    },
    {
      question: "Quelle règle CSS permet d'importer une police externe ?",
      options: ["@import", "@font-face", "@font", "@type"],
      answer: 1
    },
    {
      question: "Quel est le rôle de l'attribut 'alt' dans la balise <img> ?",
      options: ["Définir l'image", "Définir un texte alternatif", "Changer la taille", "Changer la couleur"],
      answer: 1
    },
    {
      question: "Que fait la méthode addEventListener() en JS ?",
      options: ["Ajoute un événement à un élément", "Ajoute une classe CSS", "Crée un nouveau bouton", "Ajoute une image"],
      answer: 0
    },
    {
      question: "Quel est l'avantage principal d'un CDN ?",
      options: ["Augmenter la sécurité", "Créer des formulaires", "Accélérer le chargement des ressources", "Développer en local"],
      answer: 2
    },
    {
      question: "Que signifie SEO ?",
      options: ["Simple Engine Option", "Secure Entry Online", "Search Engine Optimization", "Service Engine Option"],
      answer: 2
    },
    {
      question: "Pour envoyer un formulaire sans recharger la page, on utilise :",
      options: ["PHP", "JavaScript (AJAX)", "HTML", "CSS"],
      answer: 1
    },
    {
      question: "Quelle commande Git permet de cloner un dépôt ?",
      options: ["git pull", "git copy", "git push", "git clone"],
      answer: 3
    },
    {
      question: "Que signifie CRUD ?",
      options: ["Create, Remove, Undo, Download", "Copy, Run, Update, Delete", "Change, Read, Upload, Delete", "Create, Read, Update, Delete"],
      answer: 3
    },
    {
      question: "Quel framework JS est le plus utilisé pour construire des interfaces web ?",
      options: ["Laravel", "Django", "React", "Ruby on Rails"],
      answer: 2
    },
    {
      question: "Quel attribut HTML permet de forcer la saisie d'une adresse e-mail ?",
      options: ["type='text'", "type='email'", "type='mail'", "type='adresse'"],
      answer: 1
    },
    {
      question: "Que fait la propriété CSS 'display: flex;' ?",
      options: ["Cache un élément", "Rend un conteneur flexible", "Change la couleur", "Met en italique"],
      answer: 1
    },
    {
      question: "Quel est le rôle du 'favicon.ico' ?",
      options: ["Afficher une icône dans l'onglet", "Changer la couleur du site", "Créer une base de données", "Ajouter un bouton"],
      answer: 0
    },
    {
      question: "Quel langage est utilisé pour interroger une base de données SQL ?",
      options: ["HTML", "CSS", "JavaScript", "SQL"],
      answer: 3
    },
    {
      question: "Quelle balise HTML permet d'insérer une vidéo ?",
      options: ["<vid>", "<video>", "<movie>", "<media>"],
      answer: 1
    },
    {
      question: "Quel est le rôle de la balise <header> ?",
      options: ["Définir l'en-tête d'une page", "Créer un menu", "Afficher une image", "Créer un tableau"],
      answer: 0
    },
    {
      question: "Quelle méthode JS permet de sélectionner un élément par son ID ?",
      options: ["getElementByClass", "getElementById", "querySelectorAll", "getById"],
      answer: 1
    },
    {
      question: "Que veut dire JSON ?",
      options: ["JavaScript Object Notation", "Java Source Object Notation", "JavaScript Option Node", "JavaScript Oriented Notation"],
      answer: 0
    },
    {
      question: "Que fait le sélecteur CSS '*' ?",
      options: ["Sélectionne tous les éléments", "Sélectionne les titres", "Sélectionne les images", "Sélectionne les liens"],
      answer: 0
    },
    {
      question: "Quel est le rôle principal de HTTPS ?",
      options: ["Accélérer le site", "Créer des images", "Chiffrer les échanges", "Afficher des vidéos"],
      answer: 2
    },
    {
      question: "Quel attribut HTML permet de définir un champ obligatoire ?",
      options: ["mandatory", "important", "required", "obligatoire"],
      answer: 2
    },
    {
      question: "Quel est le rôle du 'viewport' dans le <head> ?",
      options: ["Changer la couleur", "Ajouter une vidéo", "Créer une image", "Adapter la page aux écrans"],
      answer: 3
    },
    {
      question: "Quelle méthode JS permet de parcourir un tableau ?",
      options: ["forEach", "select", "browse", "walk"],
      answer: 0
    },
    {
      question: "Quel est l'équivalent du 'div' en sémantique HTML5 pour le contenu principal ?",
      options: ["<section>", "<body>", "<main>", "<header>"],
      answer: 2
    },
    {
      question: "Quel attribut HTML permet de fusionner des colonnes dans un tableau ?",
      options: ["rowspan", "colspan", "merge", "span"],
      answer: 1
    },
    {
      question: "Quel est le rôle du CSS Grid ?",
      options: ["Créer des grilles de mise en page", "Ajouter des images", "Afficher des vidéos", "Créer des menus"],
      answer: 0
    },
    {
      question: "À quoi sert la balise <nav> ?",
      options: ["Définir la navigation", "Créer un formulaire", "Afficher une image", "Créer un tableau"],
      answer: 0
    },
    {
      question: "Que fait la méthode JS 'querySelector' ?",
      options: ["Sélectionne le premier élément correspondant à un sélecteur CSS", "Crée un bouton", "Ajoute une classe", "Supprime un élément"],
      answer: 0
    },
    {
      question: "Quel est le rôle du fichier .gitignore ?",
      options: ["Ajouter des images", "Créer un dépôt", "Afficher une vidéo", "Exclure des fichiers du dépôt Git"],
      answer: 3
    },
    {
      question: "Quel est le rôle du CSS 'position: absolute;' ?",
      options: ["Centrer un élément", "Mettre en gras", "Positionner un élément par rapport à son parent", "Rendre un élément invisible"],
      answer: 2
    },
    {
      question: "Quelle balise HTML permet d'ajouter un commentaire ?",
      options: ["// commentaire //", "<comment>", "<!-- commentaire -->", "<#-- commentaire -->"],
      answer: 2
    },
    {
      question: "Quel protocole permet d'envoyer des e-mails ?",
      options: ["HTTP", "SMTP", "FTP", "DNS"],
      answer: 1
    },
    {
      question: "Que signifie 'responsive' ?",
      options: ["Adapté à tous les écrans", "Rapide", "Interactif", "Sécurisé"],
      answer: 0
    },
    {
      question: "Quel langage permet de créer des applications mobiles hybrides ?",
      options: ["JavaScript", "HTML", "CSS", "Tous les précédents"],
      answer: 3
    },
    {
      question: "Quel est le rôle du CSS 'z-index' ?",
      options: ["Gérer la superposition des éléments", "Changer la couleur", "Mettre en italique", "Créer une image"],
      answer: 0
    },
    {
      question: "Quelle propriété CSS permet de changer la couleur de fond ?",
      options: ["color", "background-color", "bgcolor", "fill"],
      answer: 1
    },
    {
      question: "Que fait la méthode JS 'preventDefault()' ?",
      options: ["Ajoute une classe", "Crée un bouton", "Empêche le comportement par défaut d'un événement", "Change la couleur"],
      answer: 2
    },
    {
      question: "Que signifie le sigle 'URL' ?",
      options: ["Uniform Resource Locator", "Unique Resource Link", "Universal Resource Link", "Unified Resource Layer"],
      answer: 0
    },
    {
      question: "À quoi sert la balise <footer> ?",
      options: ["Créer un formulaire", "Afficher une image", "Créer un tableau", "Définir le pied de page"],
      answer: 3
    },
    {
      question: "Que permet la propriété CSS 'border-radius' ?",
      options: ["Étirer une image", "Ajouter une bordure", "Changer la couleur", "Arrondir les coins"],
      answer: 3
    },
    {
      question: "Quel est le rôle du fichier package.json ?",
      options: ["Gérer les dépendances d'un projet JS", "Créer des images", "Afficher une vidéo", "Créer un tableau"],
      answer: 0
    },
    {
      question: "À quoi sert la balise <section> ?",
      options: ["Créer un formulaire", "Structurer le contenu en sections", "Afficher une image", "Créer un tableau"],
      answer: 1
    }
  ],
  difficile: [
    {
      question: "À quoi sert la méthode JavaScript 'bind()' ?",
      options: ["Attacher une fonction à un objet", "Créer un tableau", "Ajouter un événement", "Changer la couleur"],
      answer: 0
    },
    {
      question: "Que retourne la méthode 'document.querySelectorAll()' ?",
      options: ["Un tableau d'éléments", "Une NodeList", "Un seul élément", "Une chaîne de caractères"],
      answer: 1
    },
    {
      question: "Quel est le rôle du protocole WebSocket ?",
      options: ["Transfert de fichiers", "Envoi d'e-mails", "Communication bidirectionnelle en temps réel", "Création de cookies"],
      answer: 2
    },
    {
      question: "Que fait la méthode JS 'map()' sur un tableau ?",
      options: ["Supprime un élément", "Trie un tableau", "Ajoute un élément", "Transforme chaque élément et retourne un nouveau tableau"],
      answer: 3
    },
    {
      question: "Qu'est-ce que le DOM ?",
      options: ["Data Object Model", "Document Online Manager", "Document Object Model", "Data Online Model"],
      answer: 2
    },
    {
      question: "Quel est le rôle du 'Service Worker' en PWA ?",
      options: ["Créer des images", "Gérer le cache et le mode hors ligne", "Afficher une vidéo", "Créer un formulaire"],
      answer: 1
    },
    {
      question: "Quelle méthode JS permet de supprimer un élément d'un tableau selon son index ?",
      options: ["remove()", "delete()", "pop()", "splice()"],
      answer: 3
    },
    {
      question: "Que fait la propriété CSS 'overflow: scroll;' ?",
      options: ["Ajoute une barre de défilement", "Cache le contenu", "Change la couleur", "Agrandit la police"],
      answer: 0
    },
    {
      question: "Quelle propriété CSS permet d'ajuster l'opacité ?",
      options: ["opacity", "transparent", "alpha", "visibility"],
      answer: 0
    },
    {
      question: "À quoi sert la méthode JS 'reduce()' ?",
      options: ["Réduire la taille d'un tableau", "Supprimer un élément", "Cloner un tableau", "Accumuler une valeur à partir d'un tableau"],
      answer: 3
    },
    {
      question: "Quelle est la différence entre '==' et '===' en JS ?",
      options: ["Aucune différence", "== compare la valeur, === compare valeur et type", "=== compare uniquement la valeur", "== compare uniquement le type"],
      answer: 1
    },
    {
      question: "Que fait la méthode JS 'filter()' ?",
      options: ["Renvoie un tableau filtré selon une condition", "Trie un tableau", "Ajoute un élément", "Supprime un élément"],
      answer: 0
    },
    {
      question: "Quel est le rôle du CORS ?",
      options: ["Créer des images", "Afficher une vidéo", "Créer un formulaire", "Autoriser les requêtes entre différents domaines"],
      answer: 3
    },
    {
      question: "Qu'est-ce qu'un 'callback' en JS ?",
      options: ["Un composant React", "Un élément HTML", "Une variable globale", "Une fonction passée en argument à une autre fonction"],
      answer: 3
    },
    {
      question: "À quoi sert la balise <template> en HTML ?",
      options: ["Créer une image", "Afficher une vidéo", "Définir du contenu à réutiliser via JS", "Créer un formulaire"],
      answer: 2
    },
    {
      question: "Que fait la propriété CSS 'object-fit: cover;' sur une image ?",
      options: ["Ajoute une bordure", "Change la couleur", "Ajuste l'image en couvrant le conteneur", "Crée une animation"],
      answer: 2
    },
    {
      question: "Quelle méthode JS permet de cloner un objet ?",
      options: ["clone()", "Object.assign()", "copy()", "duplicate()"],
      answer: 1
    },
    {
      question: "Que signifie SSR ?",
      options: ["Static Site Rendering", "Simple Site Routing", "Server Side Rendering", "Server Side Routing"],
      answer: 2
    },
    {
      question: "À quoi sert l'attribut 'defer' dans une balise <script> ?",
      options: ["Exécuter le script immédiatement", "Ajouter du CSS", "Créer une image", "Différer l'exécution du script après le chargement du HTML"],
      answer: 3
    },
    {
      question: "Quelle méthode JS permet de récupérer une promesse ?",
      options: ["setTimeout", "clearInterval", "addEventListener", "async/await"],
      answer: 3
    },
    {
      question: "Que fait la propriété CSS 'pointer-events: none;' ?",
      options: ["Cache un élément", "Désactive les interactions de la souris", "Change la couleur", "Crée une bordure"],
      answer: 1
    },
    {
      question: "Qu'est-ce que le 'shadow DOM' ?",
      options: ["Un effet d'ombre CSS", "Un menu déroulant", "Un DOM encapsulé pour les Web Components", "Un nouveau format d'image"],
      answer: 2
    },
    {
      question: "Que fait la méthode JS 'slice()' sur un tableau ?",
      options: ["Renvoie une copie partielle du tableau", "Supprime un élément", "Trie le tableau", "Ajoute un élément"],
      answer: 0
    },
    {
      question: "Quelle propriété CSS permet de fixer un élément lors du scroll ?",
      options: ["position: sticky;", "position: fixed;", "position: absolute;", "position: static;"],
      answer: 0
    },
    {
      question: "À quoi sert le tag <noscript> ?",
      options: ["Afficher un contenu si JS est désactivé", "Afficher un titre", "Créer une image", "Créer un tableau"],
      answer: 0
    },
    {
      question: "Quel est le rôle du fichier .env ?",
      options: ["Créer des images", "Stocker des variables d'environnement", "Afficher une vidéo", "Créer un tableau"],
      answer: 1
    },
    {
      question: "Qu'est-ce qu'un 'Promise' en JS ?",
      options: ["Un composant HTML", "Un style CSS", "Un objet représentant une valeur future", "Un nom de domaine"],
      answer: 2
    },
    {
      question: "Quelle méthode JS permet de parcourir les clés d'un objet ?",
      options: ["Object.values()", "Object.keys()", "Object.forEach()", "Object.loop()"],
      answer: 1
    },
    {
      question: "Que fait la propriété CSS 'box-shadow' ?",
      options: ["Change la couleur", "Ajoute une bordure", "Ajoute une ombre portée", "Met en italique"],
      answer: 2
    },
    {
      question: "Qu'est-ce que le 'lazy loading' ?",
      options: ["Mise en cache", "Création de cookies", "Suppression d'éléments", "Chargement différé d'images ou de ressources"],
      answer: 3
    },
    {
      question: "À quoi sert la méthode JS 'setTimeout()' ?",
      options: ["Créer un tableau", "Changer la couleur", "Ajouter une image", "Exécuter une fonction après un délai"],
      answer: 3
    },
    {
      question: "Que fait la propriété CSS 'transition' ?",
      options: ["Anime les changements de propriétés", "Change la couleur", "Ajoute une bordure", "Met en italique"],
      answer: 0
    },
    {
      question: "Qu'est-ce que le SSR ?",
      options: ["Simple Site Rendering", "Server Side Rendering", "Site Secure Router", "Server Style Resource"],
      answer: 1
    },
    {
      question: "Quel est l'avantage du PWA ?",
      options: ["Fonctionne hors ligne", "Changer la couleur", "Créer une image", "Ajouter une vidéo"],
      answer: 0
    },
    {
      question: "Que fait la méthode JS 'every()' sur un tableau ?",
      options: ["Teste si tous les éléments remplissent une condition", "Ajoute un élément", "Trie le tableau", "Supprime un élément"],
      answer: 0
    },
    {
      question: "À quoi sert la balise <progress> ?",
      options: ["Afficher une image", "Créer un bouton", "Afficher une barre de progression", "Mettre en gras"],
      answer: 2
    },
    {
      question: "Qu'est-ce que l'accessibilité web ?",
      options: ["Sécuriser un site", "Accélérer le site", "Rendre un site utilisable par tous, y compris en situation de handicap", "Créer une image"],
      answer: 2
    },
    {
      question: "Quel est le rôle du fichier manifest.json dans une PWA ?",
      options: ["Créer des images", "Afficher une vidéo", "Créer un tableau", "Définir les paramètres de l'application"],
      answer: 3
    },
    {
      question: "Que fait la méthode JS 'find()' ?",
      options: ["Retourne le premier élément du tableau qui satisfait une condition", "Ajoute un élément", "Trie le tableau", "Supprime un élément"],
      answer: 0
    },
    {
      question: "À quoi sert la propriété CSS 'flex-wrap' ?",
      options: ["Permettre le retour à la ligne des éléments flex", "Mettre en italique", "Changer la couleur", "Ajouter une image"],
      answer: 0
    },
    {
      question: "Qu'est-ce qu'un 'SPA' ?",
      options: ["Single Page Application", "Simple Page Array", "Super Page Application", "Single Page Array"],
      answer: 0
    },
    {
      question: "Que permet la méthode JS 'includes()' ?",
      options: ["Ajouter un élément", "Vérifier si un élément est présent dans un tableau", "Supprimer un élément", "Trier un tableau"],
      answer: 1
    },
    {
      question: "Que fait la propriété CSS 'grid-template-columns' ?",
      options: ["Change la couleur", "Ajoute une image", "Définit la structure des colonnes dans un grid", "Crée un tableau"],
      answer: 2
    },
    {
      question: "Qu'est-ce qu'un 'token' en sécurité web ?",
      options: ["Image", "Vidéo", "Bouton", "Clé d'authentification"],
      answer: 3
    },
    {
      question: "Que fait la méthode JS 'flat()' sur un tableau ?",
      options: ["Trie le tableau", "Aplatit les sous-tableaux", "Ajoute un élément", "Supprime un élément"],
      answer: 1
    },
    {
      question: "Qu'est-ce que le SSR améliore ?",
      options: ["La couleur du site", "L'ajout d'images", "La création de vidéos", "Le SEO et le temps de chargement initial"],
      answer: 3
    },
    {
      question: "Que fait la méthode JS 'Object.entries()' ?",
      options: ["Ajoute une clé", "Renvoie un tableau de paires clé/valeur", "Supprime une valeur", "Trie l'objet"],
      answer: 1
    },
    {
      question: "À quoi sert la propriété CSS 'user-select: none;' ?",
      options: ["Empêche la sélection du texte", "Change la couleur", "Ajoute une image", "Met en gras"],
      answer: 0
    },
    {
      question: "Qu'est-ce qu'un 'middleware' ?",
      options: ["Un composant HTML", "Un style CSS", "Une image", "Un logiciel intermédiaire entre deux couches"],
      answer: 3
    }
  ]
};

// Variables globales
let currentLevel = null;
let currentQuestions = [];
let currentSetIndex = 0;
let score = 0;
let answeredQuestions = [];
const QUESTIONSPERSET = 10;

// Éléments DOM
const startBtn = document.getElementById('Start-Quiz');
const levelContainer = document.getElementById('choose-level');
const quizZone = document.getElementById('quiz-Zone');
const finalScore = document.getElementById('final-score');
const retourBtn = document.getElementById('retour');
const recommencerBtn = document.getElementById('recommencer');
const scoreDisplay = document.getElementById('score');
const levelBtns = document.querySelectorAll('.niveau');

// Fonction pour mélanger les questions
function shuffle(arr) {
  return arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

// Réinitialiser le quiz
function resetQuiz() {
  quizZone.innerHTML = '';
  quizZone.classList.add('hidden');
  finalScore.classList.add('hidden');
  score = 0;
  answeredQuestions = [];
  currentSetIndex = 0;
}

// Démarrer le quiz
startBtn.addEventListener('click', () => {
  resetQuiz();
  levelContainer.classList.remove('hidden');
});

// Gestion des niveaux
levelBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentLevel = btn.dataset.niveau.toLowerCase();
    currentQuestions = shuffle(questionData[currentLevel]);
    answeredQuestions = [];
    score = 0;
    currentSetIndex = 0;
    levelContainer.classList.add('hidden');
    startQuizSet();
  });
});

// Démarrer une série de questions
function startQuizSet() {
  quizZone.classList.remove('hidden');
  finalScore.classList.add('hidden');
  const start = currentSetIndex * QUESTIONSPERSET;
  const end = start + QUESTIONSPERSET;
  const questionsToAsk = currentQuestions.slice(start, end);

  if (questionsToAsk.length === 0) {
    showEndOfLevel();
  } else {
    runQuiz(questionsToAsk);
  }
}

// Exécuter le quiz
function runQuiz(questions) {
  let qIndex = 0;
  score = 0;

  function showQuestion() {
    if (qIndex >= questions.length) {
      showScore();
      return;
    }

    const q = questions[qIndex];
    quizZone.innerHTML = `
      <div class="quiz-question">
        <h3>${qIndex + 1}. ${q.question}</h3>
        <div class="options"></div>
      </div>
    `;

    const optionsDiv = quizZone.querySelector('.options');
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.textContent = opt;
      btn.className = 'option-btn';
      btn.onclick = function() {
        handleAnswer(i, btn);
      };
      optionsDiv.appendChild(btn);
    });
  }

  function handleAnswer(selected, btn) {
    const q = questions[qIndex];
    const optionsBtns = quizZone.querySelectorAll('.option-btn');
    
    optionsBtns.forEach((b, idx) => {
      if (idx === q.answer) {
        b.style.background = '#4ade80';
        b.style.color = 'black';
        b.style.textDecoration = 'underline';
      }
      if (selected === idx && selected !== q.answer) {
        b.style.background = '#f87171';
        b.style.color = '#fff';
        b.style.textDecoration = 'line-through';
      }
      b.disabled = true;
    });

    if (selected === q.answer) score++;

    setTimeout(() => {
      qIndex++;
      showQuestion();
    }, 1200);
  }

  showQuestion();
}

// Afficher le score
function showScore() {
  quizZone.classList.add('hidden');
  finalScore.classList.remove('hidden');
  scoreDisplay.textContent = `Score : ${score} / ${QUESTIONSPERSET}`;
}

// Bouton retour
retourBtn.addEventListener('click', () => {
  resetQuiz();
  levelContainer.classList.remove('hidden');
});

// Bouton recommencer
recommencerBtn.addEventListener('click', () => {
  currentSetIndex++;
  if (currentSetIndex * QUESTIONSPERSET >= 50) {
    currentQuestions = shuffle(questionData[currentLevel]);
    currentSetIndex = 0;
  }
  startQuizSet();
});

// Fin du niveau
function showEndOfLevel() {
  quizZone.classList.add('hidden');
  finalScore.classList.remove('hidden');
  scoreDisplay.textContent = "Tu as répondu à toutes les questions de ce niveau ! Clique sur 🔁 Revenir au menu pour recommencer.";
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  console.log("Quiz prêt à fonctionner !");
});
