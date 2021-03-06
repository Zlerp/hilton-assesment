import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import RoomsForm from "../components/rooms-form";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />

      <RoomsForm/>
  </div>
)

export default Home
