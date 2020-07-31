import React from 'react'
import MobileContainer from './MobileContainer'
import DesktopContainer from './DesktopContainer'

const ResponsiveContainer = ({ children }) => (
    <React.Fragment>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </React.Fragment>
)

export default ResponsiveContainer;