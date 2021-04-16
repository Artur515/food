import {Menu, Segment} from "semantic-ui-react";
import {useState} from "react";
import logo from '../../img/logo.jpg'
import style from './style.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    const [activeItem, setActiveItem] = useState("home")
    const handleItemClick = (e, {name}) => setActiveItem(name)
    return (<div className={style.head}>
            <img src={logo} alt='logo' className={style.logo}/>
            <Segment color='teal' size='massive'>
                <Menu pointing secondary>
                    <Link to='/'>
                        <Menu.Item
                            name='home'
                            active={activeItem === 'home'}
                            onClick={handleItemClick}/>
                    </Link>
                    <Link to='/about'>
                        <Menu.Item
                            name='about'
                            active={activeItem === 'about'}
                            onClick={handleItemClick}/>
                    </Link>
                    <Link to='/contacts'>
                        <Menu.Item
                            name='contacts'
                            active={activeItem === 'contacts'}
                            onClick={handleItemClick}/>
                    </Link>
                </Menu>
            </Segment>
        </div>

    )
}


export default Header