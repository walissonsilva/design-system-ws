import React, { ReactNode } from "react";

interface TitleProps {
  color?: 'red' | 'default'
  children: ReactNode
}

export function Title({
  color = 'default',
  children
}: TitleProps) {
  return (
    <h1 style={{color: color}}>{ children }</h1>
  )
}