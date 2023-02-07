const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/allefrodrigo/',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Allef Schmidt',
  role: 'Um desenvolvedor Frontend ',
  description:
  'Meu foco é desenvolvimento web e APIs. Tenho familiaridade com JavaScript, Typescript e Python, sempre utilizando frameworks e ferramentas (React, Redux, FastAPI, Flask, Express, Axios, Vue.js, Node.js, Webpack e Babel.js), além de DevOps/implantação na nuvem (principalmente no Heroku). Também tenho 3 anos de experiência em arquitetura, desenvolvimento, implantação e manutenção de aplicativos móveis usando React Native (iOS e Android).',
  social: {
    linkedin: 'https://www.linkedin.com/in/schmidt-maker/',
    github: 'https://github.com/allefrodrigo/',
  },
  teste: 'String teste'
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Tenis4You - Site Institucional',
    description:
      'Site institucional para uma empresa de aulas de tênis, com foco sistema ágil de comunicação via whatsapp, email e telefone',
    stack: ['TypeScript', 'React', 'Material Design'],
    // sourceCode: 'https://github.com',
     livePreview: 'http://www.tenis4you.pt/',
  },
  {
    name: 'Calculadora de notas para o ENEM',
    description:
      'Através do peso divulgado pelas instituições de ensino superior, o usuário consegue saber sua nota antes do resultado oficial',
      stack: ['TypeScript', 'React', 'Material Design'],
    //   sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Whatsapp Bot',
    description:
      'BOT de Whatsapp para envio de mensagens automáticas, contendo também ferramentas diversas para consultas de dados e envio de mensagens',
    stack: ['Axios', 'NodeJS'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Gerador de Cartaz de Supermercado',
    description:
      'Sistema para criação de cartazes de supermercado, com foco em agilidade e simplicidade',
      stack: ['TypeScript', 'React', 'Material Design'],
    //   sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Gerador de Certificado de Eventos',
    description:
      'Sistema para criação de certificados de eventos de maneira intuitiva e rápida',
      stack: ['TypeScript', 'React', 'Material Design'],
    //   sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Analise de dados de Futebol',
    description:
      'Script para análise de dados de futebol, utilizando a API do Statsbomb, com foco em visualização de dados',
    stack: ['Python', 'Scrapy', 'Statsbomb'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'dev.allefschmidt@gmail.com',
}

export { header, about, projects, skills, contact }
