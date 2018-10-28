# buzzton_server

buzztone server

## how to start server

`docker-compose build`

`docker-compose up -d`

execute container as foreground process

`docker-compose up`

## connect to container 

`docker-compose ps`

## login to node container

### login to nodeapp
`docker exec -it nodeapp /bin/sh`

### login to nginx
`docker exec -it nginx /bin/sh`

## stop & start container

`docker-compose stop`
`docker-compose start`

## api path

`http://127.0.0.1:8080/api

### check api

curl -X GET http://127.0.0.1:8080/api/version


## how to develop server

exec the following command in server directory

`yarn run dev`

## compile code for production

`yarn run build`
