/**
 * @author Stefany izidio
 * @contact izidiostefany@gmail.com
 * @date 29/01/2022
 */

import Styles from './experiencia.module.css';

export default function Experiencia() {


    return(
        <section id='experiencia' className={Styles.experiencia}>
            <p className={Styles.title}>Experiências/voluntáriados</p>
            
            <ul className={Styles.experiencias}>
                <li>
                    <p className={Styles.ex_title}>Estagiária de desenvolvimento de software.</p>
                    <text>
                        Na Capricche atuo principalmente com desenvolvimento web. 
                        Estão entre as minhas atividades o desenvolvimento,
                        teste e validação de aplicações corporativas, a estruturação de bancos de dados 
                        e o controle do versionamento das aplicações.
                    </text>
                </li>

                <li>
                    <p className={Styles.ex_title}>Monitoria.</p>
                    <text>
                        Durante o período de setembro de 2020 a julho de 2021 atuei como monitora 
                        da disciplina "Fundamentos Matemáticos para Sistemas de Informação" na UFRPE.
                        Foi um bom desafio e nele tive a oportunidade de auxiliar meus colegas de curso 
                        e ter uma experiência de docência que me agregou tanto profissionalmente como academicamente.
                    </text>
                </li>

                <li>
                    <p className={Styles.ex_title}>Monitoria.</p>
                    <text>
                        De 2016 a 2017 atuei como monitora voluntária no laboratório de matemática da 
                        EREM Mária de Céu Bandeira. 
                        Foi uma ótima experiência que sem dúvidas ajudou no meu desenvolvimento lógico e 
                        comportamental.
                    </text>
                </li>
            </ul>
        </section>
    );
}