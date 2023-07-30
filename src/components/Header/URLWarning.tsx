import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

// import { AlertTriangle, X } from 'react-feather'
import { X } from 'react-feather'
import { useURLWarningToggle, useURLWarningVisible } from '../../state/user/hooks'
import { isMobile } from 'react-device-detect'

const PhishAlert = styled.div<{ isActive: any }>`
  width: 100%;
  padding: 6px 6px;
  background-color: #de50a0;
  color: #ffffff;
  font-size: 11px;
  justify-content: center;
  align-items: center;
  display: ${({isActive}) => (isActive ? 'flex' : 'none')};
  position: relative;
`

export const StyledClose = styled(X)`
  margin-left:20px;
  position:absolute;
  right:10px;
  :hover {
    cursor: pointer;
  }
`

export default function URLWarning() {
  const toggleURLWarning = useURLWarningToggle()
  const showURLWarning = useURLWarningVisible()
  const { t } = useTranslation()
  return isMobile ? (
    <PhishAlert isActive={showURLWarning}>
      <div style={{ display: 'flex' }}>
      {/* [Warning] Please visit link (<a style={{ padding: '0 4px', display: 'inline', fontWeight: 'bold' }} href='https://app.deltaswap.io/#/approvals' target='__blank'>https://app.deltaswap.io/#/approvals</a>) to confirm approvals asap. Details: <a style={{ padding: '0 4px', display: 'inline', fontWeight: 'bold' }} href='' target='__blank'>medium</a>.  */}
        {/* <AlertTriangle style={{ marginRight: 6 }} size={12} /> */}
        {t('topTip')}<a style={{ padding: '0 4px', display: 'inline', fontWeight: 'bold' }} href='https://deltaswap.io' target='__blank'>https://deltaswap.io</a>
      </div>
      <StyledClose size={12} onClick={toggleURLWarning} />
    </PhishAlert>
  ) : window.location.hostname ? (
    <PhishAlert isActive={showURLWarning}>
      <div style={{ display: 'flex' }}>
        {/* [Warning] Please visit link (<a style={{ padding: '0 4px', display: 'inline', fontWeight: 'bold' }} href='https://app.deltaswap.io/#/approvals' target='__blank'>https://app.deltaswap.io/#/approvals</a>) to confirm approvals asap. Details: <a style={{ padding: '0 4px', display: 'inline', fontWeight: 'bold' }} href='' target='__blank'>medium</a>.  */}
        {/* <AlertTriangle style={{ marginRight: 6 }} size={12} /> */}
        {t('topTip')}<a style={{ padding: '0 4px', display: 'inline', fontWeight: 'bold' }} href='https://deltaswap.io' target='__blank'>https://deltaswap.io</a>
      </div>
      <StyledClose size={12} onClick={toggleURLWarning} />
    </PhishAlert>
  ) : null
}
