import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Home from './home/Home'
import Train from './train/Train'
import Predict from './predict/Predict'
import { useRouter } from 'next/router'
import styles from './styles.module.css'

const App = () => {
  const router = useRouter()
  const { pathname } = router

  return (
    <>
      <Head>
        <title>YoloV6 Model Classifier</title>
      </Head>
      {pathname === '/' && <Home />}
      {pathname === '/train/Train' && <Train />}
      {pathname === '/predict/Predict' && <Predict />}
    </>
  )
}

export default App
