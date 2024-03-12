import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import S from './posts.module.scss'

import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi'

import thumbImg from '../../../public/images/thumb.png'

export default function Posts() {
  return (
    <>
      <Head>
        <title>
          Blog | Sujeito Programador
        </title>
      </Head>
      <main className={S.container}>
        <div className={S.posts}>
          <Link href={'/'}>
            <div>
              <Image src={thumbImg} alt={'Post titulo 1'} width={720} height={410} quality={100} />
              <strong>Criando meu primeiro aplicativo</strong>
              <time>14 DE JULHO</time>
              <p>teste</p>
            </div>
          </Link>
          <Link href={'/'}>
            <div>
              <Image src={thumbImg} alt={'Post titulo 1'} width={720} height={410} quality={100} />
              <strong>Criando meu primeiro aplicativo</strong>
              <time>14 DE JULHO</time>
              <p>teste</p>
            </div>
          </Link>
        </div>
        <div className={S.buttonNavigate}>
          <div>
            <button>
              <FiChevronsLeft size={25} color='#fff' />
            </button>
            <button>
              <FiChevronLeft size={25} color='#fff' />
            </button>
          </div>
          <div>
            <button>
              <FiChevronRight size={25} color='#fff' />
            </button>
            <button>
              <FiChevronsRight size={25} color='#fff' />
            </button>
          </div>
        </div>

      </main>
    </>
  )
}