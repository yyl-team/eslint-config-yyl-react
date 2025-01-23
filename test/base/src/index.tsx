import React, { ComponentProps, useState, ReactNode } from 'react'

interface TextAppProps extends ComponentProps<'div'> {
  headTitle: ReactNode
}

export const TestApp = (_props: TextAppProps) => {
  const [isLoading] = useState(false)
  const [isSub] = useState(false)
  return (
    <div className='outside'>
      {isLoading ? (
        isSub ? (
          <div className={`${isLoading ? 'loading' : ''}`}>hello world</div>
        ) : (
          <span />
        )
      ) : (
        <span />
      )}
    </div>
  )
}
