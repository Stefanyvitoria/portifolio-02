/**
 * @author Stefany izidio
 * @contact izidiostefany@gmail.com
 * @date 29/01/2022
 */

import Styles from './sobre.module.css';

export default function Sobre() {


    return(
        <section id='sobre' className={Styles.sobre}>
            <h2 className={Styles.title}>Sobre Mim</h2>
            <p className={Styles.text}> 
                Concluí o ensino médio em 2018 e ingressei na universidade em 2019, 
                profissionalmente sou uma pessoa com facilidade e experiência em 
                trabalho em equipe, tenho perfil de liderança e naturalmente assumo esse papel 
                quando necessário , sou flexível e busco sempre o crescimento e a autorrealização.
            </p>
        </section>
    );
}