import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root, .MuiGrid-container': {
      width: '98%',
      margin: theme.spacing(1)
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: theme.palette.info.dark
    },

    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.info.main
    }
  }
}))

const checkKeyDown = e => {
  if (e.code === 'Enter') e.preventDefault()
}

export function Form(props) {
  const classes = useStyles()
  const { children, ...other } = props
  return (
    <form
      className={classes.root}
      onKeyDown={e => checkKeyDown(e)}
      autoComplete="off"
      {...other}
    >
      {props.children}
    </form>
  )
}

export default Form
