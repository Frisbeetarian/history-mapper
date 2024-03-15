import React from 'react'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('../components/MapComponent'), {
  ssr: false,
})

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col`}>
      <MapComponent />
    </main>
  )
}
