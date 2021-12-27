import React, { useState } from 'react'
import useEffectOnce from '@utils/useEffectOnce'
import CurrencyRow from '@components/CurrencyRow'
import WalletDetails from '@components/WalletDetailsDialog'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import { Grid, Button, FormControl, Container } from '@mui/material'
import { LinearProgress } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const CURRENCY_RATES = {
  NEP: 1,
  BUSD: 3
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    checkDetailsButton: {
      marginTop: 15,
      minHeight: '3em',
      backgroundColor: '#ffff',
      boxShadow: 'none',
      color: '#0da9dd',
      '&:hover': {
        backgroundColor: '#fff',
        border: '1px solid'
      }
    },
    swapIcon: {
      margin: '1em auto 0 auto'
    }
  })
)

const MainLayout = () => {
  const classes = useStyles()
  const [fromCurrency, setFromCurrency] = useState<string>()
  const [toCurrency, setToCurrency] = useState<string>()
  const [exchangeRate, setExchangeRate] = useState<number>()
  const [fromAmount, setFromAmount] = useState<string | number>(
    CURRENCY_RATES['NEP']
  )
  const [toAmount, setToAmount] = useState<string | number>(
    CURRENCY_RATES['BUSD']
  )

  const [modalOpen, setModalOpen] = useState<boolean>(false)

  useEffectOnce(() => {
    setFromCurrency('NEP')
    setToCurrency('BUSD')
    setExchangeRate(CURRENCY_RATES['BUSD'])
  })

  function handleFromAmountChange(e) {
    let value = e.target.value
    let toValue = fromCurrency === toCurrency ? value : value * exchangeRate
    setFromAmount(value)
    setToAmount(Number(toValue).toFixed(2))
  }

  function handleToAmountChange(e) {
    let value = e.target.value
    let fromValue = fromCurrency === toCurrency ? value : value / exchangeRate
    setToAmount(value)
    setFromAmount(Number(fromValue).toFixed(2))
  }

  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <h2>Crypto Converter</h2>
        <FormControl fullWidth>
          <CurrencyRow
            currencyOptions={['NEP']}
            selectedCurrency={fromCurrency}
            onChangeCurrency={e => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
          />
          <div className={classes.swapIcon}>
            <SwapHorizIcon />
          </div>

          <CurrencyRow
            currencyOptions={['BUSD']}
            selectedCurrency={toCurrency}
            onChangeCurrency={e => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
          />

          <Button
            color="primary"
            variant="contained"
            type="submit"
            className={classes.checkDetailsButton}
            onClick={() => setModalOpen(true)}
          >
            Check Wallet Details
          </Button>
        </FormControl>
      </Grid>
      <WalletDetails
        title={'Wallet Details'}
        openPopup={modalOpen}
        setOpenPopup={setModalOpen}
      />
    </Container>
  )
}

export default MainLayout
