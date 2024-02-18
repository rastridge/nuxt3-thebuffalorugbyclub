# NUXT 3 Version of Buffalo Rugby Club Website

## Originally based on

https://github.com/sfxcode/nuxt3-primevue-starter

# Project setup and usage

# NUXT 3 Version of Buffalo Rugby Club Website

## Originally based on

https://github.com/sfxcode/nuxt3-primevue-starter

# Project setup and usage

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

Build:

```
yarn build
```

## Use VSCode github feature to commit/push to repository

- github repository "rastridge/menus-3.7"

## Change to the repository triggers Netlify build

- netlify site "thebuffalorugby.club"

# Supporting APIs

A number of outside services are used to implement apps

- ElasticEmail - email
- Twilio - text messaging
- media.buffalorugby.org - image storage

## API to support all image requests

- media.buffalorugby.org

Setup and Usage

At Dreamhost

- enable passenger
- create tmp/restart.txt
- create .htaccess

Upload server code to ISP Dreamhost.com using rsync

```
push-brc-org-nuxt-backend-to-media-brc-org='rsync -av   --delete --exclude "/node_modules" --exclude ".well-known/acme-challenge" --exclude "combined.log" --exclude "error.log" --exclude "/logs" --exclude "/tmp"  --exclude "/public" --exclude ".htaccess" --exclude ".DS_Store" --exclude "_notes"  --exclude ".git"  --exclude ".vscode"   ~/Code/experiments-nuxt3/nuxt3-brc-media-api/ rastridge@buffalorugby.org:/home/rastridge/media.buffalorugby.org/'
alias push-brc-org-nuxt-backend-to-media-brc-org='rsync -av     --delete                           --exclude ".well-known/acme-challenge" --exclude "combined.log" --exclude "error.log" --exclude "/logs" --exclude "/tmp"  --exclude "/public" --exclude ".htaccess" --exclude ".DS_Store" --exclude "_notes"  --exclude ".git"  --exclude ".vscode"   ~/Code/experiments-nuxt3/nuxt3-brc-media-api/ rastridge@buffalorugby.org:/home/rastridge/media.buffalorugby.org/'
```

Open shell at dreamhost

```
alias shell='ssh rastridge@vps30249.dreamhostps.com'
```

Restart server

```
alias restart-media-buffalo-api='touch /home/rastridge/media.buffalorugby.org/tmp/restart.txt'
```

# Sending Emails

ElasticEmail
setup and Usage

# Sending Text Messages

Twilio
Setup and Usage
