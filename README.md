# NUXT 3 Version of Buffalo Rugby Club Website

## Originally based on

https://github.com/sfxcode/nuxt3-primevue-starter

# Overview

- Website created with Vue / Nuxt 3 using vscode editor
- Stored in repository at Github
- Build and Deployed at Netlify
- Nuxt 3 server accesses data from mysql database 'buffalorugby' at Dreamhost ISP
- Nuxt 3 uploads and stores images at 'media.buffalorugby.org' at Dreamhost

# Project setup and usage

## On deveolpment machine

Install node:

```
nvm use stable (v21.5.0)
```

Install dependencies:

```
yarn install
```

Run development server:

```
yarn dev
```

## Use VSCode github feature to commit/push to repository

- github repository "rastridge/menus-3.7"

## Change to the repository triggers Netlify build

- netlify site "buffalorugbyorg"

- How to set up Netlify custom external domain for site 'buffalorugby.org' via Dreamhost
- while maintaining ssh and email functions and 'media.buffalorugby.org' on domain buffalorugby.org at Dreamhost

```
https://superchlorine.com/2021/01/how-to-set-up-netify-custom-domain-via-dreamhost/
```

# Supporting APIs

A number of outside services are used to implement apps

- ElasticEmail - email
- Twilio - text messaging
- Dreamhost - media.buffalorugby.org - image storage

## API to support image uploads and requests

- enable Proxy server on media.buffalorugby.org
- enable js server app.js
- maintain server with pm2

Upload development server code to dreamhost using rsync

- DANGER - all images are stored in 'public' - d0 not OVERWRITE

```
rsync -av --delete --exclude "ecosystem.config.js" --exclude "app.js" --exclude "/public" --exclude "logs" --exclude "/node_modules" --exclude ".git" --exclude ".gitignore" ~/Code/brc.org.nuxt3/nuxt3-brc-media-api/ rastridge@buffalorugby.org:/home/rastridge/media.buffalorugby.org/
```

- Open shell at dreamhost

```
alias shell='ssh rastridge@vps30249.dreamhostps.com'
```

- Restart server

```
pm2 restart brc_server
```

## Sending Emails

ElasticEmail
setup and Usage

## Sending Text Messages

Twilio
Setup and Usage
