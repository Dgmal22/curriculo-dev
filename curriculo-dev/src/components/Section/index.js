import React from 'react';
import './styles.css';
import Title from '../Title';
import Card from '../Card';
import Repo from '../Repo';

const Section = () => (
  <>
    <section id="about">
      <Title texto="Diego Araújo Dos Santos" />

      <Title texto="CONTATOS" />
      <div className="info">
        <span> diego01araujo@gmail.com</span>
        <br />
        Guanhães - MG - (33)988813228
      </div>
      <p>
        Olá! Meu nome é Diego, tenho 33 anos, estou cursando Sistemas de
        Informação, tenho formação como técnico em informática, ótima
        comunicação, trabalho em equipe e determinação. Atualmente trabalho em
        uma empresa de celulose, porém, não na área de TI. Amo ciclismo,
        videogames e violão.
      </p>
    </section>
    <section id="experience">
      <Title texto="Experiência" />
      <Card
        suTitle="Cenibra Logística"
        data="Dezembro 2023 - Atual"
        suTitleH3="Motorista"
        info="Motorista de caminhão comboio"
      />
    </section>
    <section id="skills">
      <Title texto="HABILIDADES" />
      <div className="Habilidades" id="skills">
        <h1>
          Adquiro conhecimento rápido, trabalho sob pressão, sou comunicativo!
        </h1>
      </div>
    </section>
    <section id="projects">
      <Title texto="PROJETOS" />
      <div className="Projetos" id="projects">
        <h1>
          Atualmente, como ainda estou concluindo meus estudos, não possuo
          projetos realizados!
        </h1>
      </div>
    </section>
    <section id="repo">
      <Title texto="Repositórios GitHub" />
      <Repo />
    </section>
  </>
);

export default Section;
