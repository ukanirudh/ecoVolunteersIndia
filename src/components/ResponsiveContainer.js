import React from 'react'
import MobileContainer from './MobileContainer'
import DesktopContainer from './DesktopContainer'
import MediaQuery from 'react-responsive'

const ResponsiveContainer = ({ children }) => (
    <>
        <MediaQuery minWidth={1224}>
            <DesktopContainer shouldShowHeading={true}>{children}</DesktopContainer>
        </MediaQuery>
        <MediaQuery maxWidth={1224}>
            <MobileContainer shouldShowHeading={true}>{children}</MobileContainer>
        </MediaQuery>
    </>
)

export default ResponsiveContainer;