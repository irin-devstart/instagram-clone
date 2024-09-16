import React, { ReactNode } from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

type TFontSize = 'small' | 'medium' | 'large'
type TColor = 'primary' | 'warning' | 'default' | 'error'
type TAlign = 'center' | 'inherit' | 'justify' | 'left' | 'right'
type TVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface Props {
  className?: string
  fontSize?: TFontSize
  children: ReactNode
  color?: TColor
  align?: TAlign
  variant?: TVariant
  isBold?: boolean
}
const Typography = ({
  className,
  fontSize = 'medium',
  children,
  color = 'default',
  align = 'left',
  variant,
  isBold,
}: Props) => {
  const classNameProps = classNames(
    styles.typography,
    styles[fontSize],
    className,
    styles[color],
    styles[align],
    {
      [styles.bold]: isBold,
    },
  )
  //   const variantMapping = variant
  return <h6 className={classNameProps}>{children}</h6>
}

export default Typography
