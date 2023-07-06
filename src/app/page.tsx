'use client'
import Dashboard from '@/components/Dashboard'
import { Logo } from '@/components/Logo'
import styled from 'styled-components'

export default function Home() {
  return (
    <HomeContainer>
      <Logo />
      <Dashboard />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 2rem;
`