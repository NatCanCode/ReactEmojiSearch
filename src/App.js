import "./App.css";
import Line from "./components/Line";
import emojis from "./emojis.json";
import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);
    // declare state containing emojis
    this.state = {emojis: emojis}
  }

  render() {
    // console.log(this.state.emojis)
    return (
      <div className="container">
        {this.state.emojis.map((elem, index) => {
          return (
            <div key={index + elem.title}>
              <Line title={elem.title} symbol={elem.symbol}/>
            </div>
          )  
        }
        )}
      </div>
    )
  }
}

export default App;


// Étape 1 : dans App.js , afficher une ligne avec le titre de l'emoji et son symbole (dans le fichier json ça correspond à ''title' et 'symbol')
// Étape 2 : utiliser le composant Line.js pour afficher une ligne
// Étape 3 : depuis App.js afficher toutes les lignes
// Étape 4 : implémenter le composant Line pour qu'on puisse copier le symbole en cliquant sur la ligne
// navigator.clipboard.writeText(/* ici ce qu'on veut copier */)