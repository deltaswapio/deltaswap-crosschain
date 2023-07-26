import { createAction } from '@reduxjs/toolkit'

export const nftlist = createAction<{ chainId: any; tokenList: any, version:any }>('nft/nftlist')
export const nftlistinfo = createAction<{ chainId: any; tokenList: any}>('nft/nftlistinfo')
// eslint-disable-next-line @typescript-eslint/ban-types
export const updateNftlistTime = createAction<{}>('nft/updateNftlistTime')
