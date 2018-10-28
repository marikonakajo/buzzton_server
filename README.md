# buzzton_server

buzztone server

## how to start server

### generate certification for SSL

```bash
mkdir nginx/cert
cd nginx/cert
openssl req -new -days 365 -x509 -nodes -keyout cert.key -out cert.crt
```


### build and start container

`docker-compose build`

`docker-compose up -d`

## connect to container 

`docker-compose ps`

If nodeapp server is down, retry `docker-compose up -d`.

## login to container

### login to nodeapp
`docker exec -it nodeapp /bin/sh`

### login to nginx
`docker exec -it nginx /bin/sh`


## api path

`https://127.0.0.1/api`

### check api

`curl -X GET https://127.0.0.1/api/version`


## control panel

`https://127.0.0.1`


## how to develop server

exec the following command in server directory

`yarn run dev`

## compile code for production

`yarn run build`
