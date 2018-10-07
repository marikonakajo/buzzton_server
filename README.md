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

`docker exec -it nodeapp /bin/sh`

## stop & start container

`docker-compose stop`
`docker-compose start`

## api path

`http://127.0.0.1:8080/api

### check api

curl -X GET http://127.0.0.1:8080/api/version
