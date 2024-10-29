import { Link } from 'react-router-dom'
import logoFooter from '../../assets/logo/logo_footer.png'
import './footer.css'

function Footer() {
    return (
        <footer className='ContFooter'>
            <Link to="/">
                <img src={logoFooter} alt='logo de Kasa' className='footer__logo' />
            </Link>    
            <p className='Footer__Text'>© 2020 Kasa. All rights reserved</p>
        </footer>

    );
}

export default Footer