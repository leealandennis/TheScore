# Installation

## Prerequisites 

1. docker and docker-compose

## Instructions

1. `docker-compose up -d`
2. `docker-compose exec ts_web bash`
(inside container until step 7)
3. `npm install`
4. `composer install`
5. `php artisan db:refresh`
6. `npm run dev` 
7. (outside container) `sudo chmod 777 storage -R`
8. Navigate to `locahost:8100`
