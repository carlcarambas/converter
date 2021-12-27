import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 0,
    margin: theme.spacing(0.5)
  },
  secondary: {
    backgroundColor: '#fffff',
    '& .MuiButton-label': {
      color: theme.palette.primary.main
    },
    '& .MuiButton-label:hover': {
      color: theme.palette.secondary.main
    }
  },
  primary: {
    backgroundColor: theme.palette.primary.light,
    '& .MuiButton-label': {
      color: theme.palette.primary.main
    }
  }
}))

export const ActionButton = props => {
  const { color, children, onClick } = props
  const classes = useStyles()

  return (
    <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
      {children}
    </Button>
  )
}

export default ActionButton
