import { Inter } from 'next/font/google'
import { TopContainer } from '@/container/Top'
import { FC } from 'react'
import { useCapture } from './hooks/use-first-view'

export const CaptureContainer: FC = () =>  {
  useCapture();

  return (
    <>
    </>
  )
}
