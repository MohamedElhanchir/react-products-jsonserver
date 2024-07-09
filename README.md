# Application de Gestion de Produits

Cette application permet de réaliser les opérations CRUD (Create, Read, Update, Delete) sur une liste de produits, offrant ainsi une excellente opportunité de se familiariser avec React.

## Conditions préalables

- Node.js
- npm
- json-server (version 0.17.4)

## Mise en place

1. Téléchargez le code source :
    ```bash
    git clone https://github.com/MohamedElhanchir/react-products-jsonserver.git
    cd react-products-jsonserver
    ```

2. Installez les packages nécessaires :
    ```bash
    npm install
    ```

## Comment l'utiliser

### Lancement du serveur JSON

Pour mettre en marche le serveur JSON, utilisez la commande suivante :
```bash
json-server -w data/db.json -p 3003
