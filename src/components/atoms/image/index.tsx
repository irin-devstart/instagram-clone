import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

type TRounded = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type TSize = 'small' | 'medium' | 'large'

const roundedList: Record<TRounded, string> = {
  xs: 'rounded-xs',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
}

interface Props {
  source: string
  rounded: TRounded
  className?: string
  size?: TSize
  isShowBorder?: boolean
}
const Image = ({ source, rounded, className, size = 'medium', isShowBorder }: Props) => {
  const classNameProps = classNames(
    styles.image,
    styles[roundedList[rounded]],
    styles[size],
    className,
    {
      [styles.border]: isShowBorder,
    },
  )
  return <img src={source} className={classNameProps} />
}

export default Image
