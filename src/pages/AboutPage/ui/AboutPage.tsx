import React from 'react'
import { Page } from 'widgets/Page'
import pricingBackground from './pricingBackground.png'

{
  /* About Page is actually subscription page */
}
const AboutPage = () => {
  const planContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    margin: '1rem',
    width: '100%',
  }

  const planStyle = {
    width: '80%',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
  }

  const comingSoonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    background: 'gray', // Gray background for "Coming Soon" placeholder
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'not-allowed', // Indicates unclickable
    fontWeight: 'bold',
    textDecoration: 'none',
    marginTop: '1rem',
  }

  const subscribeButtonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    background: 'green', // Change to green background
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold', // Add this line to make the text bold
    textDecoration: 'none', // Ensure the text isn't underlined
  }

  return (
    <Page background={pricingBackground}>
      <div style={planContainerStyle}>
        <h2>Subscription Plans</h2>
        
        {/* Basic Plan - Coming Soon */}
        <div style={planStyle}>
          <h3>Basic Plan (Coming Soon)</h3>
          <p>
           
            <br />
            Stay Tuned!
            <br />
            {/* Price: $29/month */} 
          </p>
          <span style={comingSoonStyle}>Coming Soon</span>
        </div>

        {/* Advanced Plan - Coming Soon */}
        <div style={planStyle}>
          <h3>Advanced Plan (Coming Soon)</h3>
          <p>Stay tuned for more details on this exciting plan!</p>
          <span style={comingSoonStyle}>Coming Soon</span>
        </div>

        {/* Premium Plan - Coming Soon */}
        <div style={planStyle}>
          <h3>Premium Plan (Coming Soon)</h3>
          <p>Exciting features to be announced soon!</p>
          <span style={comingSoonStyle}>Coming Soon</span>
        </div>
      </div>
    </Page>
  )
}

export default AboutPage
