
import { GetStaticProps } from 'next';
import Head from 'next/head';
import S from '../styles/home.module.scss'

import Image from 'next/image'

import techsImage from '../../public/images/techs.svg'

import { getPrismicClient } from '../services/prismic'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'


type Content = {
  title: string
  subtitle: string
  linkAction: string
  titleMobile: string
  contentMobile: string
  mobileBanner: string
  titleWeb: string
  webContent: string
  webBanner: string
}
interface ContentProps {
  content: Content
}

export default function Home({ content }: ContentProps) {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia</title>
      </Head>
      <main className={S.container}>
        <div className={S.containerHeader}>
          <section>
            <h1>{content.title}</h1>
            <span>{content.subtitle}</span>
            <a href={content.linkAction} target='_blank'>
              <button>COMEÇAR AGORA!</button>
            </a>
          </section>

          <img src="/images/banner-conteudos.png" alt="Conteúdos" />
        </div>

        <hr className={S.divisor} />

        <div className={S.sectionContent}>
          <section>
            <h2>{content.titleMobile}</h2>
            <span>{content.contentMobile}</span>
          </section>

          <img src={content.mobileBanner} alt="Conteúdos de desenvolvimento Mobile" />
        </div>

        <hr className={S.divisor} />

        <div className={S.sectionContent}>
          <img src={content.webBanner} alt="Desenvolvimento de desenvolvimento Mobile" />

          <section>
            <h2>{content.titleWeb}</h2>
            <span>{content.webContent}</span>
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'home')
  ])

  const { title, subtitle, linkaction, titlemobile, contentmobile, mobilebanner, titleweb, webcontent, webbanner } = response.results[0].data

  const content = {
    title: RichText.asText(title),
    subtitle: RichText.asText(subtitle),
    linkAction: linkaction.url,
    titleMobile: RichText.asText(titlemobile),
    contentMobile: RichText.asText(contentmobile),
    mobileBanner: mobilebanner.url,
    titleWeb: RichText.asText(titleweb),
    webContent: RichText.asText(webcontent),
    webBanner: webbanner.url
  }

  return {
    props: {
      content
    },
    revalidate: 60 * 2 // regerada a cada 2 minutos
  }
}
