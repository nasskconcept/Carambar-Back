API Blagues Carambar & Co
Une mini API RESTful pour stocker, ajouter et récupérer des blagues façon Carambar, utilisable depuis une appli web ou mobile.

<h3>Méthodologie Trello</h3>

<img src="https://github.com/user-attachments/assets/1cbc388f-f97f-4431-82bd-511f1f8957b6" alt="screen-brief-api" width="400" />
<br>
<img src="https://github.com/user-attachments/assets/4a255527-c22f-477b-8833-53b9c1b8e8c7" alt="screen-brief-api2" width="400" />




🚀 Démo en ligne
API Render : https://carambar-back-1-496f.onrender.com

Documentation Swagger : https://carambar-back-1-496f.onrender.com/api-docs

📚 Endpoints principaux
POST /api/v1/blagues — Ajouter une blague
Body JSON : { "question": "...", "answer": "..." }

GET /api/v1/blagues — Liste toutes les blagues

GET /api/v1/blagues/:id — Récupère une blague par ID

GET /api/v1/blagues/random — Blague aléatoire

⚙️ Stack technique
Node.js, Express

Sequelize & SQLite (BDD légère, file-based)

Structure MVC (models, controllers, routes)

Déploiement : Render.com

Documentation automatique : Swagger

🚩 Utilisation rapide (dev/local)
bash
Copier
Modifier
git clone https://github.com/nasskconcept/Carambar-Back.git
cd Carambar-Back
npm install
npm start
L’API tourne par défaut sur http://localhost:3000.

📝 Exemples de requêtes (Postman, etc.)
Ajouter une blague :

json
Copier
Modifier
POST /api/v1/blagues
{
"question": "Pourquoi le canard est-il à l'heure ?",
"answer": "Parce qu'il est dans l'étang."
}
Obtenir une blague aléatoire :

bash
Copier
Modifier
GET /api/v1/blagues/random
🌐 Front-end associé
➡️ La landing page Carambar & Co (démo) :
https://nasskconcept.github.io/Carambar-Front/

📄 Swagger (documentation live)
https://carambar-back-1-496f.onrender.com/api-docs

🤝 Contribution
Pull requests bienvenues !
