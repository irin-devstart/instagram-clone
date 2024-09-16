import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'
import UserDetail from '../../molecules/UserStory'

type TUser = {
  id: number
  name: string
  pict: string
}
interface Props {
  users: TUser[]
  onClick: (id: number) => void
}
const UserStories = ({ users, onClick }: Props) => {
  const classNameProps = classNames(styles.wrapperUserStories)

  return (
    <div className={classNameProps}>
      {users.map(({ id, ...user }) => (
        <UserDetail key={id} onClick={() => onClick(id)} {...user} />
      ))}
    </div>
  )
}

export default UserStories
