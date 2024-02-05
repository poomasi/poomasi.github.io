import styled from '@emotion/styled'

import { Outlet } from 'react-router-dom'

interface HeaderProps {
  children?: React.ReactElement
}

export function Header({ children }: HeaderProps) {
  const toHome = () => {
    window.location.href = 'https://poomasi.github.io/'
  }

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <div onClick={toHome} style={{ fontSize: '40px', cursor: 'pointer' }}>
            ㉬
          </div>
        </HeaderContent>
      </HeaderContainer>
      {children || <Outlet />}
    </>
  )
}

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 5% 0 5%;
  width: 100%;
  height: 80px;
  background-color: white;

  z-index: 999;
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
`
