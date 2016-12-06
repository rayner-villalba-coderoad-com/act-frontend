InterACT 
======
**InterACT**

![alt tag](http://www.actenviro.com/wp-content/uploads/2016/07/act-logo-png.png)

ACT’s commitment to sustainability and the environment stems from a focus on protecting people, promoting health and safeguarding the planet’s natural spaces. As part of our commitment, we manage our internal operations in ways that are both socially and ecologically responsible. We constantly search for new innovations that will help our customers and our team minimize environmental impact and sustain healthy communities.

## Version 
Client Front-End project 
* Version 0.1

## Software Requirements 
- Git 
- Nodejs 6.5.0

### Getting Started
Select a directory where the application will be, then you have to clone the ACT project. For instance:
```bash
cd /Users/rvillalba/coderoad/act
git clone git@github.com:rayner-villalba-coderoad-com/act-frontend.git
sudo npm install
bower install 
gulp serve
```
#####NOTE:
Make sure to have installed: bower, sass and gulp. You can install with the following command:
```bash
sudo npm install -g gulp
sudo npm install -g bower 
sudo npm install -g node-sass
```

### Gulp Tasks
- gulp or gulp build to build an optimized version of your application in /dist
- gulp serve to launch a browser sync server on your source files
- gulp serve:dist to launch a server on your optimized application
- gulp test to launch your unit tests with Karma
- gulp test:auto to launch your unit tests with Karma in watch mode

### Webservice with JSON-Server (Optional)
Open your Terminal and verify if you had installed json-server. You can install with and execute : 
```bash
sudo npm install -g json-server
cd mock-data/
json-server --watch db.json --port 9999
```   
   
## Contact
#### Developer/Company
* [Homepage](http://www.mojix.com/) 
