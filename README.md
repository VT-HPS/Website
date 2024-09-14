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

## Sections to add

- Setup
  - Adding new users as developers to HPS deploy site
  - Adding users to Github
  - Cloning and setting up both repos
  - Building dev repo (Include necessary file changes to create 404 and other pages)
  - Moving dev repo build to main repo and deploying
- Development
  - Setting up test website from dev repo
  - Link to common github tips
  - Update packages
  - Starter development and learning react
- Specific Website Sections
  - Home page
    - Rotating_Images.json
  - Gallery
    - How to add Photos
      - Gallery Images folder
      - Gallery images Placeholder folder
    - Best way to shrink file size (Include app "File Optimizer")
    - Gallery.json
  - Team Page (Leadership)
    - MembershipInfo.json
    - Team Leadership images folder
  - Sponsorship Page
    - Sponsor_infos.json
    - Sponsor Logos folder
    - Sponsorship registration page
  - History
    - History.json
    - Sub images folder
  - Senior Design
    - Senior Design.json
    - Photos
      - Senior Design Gallery folder
      - Senior Design Photo folder
  - Membership
    - Membership email form
    - Different links for signup
  - FAQ
    - How to add and change FAQ in FAQ Page
- Website Setup
  - Structure with public folder and src
  - 404 page (not found)
  - Redirection
  - Email Setup
    - Emailjs
    - Account Info (Kept in sharepoint)
  - Topbar
  - Footer
  - CSS
