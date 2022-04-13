import { useState } from 'react'
import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"></img>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>


      </Content>
    </Container>
  )
}