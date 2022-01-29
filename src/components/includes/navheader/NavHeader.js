/**
 * @author Stefany izidio
 * @contact izidiostefany@gmail.com
 * @date 29/01/2022
 */

import Styles from './NavHeader.module.css'
import React from 'react';
import { HiMenu } from "react-icons/hi";
import logo from '../../../assets/img/logos/logo-small-black.png'

export default function NavHeader() {

    let [width, setWidth] = React.useState(
        (window.innerWidth > 0)? window.innerWidth : window.screen.width
    );
    
    window.onresize = (e) => setWidth(width = window.innerWidth > 0? window.innerWidth : window.screen.width);
    
    return(
    <nav className={Styles.navheader + ' bg_color_main'}>
        <div className='container'>
            {(width > 450)
            ?<div className={Styles.navheader_menus}>
                <p className={Styles.text}>Olá</p>
                <p className={Styles.text}>Sobre mim</p>
                <p className={Styles.text}>Projetos</p>
                <p className={Styles.text}>Skills</p>
                <p className={Styles.text}>Contato</p>
            </div>
            :<div className={Styles.navheader_menus_drop}>
                <img src={logo} alt='Logo' className={Styles.logo} />
                <div className={ "btn-group" + Styles.border } >
                    <button type="button" className={Styles.menu_icon} data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                        <HiMenu />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                        <li><p className={Styles.text + ' bg_hover'}>Olá</p></li>
                        <li><p className={Styles.text + ' bg_hover'}>Sobre mim</p></li>
                        <li><p className={Styles.text + ' bg_hover'}>Projetos</p></li>
                        <li><p className={Styles.text + ' bg_hover'}>Skills</p></li>
                        <li><p className={Styles.text + ' bg_hover'}>Contato</p></li>    
                    </ul>
                </div>
            </div>}
        </div>
    </nav>
    );
}