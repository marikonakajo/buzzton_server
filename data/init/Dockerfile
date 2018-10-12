FROM mongo:latest
COPY json json
CMD mongoimport --host mongodb --db buzztondb --collection users --drop --jsonArray --file ./json/users.json
