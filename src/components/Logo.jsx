import React from 'react'
import styled from 'styled-components'

export const Logo = () => {
  return (
    <LOGO>
        <img src={`${process.env.PUBLIC_URL || ''}/Logo.png`} alt="Sahil's Logo" />
    </LOGO>
  )
}

const LOGO=styled.div`
    width: 6rem;
`
