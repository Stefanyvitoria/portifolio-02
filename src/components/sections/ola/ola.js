/**
 * @author Stefany izidio
 * @contact izidiostefany@gmail.com
 * @date 29/01/2022
 */

import Styles from './ola.module.css';

export default function Ola() {


    return(
        <section id='ola' className={Styles.ola}>
            <h2 className={Styles.title}>Olá, mundo!</h2>
            <p className={Styles.text}>
                Sou Stefany, uma jovem de 20 anos que está tentando se tornar 
                uma desenvolvedora. Atualmente eu trabalho como  estagiária de 
                desenvolvimento fullStack na <a href='https://capricche.com.br'> 
                Capricche S.A.</a>. Estou no 5° período da graduação de Bacharel 
                em Sistemas de Informação e sou completamente apaixonada pela área. 
                Sou uma pessoa que gosta de desafios e adoro resolver problemas complexos. 

            </p>
            <div className={Styles.c_button}>
                <a target='blank' download='Stefany-Izidio' className={Styles.button + ' bg_color_main'} href='https://stefanyizidio.xyz/curriculo.pdf'>
                    Download CV
                </a>
            </div>
        </section>
    );
}