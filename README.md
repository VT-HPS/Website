# Website

Code for new react based website that will be pushed to Gitlab.

## CMD Snippets

Install the node modules
```npm install```

Run the react app
```npm start```

Access running react app: go to ```http://localhost:3000```

## Build react site

In this github top folder run the command ```npm run build```, this will build the static files for the react site in a folder called "build"

## Push build folder to gitlab

Pull the gitlab folder into a nearby folder with the command
```git clone <link to gitlab>```

Remove all files except the .git, .well-known, and README files

Copy the entire build folder to the gitlab
```cp /path/to/build/* /path/to/gitlab/```

Commit the changes and push to gitlab


