# Website

Code for new react based website that will be pushed to Gitlab.

## CMD Snippets

Install the node modules
```npm install```

Run the react app
```npm start```

Access running react app: go to ```http://localhost:3000```

## Building site with Hugo

### Install Hugo

```pip install hugo``` for windows
```apt-get install hugo``` for linux

### Build react site

In this github top folder run the command ```npm run build```, this will build the static files for the react site

### Create hugo site and copy files

In a new folder outside of the repo run the following commands
```hugo new site <site name>```
```cp -r ./path_to_react_github/build ./path_to_hugo_site/static```

### Edit config.toml file

Paste the following lines into the config.toml file in the hugo site
```baseURL = 'http://hps.aoe.vt.edu/'```
languageCode = 'en-us'
title = 'My New Hugo Site'
```# config.toml```
[[outputs]]
path = "public/"

[outputFormats]
[outputFormats.Static]
  baseName = "index"
  mediaType = "text/html"
  isHTML = true```

### Use hugo site

```hugo server``` will show a development server of the site, which should match the react site
```hugo``` to build production files
