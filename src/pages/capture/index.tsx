import { Inter } from 'next/font/google'
import { CaptureContainer } from '@/container/Capture'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <CaptureContainer />
    </>
  )
}
