import React from 'react'
import BackgroundGif from "@/components/BackgroundGif";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-7xl">Home Page</h1>
      <BackgroundGif />
    </main>
  )
}