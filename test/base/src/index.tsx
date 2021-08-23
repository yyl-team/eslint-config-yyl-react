import React, { ComponentProps, useState } from 'react'

interface TextAppProps extends ComponentProps<'div'> {
  headTitle: string | JSX.Element
}

export const TestApp = (props: TextAppProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSub, setIsSub] = useState(false)
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
