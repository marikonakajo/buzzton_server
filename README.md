
How to setup buzzton server to ibmcloud ?

# requirements

cloudant service
```bash
ibmcloud cf create-service cloudantNoSQLDB Lite buzzton-cloudant
```

# build and start buzzton server

1. install packages
```bash
yarn install
```

2. build app
```bash
yarn run build
```

3. push to cloud
```bash
ibmcloud cf push
```
