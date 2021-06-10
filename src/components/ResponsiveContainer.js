import React from 'react'
import MobileContainer from './MobileContainer'
import DesktopContainer from './DesktopContainer'
import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
    breakpoints: {
      mobile: 320,
      tablet: 768,
      computer: 992,
      largeScreen: 1200,
      widescreen: 1920
    }
  });
  
const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const ResponsiveContainer = ({ children }) => (
    <MediaContextProvider>
        <Media greaterThanOrEqual="tablet">
            <DesktopContainer shouldShowHeading={true}>{children}</DesktopContainer>
        </Media>
        <Media at="mobile">
            <MobileContainer>{children}</MobileContainer>
        </Media>
    </MediaContextProvider>
)

export default ResponsiveContainer;