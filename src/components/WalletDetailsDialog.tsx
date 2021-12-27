import React, { useState, useEffect } from 'react'
import { makeStyles, Typography, Grid } from '@material-ui/core'
import { Button } from '@components/controls'
import Form from '@components/common/Form'
import WalletDetailsTable from '@components/common/UseTable'
import PopupDialog from '@components/common/Dialog'

import { useWeb3React } from '@web3-react/core'
import { formatEther } from '@ethersproject/units'
import { getInjectedConnector } from '../utils/blockchain/connectors'

const useStyles = makeStyles(theme => ({
  formContainer: {
    maxWidth: 'xs',
    margin: theme.spacing(1)
  },
  actionButton: {
    width: '100%'
  }
}))

function createData(key: string, value: string | number) {
  return { key, value }
}

const WalletNotConnected = () => {
  return (
    <>
      <Typography>Wallet not connected.</Typography>
      <Typography>Please click the "Connect" button below</Typography>
    </>
  )
}

export const ConnectWalletDialog = props => {
  const { handleSubmit, setOpenPopup, openPopup } = props
  const classes = useStyles()

  const { library, chainId, account, activate, deactivate, active } =
    useWeb3React()

  const [walletData, setWalletData] = useState([])

  const connect = async e => {
    e.preventDefault()
    try {
      await activate(getInjectedConnector())
    } catch (error) {
      console.error('Error connecting', error)
    }
  }

  useEffect((): any => {
    if (!!account && !!library) {
      let stale = false

      library
        .getBalance(account)
        .then((balance: any) => {
          const uBalance = !stale && balance ? `Ξ${formatEther(balance)}` : ''
          const uAcct =
            account === null
              ? '-'
              : account
              ? `${account.substring(0, 6)}...${account.substring(
                  account.length - 4
                )}`
              : ''

          setWalletData([
            createData('Account', uAcct),
            createData('Chain ID', chainId),
            createData('Balance', uBalance)
          ])
        })
        .catch(() => {
          if (!stale) {
          }
        })

      return () => {
        stale = true
      }
    }
  }, [account, library, chainId])

  return (
    <div>
      <PopupDialog
        title={'Wallet Details'}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <Form onSubmit={handleSubmit}>
          <Grid container className={classes.formContainer}>
            {active ? (
              <>
                <Grid container justifyContent="flex-end" spacing={1}>
                  <Grid item xs={12}>
                    <WalletDetailsTable data={walletData} />
                  </Grid>
                </Grid>
                <Grid container justifyContent="center">
                  <Typography>Wallet Details</Typography>
                </Grid>
              </>
            ) : (
              <WalletNotConnected />
            )}
          </Grid>
          <Grid
            container
            justifyContent="center"
            spacing={1}
            style={{ marginTop: 20 }}
          >
            {!active && (
              <>
                <Grid item xs={6}>
                  <Button
                    onClick={connect}
                    className={classes.actionButton}
                    type="submit"
                    text="Connect"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button
                    text="Cancel"
                    color="default"
                    className={classes.actionButton}
                    onClick={() => {
                      setOpenPopup(false)
                    }}
                  />
                </Grid>
              </>
            )}
            {active && (
              <Grid item xs={12}>
                <Button
                  text="Disconnect"
                  className={classes.actionButton}
                  style={{ backgroundColor: '#e50d2a' }}
                  onClick={() => deactivate()}
                />
              </Grid>
            )}
          </Grid>
        </Form>
      </PopupDialog>
    </div>
  )
}

export default ConnectWalletDialog
