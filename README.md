# TODO List

## Docker

-   meilleure gestion des .env ?
-   FROM docker image nginx
-   Build le front dans une image node, récupérer que le dist (multi layer later)
-   mettre le dist dans var/www/html
-   expose le port du FRONT (EXPOSE 80 81 443 ?)
-   docker start server.ts, le front est le seul à pouvoir taper dessus (fetch /api/booking ?)
-   gerer l'init de la db (prod.db ?)
-   Arguments docker d'id / password de paristennis

## Back

-   ORM fini ?
-   jouer un CRON
-   finir le script puppeteer de résa avec bun:puppeteer

## Front

-   Page de formulaire POST
-   Home page recuperation GET all + mise en page tableau
-   Page de detail d'une reservation, possibilité de CANCEL ou d'UPDATE
