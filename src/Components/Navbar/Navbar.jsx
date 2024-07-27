import './Navbar.css'

const Navbar = () =>{
    return (
        <div className='nav'>
            <div className='nav-logo'>Mistral</div>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>Explore</li>
                <li>About us</li>
                <li className='nav-contact'>Contact us</li>
            </ul>
        </div>
    )
}

export default Navbar;