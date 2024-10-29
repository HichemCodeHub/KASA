// IMPORTS
import './rating.css';

// ASSETS
import StarRempli from '../../assets/rate/starRempli.png';
import StarVide from '../../assets/rate/starVide.png';

// STYLES


// Composant Rating > affiche les étoiles en fonction de la note
// Props : rating (note de 1 à 5)
function Rating({ rating }) { 
   const stars = []; // Creer un tableau pour stocker les étoiles
 
   for (let i = 1; i <= 5; i++) { // Boucle pour afficher les étoiles
      if (i <= rating) { // Tant que i est inférieur ou égal à la note
         stars.push(<img className='Stars' key={i} src={StarRempli} alt="star-filled" />);
      } else { // Sinon on affiche une étoile vide
         stars.push(<img className='Stars' key={i} src={StarVide} alt="star-empty" />);
      }
   }

   return <div>{stars}</div>; // Retourne les etoiles
}
export default Rating;