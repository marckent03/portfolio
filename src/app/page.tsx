import Approach from '@/components/Approach'
import Blogs from '@/components/Blogs'
import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import { FloatingNav } from '@/components/ui/FloatingNav'
import { navItems } from '@/data'
import Head from 'next/head'
import React from 'react'
import { FaHome } from 'react-icons/fa'

const HomePage = () => {
  return (
    <main className="relative bg-white flex
    justify-center items-center felx-col overflow-hidden
    mx-auto sm:px-10">
        <div className="text-white max-w-7xl w-full">
            <Head>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <FloatingNav
            navItems={navItems}
            />
            <Hero/>
            <Grid/>
            <Approach />
            <Services />
            <Blogs />
            <Footer />
        </div>
    </main>
  )
}

export default HomePage
