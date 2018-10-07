# Node base image
FROM node:8.12.0-alpine
# Yarn
RUN apk add yarn
# gobal
#RUN yarn global add nodemon
#
RUN mkdir /app
# work directory
WORKDIR /app
# copy
COPY ./server/package.json /app/package.json
# install packages
RUN yarn install
