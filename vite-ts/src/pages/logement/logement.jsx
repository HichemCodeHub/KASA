// IMPORTS
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './logement.css';

// COMPONENTS
import Error from '../../pages/error/error';
import Slider from '../../components/slider/slider.jsx';
import Rating from '../../components/rating/rating.jsx';
import Collapse from '../../components/collapse/collapse.jsx';

// ASSETS
import DataLocation from '../../datas/logement.json';



// Page Logement > Contient le Composant Slider, compo Rating et le composant Collapsedescription ainsi que les infos du logement et du propriétaire
function Logement() {
   const [logement, setLogement] = useState(null); 
   const { id } = useParams(); // Récupère l'id du logement dans l'url

   useEffect(() => {  // Récupère les infos du logement en fonction de l'id
      const data = DataLocation.find(location => location.id === id);
      if (data) {
      setLogement(data);
   } else { 
      setLogement(null);
   }
   }, [id]);

   if (!logement) { // Si l'id n'existe pas, affiche la page d'erreur
      return (<Error />);
   }

   // Crréer un JSON pour le passer en props au composant Collapsehome
   const data = [
      {
         title: 'Description',
         text: logement.description
      },
      {
         title: 'Equipements',
         // Créer une liste avec les équipements
         text: logement.equipments.map(equipment => (
            <p className='TextCollapse' key={equipment}>{equipment}</p>
         ))
      }
   ]


   return ( 
      <>
         {logement.pictures && <Slider images={logement.pictures} />}

         <section className='ContInfo'>

            <div className='ContInfoLogement'>
               <h1 className='TittleInfo'>{logement.title}</h1>
               <p className='TextInfo'>{logement.location}</p>
               <ul className='TagUl'>
                  {logement.tags.map(tag => (
                     <li className='TagLi' key={tag}>{tag}</li>
                  ))}
               </ul>
            </div>

            <div className='ContInfoOwner'>
               <div className='TEST'>
                  <p className='TextInfoOwner'>{logement.host.name}</p>
                  <img className='ImgOwner' src={logement.host.picture} alt={logement.host.name} />
               </div>

               <Rating rating={logement.rating} />
            </div>

         </section>

         {/* Utilisation de Collapse pour la description et les équipements */}
         <div className="collapse-container">
         <Collapse title="Description">
            <p className='TextCollapse'>{logement.description}</p>
         </Collapse>
         <Collapse title="Equipements">
            {logement.equipments.map(equipment => (
               <p className='TextCollapse' key={equipment}>{equipment}</p>
            ))}
         </Collapse>
      </div>

   </>
  );
}


export default Logement;