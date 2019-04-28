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

4. If you don't have mongoDB cluster, create cluster first.


# how to setup mongodb cluster

1. visit https://www.mongodb.com/cloud/atlas

2. Create free cluster, copy your cluster uri and paste environment variables as MONGODB_URI.
 (add your cloud ip to whitelist)

refer https://cloud.ibm.com/docs/infrastructure/hardware-firewall-dedicated?topic=hardware-firewall-dedicated-ibm-cloud-ip-ranges

3. prepare db and collections

db : buzztondb
collection : users
 insert initial user : { "id" : "<user id>" , "name" : "<user name>" }

