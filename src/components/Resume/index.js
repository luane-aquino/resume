import React, { Component } from 'react';
import Header from '../Header'
import Sidebar from '../Sidebar'
import Experience from '../Experience'

export default class Resume extends Component {
  state = {
    infos: [
      {
        nome: 'Luane Aquino',
        ocupacao: 'Node.js | React',
        resumo: 'Node.js, API, React, Javascript, HTML, CSS',
        perfilProfissional: 'Formada em ciência da computação, desenvolvendo projetos pessoais em Node.js e React',
        contatos: [
          {
            id: 1,
            tipo: 'telefone',
            contato: '66 99716-9562'
          },
          {
            id: 2,
            tipo: 'email',
            contato: 'luane.aquino.br@gmail.com'
          }
        ],
        educacao: [
          {
            id: 1,
            instituicao: 'Universidade do Estado de Mato Grosso',
            curso: 'Ciência da computação'
          }
        ],
        experiencia: [
          {
            id: 1,
            cargo: 'Instrutora de informática aplicada',
            periodo: 'Out/Nov 2019',
            empresa: 'SENAI',
            local: 'Tangará da serra-MT',
            conteudo: 'Ministrar a disciplina de informática aplicada no curso de assistente administrativo.',
            atual: false
          },
          {
            id: 2,
            cargo: 'Estágio supervisionado',
            periodo: 'Jul 2017 - Jan 2018',
            empresa: 'UNEMAT',
            local: 'Barra do bugres-MT',
            conteudo: 'Desenvolvimento de aplicativo android utilizando linguagem java',
            atual: false
          },
          {
            id: 3,
            cargo: 'Agente de pesquisas e mapeamento',
            periodo: 'Jan 2017 - Dez 2019',
            empresa: 'IBGE',
            local: 'Barra do bugres-MT',
            conteudo: 'Visitação a domicílios e estabelecimentos de qualquer natureza de acordo com o tema a ser pesquisado, visando à geração de estatísticas.',
            atual: false
          },
          {
            id: 4,
            cargo: 'Suporte técnico',
            periodo: 'Jan 2016 - Out 2016',
            empresa: 'Solução Sistemas',
            local: 'Tangará da serra-MT',
            conteudo: 'Atendimento aos chamados de clientes. Garantir a atualização, disponibilidade e estabilidade do software.',
            atual: false
          }
        ]
      }
    ]
  }

  render() {
    const infos = this.state.infos[0]

    return (
      <main>
        <Header conteudo={infos} />
        <Sidebar contatos={infos.contatos} educacao={infos.educacao} />
        <Experience experiencia={infos.experiencia} />
      </main>
    );
  }
}