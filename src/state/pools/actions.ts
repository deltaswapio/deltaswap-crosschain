import { createAction } from '@reduxjs/toolkit'

// export const poolLiquidity = createAction<{poolLiquidity:any}>('pools/liquidity')
export const poolList = createAction<{chainId:any, tokenList:any, version:any}>('pools/poolList')
// eslint-disable-next-line @typescript-eslint/ban-types
export const updatePoollistTime = createAction<{}>('lists/updatePoollistTime')