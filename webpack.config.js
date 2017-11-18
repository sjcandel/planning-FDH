const path = require('path');
const glob = require('glob');

const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: [
    './index.js', // prend le fichier "index.js"...
    ...glob.sync('./services/*.js'), // ... et y ajoute tous les fichiers en .js qui sont dans le dossier "services"
    ...glob.sync('./controllers/*.js') // ... et y ajoute tous les fichiers en .js qui sont dans le dossier "controllers"
  ],
  output: {
    filename: 'bundle.js', // met tous les fichiers récupérés dans un nouveau fichier "bundle.js" ...
    path: path.resolve(__dirname, 'dist') // ... qui sera déplacé vers un dossier "dist"
  },
  plugins: [
    new CopyWebpackPlugin ([
        {from: "views/*.html"}, // copie également le dossier "views" et son contenu dans "dist"
        {from: "index.html"} // copie également le fichier "index.html" dans "dist"
    ])
  ]
};
