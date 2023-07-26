import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import {thousandBit} from '../../utils/tools/tools'
import { useActiveWeb3React } from '../../hooks'
import BulbIcon from '../../assets/images/icon/bulb.svg'
import config from '../../config'
import {BigAmount} from '../../utils/formatBignumber'

const SubCurrencySelectBox = styled.div`
  width: 100%;
  object-fit: contain;
  border-radius: 0.5625rem;
  border: solid 0.5px ${({ theme }) => theme.tipBorder};
  background-color: ${({ theme }) => theme.tipBg};
  padding: 1rem 1.25rem;
  margin-top: 0.625rem;

  .tip {
    ${({ theme }) => theme.flexSC};
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.tipColor};
    padding: 2px 20px 18px;
    border-bottom: 1px solid #f1f6fa;
    word-break:break-all;
    img {
      display:inlne-block;
    }
    p {
      ${({ theme }) => theme.flexSC};
      flex-wrap:wrap;
      display:inline-block;
      margin: 0;
      line-height: 1rem;
      .span {
        text-decoration: underline;
        margin: 0 5px;
      }
      a {
        display:inline-block;
        overflow:hidden;
        height: 1rem;
      }
    }
  }
  .list {
    margin:0;
    padding: 0 0px 0;
    font-size: 12px;
    color: ${({ theme }) => theme.tipColor};
    dt {
      ${({ theme }) => theme.flexSC};
      font-weight: bold;
      line-height: 1.5;
      img {
        margin-right: 8px;
      }
    }
    dd {
      font-weight: 500;
      line-height: 1.83;
      i{
        display:inline-block;
        width:4px;
        height: 4px;
        border-radius:100%;
        background:${({ theme }) => theme.tipColor};
        margin-right: 10px;
      }
    }
  }
  ${({ theme }) => theme.mediaWidth.upToLarge`
    padding: 1rem 0.5rem;
    .list {
      dd {
        margin-left: 20px;
      }
    }
  `};
`


const FeeBox = styled.div`
  width: 100%;
  object-fit: contain;
  border-radius: 0.5625rem;
  border: solid 0.5px ${({ theme }) => theme.tipBorder};
  background-color: ${({ theme }) => theme.tipBg};
  padding: 0.8rem 1rem;
  margin: 5px 0;
  
  margin-top: 0.625rem;
  font-size: 12px;
  color: ${({ theme }) => theme.tipColor};
`

interface ReminderType {
  destConfig: any,
  bridgeType: string | undefined,
  currency: any,
  selectChain?: any
  version?: any
  fee?: any
}

function CrossBridge ({destConfig, currency, bridgeType}:any) {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()
  
  if (!destConfig || !currency) {
    return (
      <></>
    )
  }
  const isSwapfeeon = true
  const viewSymbol = config.getBaseCoin(currency?.symbol, chainId)
  const tipType = bridgeType === 'swapout' ? 'redeemTip' : 'mintTip'
  const dFee = Number(destConfig?.SwapFeeRatePerMillion)
  const useDfee = destConfig?.MaximumSwapFee === destConfig?.MinimumSwapFee ? 0 : dFee

  return (
    <SubCurrencySelectBox>
      <dl className='list'>
        <dt>
          <img src={BulbIcon} alt='' />
          {t('Reminder')}:
        </dt>
        {
          destConfig?.MaximumSwapFee === destConfig?.MinimumSwapFee ? (
            <dd><i></i>{t('feeTip' , {
              coin: viewSymbol,
              fee: isSwapfeeon ? thousandBit(destConfig?.MaximumSwapFee, 'no') : 0,
              dFee: isSwapfeeon ? thousandBit(useDfee, 'no') : 0
            })}</dd>
          ) : (
            <dd><i></i>{t(tipType + '1' , {
              dMinFee: isSwapfeeon ? thousandBit(destConfig?.MinimumSwapFee, 'no') : 0,
              coin: viewSymbol,
              dMaxFee: isSwapfeeon ? thousandBit(destConfig?.MaximumSwapFee, 'no') : 0,
              dFee: isSwapfeeon ? thousandBit(useDfee, 'no') : 0
            })}</dd>
          )
        }
        <dd><i></i>{t(tipType + '2')} {thousandBit(destConfig?.MinimumSwap, 'no')} {viewSymbol}</dd>
        <dd><i></i>{t(tipType + '3')} {thousandBit(destConfig?.MaximumSwap, 'no')} {viewSymbol}</dd>
        <dd><i></i>{// eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          chainId && ['61'].includes(chainId.toString()) ? t(tipType + '4_1') : t(tipType + '4')}</dd>
        <dd><i></i>{t(tipType + '5', {
          depositBigValMoreTime: thousandBit(destConfig?.BigValueThreshold, 'no'),
          coin: viewSymbol,
        }) + (viewSymbol ? '' : '')}</dd>
      </dl>
    </SubCurrencySelectBox>
  )
}

export default function Reminder ({
  destConfig,
  bridgeType,
  currency,
  // selectChain,
  version,
  fee,
}: ReminderType) {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()
  // const useFee = useMemo(() => {
    
  //   console.log(fee)
  //   return ''
  // }, [fee])
  // console.log(useFee)
  if (version === 'PERMISSONLESS') {
    if (!fee) return <></>
    // return (
    //   <FeeBox>
    //     {t('fee')}: {fee ? BigAmount.format(18, fee).toExact() : 'Loading'} {config.getCurChainInfo(chainId).symbol}
    //   </FeeBox>
    // )
    return <FeeBox>
        {t('fee')}: {fee ? BigAmount.format(18, fee).toExact() : 'Loading'} {config.getCurChainInfo(chainId).symbol}
        {/* {t('fee')}: {useFee ? useFee : ''} {config.getCurChainInfo(chainId).symbol} */}
      </FeeBox>
  }
  if (bridgeType && version !== 'PERMISSONLESS') {
    // return CrossBridge(destConfig, currency, bridgeType)
    return <CrossBridge destConfig={destConfig} currency={currency} bridgeType={bridgeType} />
  }
  return (
    <></>
  )
}