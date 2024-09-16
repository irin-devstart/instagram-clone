import React from 'react'
import classNames from 'classnames'
import Image from '../../atoms/image'
import Typography from '../../atoms/typography'
import styles from './style.module.css'

interface Props {
  onClick?: () => void
  name: string
  pict: string
}
const UserStory = ({ onClick, name, pict }: Props) => {
  const classNameProps = classNames(styles.userStoryWrapper)
  return (
    <div className={classNameProps} onClick={onClick}>
      <Image source={pict} rounded='xl' size='small' isShowBorder />
      <Typography fontSize='small'>{name.slice(0, 10)}</Typography>
    </div>
  )
}

export default UserStory
