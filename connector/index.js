const {
  LivrosModel
} = require('../model');
// Simulando uma resposta assincrona de um banco por exemplo 
class Connector {
  static get() {
    return new Promise(_ => _([{
      id: 1,
      name: 'Administering a SQL Database Infrastructure',
      price: 200,
      unit: 'R$',
      autor: 'Victor Isakov',
      category: 'TI',
      sinopse: 'help demonstrate your real-world mastery of skills for database administration. This exam is intended for database administrators charged with installation, maintenance, and configuration tasks.',
      about_author: 'is a Microsoft Certified Master, Microsoft Certified Architect, and Microsoft Certified Trainer. He’s worked with SQL Server since 1994 and is a Microsoft SQL Server MVP. Victor is the author of MCITP Developer: Microsoft SQL Server 2005 Database Solutions Design (Exam 70-441) Study Guide (Sybex, 2006) and co-author of MCITP Administrator:',
      image: 'http://localhost:3000/1.jpg',
      year: 2015
    }, {
      id: 2,
      name: 'The Practical SQL Handbook',
      price: 100,
      unit: 'R$',
      autor: 'Judith S. Bowman; Sandra L. Emerson; Marcy Darnovsky',
      category: 'Database',
      sinopse: 'The Practical SQL Handbook is the best-selling guide to learning SQL, the standard language for accessing information in relational databases. This book not only teaches SQL as it has been established by ANSI standards committees but also as the language is used to solve real business problems',
      about_author: '',
      image: 'http://localhost:3000/2.jpg',
      year: 1996
    }, {
      id: 3,
      name: 'Introduction to SQL',
      price: 80,
      unit: 'R$',
      autor: 'Rick F. van der Lans',
      category: 'TI',
      sinopse: 'is an independent consultant, author, and lecturer specializing in database technology, SQL, and data warehousing. He is managing director of R20/Consultancy. He has been a member of the Dutch ISO committee responsible for developing the SQL standard. For the past 20 years, he has taught SQL classes to thousands of attendees. His popular books, including Introduction to SQL and The SQL Guide to Oracle, have been translated into various languages and have sold more than 100,000 copies.',
      about_author: '',
      image: 'http://localhost:3000/3.jpg',
      year: 1996
    },{
      id: 4,
      name: 'Manual de Análise de Dados',
      price: 400,
      unit: 'R$',
      autor: 'Luiz Paulo',
      category: 'Database',
      sinopse: 'Este livro, em que são abordadas as principais técnicas estatísticas e de modelagem multivariada, é resultado de vários anos de estudo e pesquisa e enfatiza a importância da análise de dados em ambientes acadêmicos e organizacionais, podendo ser considerado o principal fruto de inúmeras discussões e elucubrações sobre a importância da modelagem aplicada voltada à tomada de decisão.',
      about_author: 'Lorem ipsum dolor sit amet',
      image: 'http://localhost:3000/4.jpg',
      year: 2017
    },{
      id: 5,
      name: 'Data Science for Business and Decision Making ',
      price: 700,
      unit: 'R$',
      autor: 'Luiz Paulo Fávero;Patrícia Belfiore ',
      category: 'Big Data',
      sinopse: 'Data Science for Business and Decision Making covers both statistics and operations research while most competing textbooks focus on one or the other. As a result, the book more clearly defines the principles of business analytics for those who want to apply quantitative methods in their work. Its emphasis reflects the importance of regression, optimization and simulation for practitioners of business analytics. Each chapter uses a didactic format that is followed by exercises and answers. ',
      about_author: 'Lorem ipsum dolor sit amet',
      image: 'http://localhost:3000/5.jpg',
      year: 2018
    },{
      id: 6,
      name: 'Análise Multivariada de Dados',
      price: 166,
      unit: 'R$',
      autor: 'Joseph F. Hair Jr.William C. Black, Barry J. Babin, Rolph E. Anderson',
      category: 'Exatas',
      sinopse: 'Nova edição de livro consagrado na área, apresenta um amplo conjunto de técnicas estatísticas. É uma introdução sobre o assunto destinada àqueles sem formação estatística. Os capítulos estão organizados seguindo uma progressão lógica e prática das fases de análise e agrupando tipos de técnicas similares aplicáveis a diversas situações.',
      about_author: 'Professor de marketing da Kennesaw State University. Ele anteriormente ocupou a Alvin C. Copeland Endowed Chair de marketing na Louisiana State University. Foi também membro da United States Steel Foundation na University of Florida, em Gainesville, onde obteve seu Ph.D. em marketing no ano de 1971. Publicou mais de 30 livros, incluindo Marketing (South Western Publishing Company, 8.a edição, 2006), Marketing Essentials (South- Western Publishing Company, 4.a edição, 2005), Essentials of Business Research Methods (Wiley, 2.a edição, no prelo 2006), Marketing Research (Irwin, 3.a edição, 2006), Professional Sales Management (Thompson Learning, 3.a edição, 1999), Sales Management (Random House, 1983) e Effective Selling (South-Western Publishing Company, 8.a edição, 1991).',
      image: 'http://localhost:3000/6.jpg',
      year: 2012
    },{
      id: 7,
      name: 'Estatística aplicada',
      price: 75,
      unit: 'R$',
      autor: 'Patrícia Fávero ',
      category: 'Estatística',
      sinopse: 'Esta obra traz os conceitos de estatística contextualizando-os com a realidade dos cursos de ciências sociais aplicadas. Os autores trazem casos práticos para estimular os alunos no acompanhamento do curso.',
      about_author: 'Lorem Ipsum',
      image: 'http://localhost:3000/7.jpg',
      year: 2019
    },{
      id: 8,
      name: 'A Decifração Genética',
      price: 45,
      unit: 'R$',
      autor: 'Antoine Danchin',
      category: 'Genetica',
      sinopse: 'Que elemento constitui a unidade e a identidade dos seres vivos? Essa é a questão fundamental da biologia. As técnicas recentes de sequenciamento fornecem uma resposta profundamente renovada, em especial graças ao conhecimento preciso de genomas inteiros. O autor aborda, neste trabalho, o quadro desta descoberta essencial. Mostra, em particular, que os organismos vivos, à semelhança da Barca de Delfos, se revelam infinitamente inacessíveis à previsão e capazes de produzir o imprevisto.',
      about_author: 'N/A',
      image: 'http://localhost:3000/8.jpg',
      year: 1999
    },{
      id: 9,
      name: 'Data Science para negócios',
      price: 65,
      unit: 'R$',
      autor: ' Tom Fawcett, Foster Provost, Mariana Boscato',
      category: 'Estatística',
      sinopse: 'Este guia amplo, profundo, porém não muito técnico, apresenta a você os princípios fundamentais do Data Science e orienta-o através do “pensamento analítico” necessário para extrair conhecimento útil e valor de negócios a partir dos dados que você obtém. Ao aprender os princípios do Data Science, você compreenderá as diversas técnicas de mineração de dados usadas hoje. Mais importante ainda, esses princípios sustentam os processos e as estratégias necessárias para resolver problemas de negócios por meio das técnicas de mineração de dados.',
      about_author: `Tom Fawcett é Ph.D. em aprendizagem computacional e trabalhou na indústria R&D por mais de duas décadas (GTE Laboratories, NYNEX/Verizon Labs, HP Labs etc.). Sua obra publicada tornou-se leitura padrão de data science, tanto na metodologia (por exemplo, avaliação de resultados de mineração de dados), quanto nas aplicações (por exemplo, detecção de fraude e filtro de spam).

Foster Provost é Professor e NEC Faculty Fellow na Stern School of Business da NYU, onde leciona sobre Análise de Negócios, Data Science e programas de MBA. Sua premiada pesquisa é amplamente lida e citada. Antes de ingressar na NYU, trabalhou como cientista de dados de pesquisa, durante cinco anos, para a empresa que agora é conhecida como Verizon. Durante a última década, o Professor Provost é cofundador de diversas empresas bem-sucedidas orientadas em data science.`,
      image: 'http://localhost:3000/9.jpg',
      year: 2019
    }]));
  }
}
module.exports = (type) => {
  switch (type) {
    case 'livros':
      return new LivrosModel(Connector);
    default:
      throw new Error('Model not Found!');
  }
};
