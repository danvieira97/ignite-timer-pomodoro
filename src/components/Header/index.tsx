import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logoTimer from '../../assets/logo-timer.svg'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logoTimer} alt="" width={48} height={48} />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
