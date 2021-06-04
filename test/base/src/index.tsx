import React, { ComponentProps } from 'react'

interface TextAppProps extends ComponentProps<'div'> {
  headTitle: string | JSX.Element
}

export const TestApp = (props: TextAppProps) => {
  return <div>hello world</div>
}
