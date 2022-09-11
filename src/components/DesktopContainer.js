import React, { useState } from 'react'
import {
  Segment,
  Visibility,
} from 'semantic-ui-react'
import AppHeaderDesktop from './appHeaderDesktop'
import HomepageHeading from '../home-page/homepageHeading'
import Footer from './AppFooter'
import '../home-page/homePage.css'

const DesktopContainer = (props) => {
  const { children, shouldShowHeading = false } = props;
  const [fixed, setFixed] = useState(false);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  return (
    <>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign='center'
          style={ shouldShowHeading ? { height: 400, padding: '0em 0em' } : {padding: '0em 0em'}}
          vertical
        >
          <AppHeaderDesktop fixed={fixed} />
          {shouldShowHeading && <HomepageHeading />}
        </Segment>
      </Visibility>

      {children}
      <Footer />
    </>
  )
}

export default DesktopContainer;