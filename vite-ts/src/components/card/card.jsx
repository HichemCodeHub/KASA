// IMPORTS
import { Link } from 'react-router-dom'
import './card.css'

// ASSETS
import DataLocation from '../../datas/logement.json'


// Composant CardLocation > Génère des cards avec les images des locations, dynamiquement depuis le fichier JSON
function Card() {
   return (
      <section className='ContLocation'>
         {DataLocation.map((location) => (

            <Link to={`/location/${location.id}`} key={location.id} >
               <figure className='ContCard'>
                  <img className='ImgLocation' src={location.cover} alt={location.title}/>
                  <div className='GradientLocation'></div>          
                  <figcaption className='TitleLocation'>{location.title}</figcaption>
               </figure>
            </Link>

         ))}
      </section>
   )
}
export default Card