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

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`