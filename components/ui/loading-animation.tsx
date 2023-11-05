
"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import { grid } from 'ldrs'

grid.register()
const LoadingInfinite = () => {
  const {theme} = useTheme()
  return (
    <div>
        <l-grid
  size="60"
  speed="1.5" 
  color={theme === 'dark' ? "white" : theme === 'light' ? "black" : "gray"} 
></l-grid>
        
    </div>
  )
}

export default LoadingInfinite