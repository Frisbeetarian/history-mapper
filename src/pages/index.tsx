import React, { useMemo } from 'react'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('../components/MapComponent'), {
  ssr: false,
})

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const MapComponentReact = useMemo(
    () =>
      dynamic(() => import('@/components/MapComponent'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  )
  return <MapComponent />
}
