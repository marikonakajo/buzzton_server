# Node base image
FROM node:8.12.0-alpine
# Yarn
RUN apk add yarn
# gobal
RUN yarn global add nodemon
#
RUN mkdir /app
# work directory
WORKDIR /app
# copy
COPY ./server/package.json /app/package.json
# install packages
RUN yarn install

### movie store (temporary)
RUN mkdir /app/upload

### install sqlite
# SQLite
RUN apk add sqlite
RUN mkdir /app/db

### install ffmpeg
## refs https://github.com/rickydunlop/nodejs-ffmpeg
ENV FFMPEG_VERSION=3.3.5
RUN apk update && \
    apk upgrade && \
    apk add --update ca-certificates && \
    apk add gnutls-dev zlib-dev yasm-dev lame-dev libogg-dev \
    x264-dev libvpx-dev libvorbis-dev x265-dev freetype-dev \
    libass-dev libwebp-dev rtmpdump-dev libtheora-dev opus-dev && \
    apk add --no-cache --virtual .build-dependencies \
    build-base coreutils tar bzip2 x264 gnutls nasm && \
    wget -O- http://ffmpeg.org/releases/ffmpeg-${FFMPEG_VERSION}.tar.gz | tar xzC /tmp && \
    cd /tmp/ffmpeg-${FFMPEG_VERSION} && \
    ./configure --bindir="/usr/bin" \
                --enable-version3 \
                --enable-gpl \
                --enable-nonfree \
                --enable-small \
                --enable-libmp3lame \
                --enable-libx264 \
                --enable-libx265 \
                --enable-libvpx \
                --enable-libtheora \
                --enable-libvorbis \
                --enable-libopus \
                --enable-libass \
                --enable-libwebp \
                --enable-librtmp \
                --enable-postproc \
                --enable-avresample \
                --enable-libfreetype \
                --enable-gnutls \
                --disable-debug && \
    make && \
    make install && \
    make distclean && \
    cd $OLDPWD && \
    rm -rf /tmp/ffmpeg-${FFMPEG_VERSION} && \
    apk del --purge .build-dependencies && \
    rm -rf /var/cache/apk/*
