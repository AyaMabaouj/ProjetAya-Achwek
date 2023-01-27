import React, { useEffect } from "react";
import image from '../images/img.png'
import "../Styles/main.css";
import Header from "./Header";
export default function Home() {
  
  return (
    <>
    <React.Fragment>
			<Header/>
		</React.Fragment>
    <body className="bg">
      
    <img className="imgbg" src={image} alt="image"></img>
    <h1>Bienvenue </h1>
      <h1>Chez GestTime</h1>
      <p className="txt">GestTime est une application web pour la gestion des temps et activités elle est destinée principalement 
        pour les étudiants et les enseignants.
      Une bonne gestion du temps vous permet d'obtenir de meilleurs résultats en un temps plus court, 
      ce qui vous laisse plus de temps libre, vous aide à mieux vous concentrer, vous permet d'être plus productif,
       réduit votre niveau de stress et vous donne plus de temps à consacrer aux personnes qui comptent pour vous.
      </p>
      <a href="/signup"> <button className="btnins">Inscrirez Vouz</button></a>
    </body>
    </>
  );
}
