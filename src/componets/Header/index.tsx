import S from './styles.module.scss'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg'
import { ActiveLink } from '../ActiveLink'

export function Header() {
  return (
    <header className={S.headerContainer}>
      <div className={S.headerContent}>
        <ActiveLink href="/" activeClassName={S.active}>
          <Image src={logo} alt="Sujeito Programador Logo" />
        </ActiveLink>

        <nav>
          <ActiveLink href="/" activeClassName={S.active}>
            <p>Home</p>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={S.active}>
            <p>Conteúdos</p>
          </ActiveLink>
          <ActiveLink href="/sobre" activeClassName={S.active}>
            <p>Quem somos?</p>
          </ActiveLink>
        </nav>

        <a className={S.readyButton} type='button' href="https://sujeitoprogramador.com">Começar</a>
      </div>
    </header>
  )
}