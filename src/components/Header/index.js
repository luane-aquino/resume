import React from 'react';
import ProfilePicture from "../../images/profile_picture.png";

export default function Header(props) {
  const { nome, ocupacao, resumo, perfilProfissional } = props.conteudo
  return (
    <>
      <div className="perfil">
        <img src={ProfilePicture} alt="Perfil" />
      </div>
      <div className="biografia">
        <h1>
          {nome}
        </h1>
        <div className="ocupacao">{ocupacao}</div>
        <p>{resumo}</p>
      </div>

      <div className="titulo">
        Perfil <br /> Profissional
      </div>

      <div className="perfil-profissional">
        <p>
          {perfilProfissional}
        </p>
      </div>
    </>
  );
}