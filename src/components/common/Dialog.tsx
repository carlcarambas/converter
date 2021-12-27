import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Typography,
  Grid
} from '@material-ui/core'
import { ActionButton, Button } from '@components/controls'
import Form from '@components/common/Form'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(theme => ({
  dialogWrapper: {
    padding: theme.spacing(1),
    position: 'absolute',
    top: theme.spacing(5)
  },
  dialogTitle: {
    paddingRight: '0px'
  }
}))

export const Popup = props => {
  const { title, children, openPopup, setOpenPopup } = props
  const classes = useStyles()

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Dialog
      open={openPopup}
      onClose={() => setOpenPopup(false)}
      maxWidth="xs"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: 'flex' }}>
          <Typography
            variant="h6"
            component="div"
            style={{ flexGrow: 1, alignSelf: 'center' }}
          >
            {title}
          </Typography>
          <ActionButton
            color="secondary"
            onClick={() => {
              setOpenPopup(false)
            }}
          >
            <CloseIcon />
          </ActionButton>
        </div>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

export default Popup
