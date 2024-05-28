import React, { useState } from 'react'
import Miners from './Miners'
import Header from './Header'
import Block from './Block/Block'

export default function Home() {
  const [showMines, setShowMiners] = useState(false)
  const [showBlock, setShowBlock] = useState(false)
  return (
    <div className='w-screen h-auto'>
      <Header setShowMines={setShowMiners} setShowBlock={setShowBlock}></Header>
        <Miners visible={showMines}></Miners>
        <Block visible={showBlock}></Block>
    </div>
  )
}
