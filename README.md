# postgres-api

    Rest-API
        - pg.Pool, module nodeJS --> The pool is initially created empty and will create new clients
        as they are needed

        - express, module nodeJS --> Express is a minimal and flexible Node.js web application framework
        that provides a robust set of features for web and mobile applications.

        - PostgreSQL --> Base de datos, se consume la bd apidb con la tabla y columnas
        especificadas en /db/database.sql

        - Docker y compose --> si carece del rdbms de postgresql se cargo el Dockerfile
        y docker-compose de un contenedor de postgres
