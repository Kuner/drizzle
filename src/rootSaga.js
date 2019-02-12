import accountsSaga from './accounts/accountsSaga'
import accountBalancesSaga from './accountBalances/accountBalancesSaga'
import blocksSaga from './blocks/blocksSaga'
import contractsSaga from './contracts/contractsSaga'
import drizzleStatusSaga from './drizzleStatus/drizzleStatusSaga'
import web3Saga from './web3/web3Saga'

export default [
  accountsSaga,
  accountBalancesSaga,
  blocksSaga,
  contractsSaga,
  drizzleStatusSaga,
  web3Saga
]
