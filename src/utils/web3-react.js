import { Web3Provider } from '@ethersproject/providers'

import { POLLING_INTERVAL } from '../config/constants/connectors'

export const getLibrary = provider => {
  const library = new Web3Provider(provider)

  library.pollingInterval = POLLING_INTERVAL
  return library
}
