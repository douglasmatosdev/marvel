'use client'
import Dashboard from '@/Components/Dashboard'
import { Logo } from '@/Components/Logo'
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