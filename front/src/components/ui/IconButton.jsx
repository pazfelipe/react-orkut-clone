import React from 'react'

const IconButton = props => {
  const icon = `mdi ${props.icon}`
  const classes = `btn ${props.classes ? props.classes.join(' ') : ''}`

  return (
    <button
      type={props.type || 'button'}
      className={classes}
      onClick={props.onClick}
    >
      <span>{props.label}</span>
      <i className={icon} ></i>
    </button>
  )
}

export default IconButton