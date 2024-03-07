
import Head from 'next/head';
import S from '../styles/home.module.scss'

import Image from 'next/image'

import techsImage from '../../public/images/techs.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia</title>
      </Head>
      <main className={S.container}>
        <div className={S.containerHeader}>
          <section>
            <h1>Levando você para o próximo nível!</h1>
            <span>Uma plataforma com cursos que vão do zero até o profissional na prática, direto ao ponto aplicando o que usamos no mercado de trabalho.</span>
            <a>
              <button>COMEÇAR AGORA!</button>
            </a>
          </section>

          <img src="/images/banner-conteudos.png" alt="Conteúdos" />
        </div>

        <hr className={S.divisor} />

        <div className={S.sectionContent}>
          <section>
            <h2>Aprenda criar aplicativos para Android e iOS</h2>
            <span>Você vai descobrir o jeito mais moderno de desenvolver apps nativos para iOS e Android, construindo aplicativos do zero até aplicativos</span>
          </section>

          <img src="/images/financasApp.png" alt="Conteúdos de desenvolvimento Mobile" />
        </div>

        <hr className={S.divisor} />

        <div className={S.sectionContent}>
          <img src="/images/webDev.png" alt="Desenvolvimento de desenvolvimento Mobile" />

          <section>
            <h2>Aprenda criar sistemas web</h2>
            <span>Criar sistemas, sites usando as tecnologias mais modernas e requisitadas pelo mercado</span>
          </section>
        </div>

        <div className={S.nextLevelContent}>
          <Image src={techsImage} alt="Tecnologias" />
          <h2>Mais de <span>15 mil</span> já levaram sua carreira ao próximo nível</h2>
          <span>E você vai perder a chance de evoluir de uma vez por todas?</span>
          <a href="/">
            <button>ACESSAR TURMA!</button>
          </a>
        </div>
      </main>
    </>
  );
}
