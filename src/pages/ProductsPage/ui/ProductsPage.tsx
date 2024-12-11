import React from 'react'
import { Page } from 'widgets/Page'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { VStack } from 'shared/ui/Stack'
import ProductsPageBackground from './productPageBackground.jpg'

const ProductsPage = () => {
  const greenStyle = { color: 'limegreen' }
  const whiteStyle = { color: 'white' }

  return (
    <Page background={ProductsPageBackground}>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />
        <VStack gap={1.25}>
          <h2 style={{ ...greenStyle, zIndex: 1 }}>
            <span style={whiteStyle}>Introducing </span>
            <span style={greenStyle}>Virid Punk</span>
          </h2>
          <p style={{ zIndex: 1 }}>
            <span style={greenStyle}>Virid Punk</span> is a
            cutting-edge AI-powered platform designed to
            empower farmers with real-time insights using
            satellite imagery and advanced AI algorithms.
            Currently in its MVP stage, Virid Punk is built
            to help farmers make data-driven decisions to
            optimize crop yields and land usage, leading to
            more sustainable and profitable farming
            practices.
            <br />
            <br />
            <strong>Key Features (MVP):</strong>
            <br />
            📸 Satellite Image Upload - Upload satellite
            images of your farm to begin receiving data
            insights.
            <br />
            🌱 AI-Powered Land Classification - Our platform
            uses AI to automatically classify different land
            cover types, giving you precise insights into
            your farm’s ecosystem.
            <br />
            🗺️ Initial Land Use Insights - Receive
            early-stage analysis on land use, crop rotation
            suggestions, and irrigation tips based on your
            field data.
            <br />
            🔧 Customization (Coming Soon!) - Tailor the
            platform to suit your farm's unique needs with
            upcoming customization options.
            <br />
            <br />
            <strong>Why Virid Punk (MVP)?</strong>
            <br />
            🚀 Leverage advanced AI and satellite imagery to
            gain an edge in precision agriculture.
            <br />
            💡 Simple, user-friendly interface designed
            specifically for farmers with no tech expertise
            needed.
            <br />
            🌱 Contribute to sustainable farming practices
            with data-driven decisions that minimize
            resource waste.
            <br />
            🤝 We're building long-term partnerships with
            farmers to grow together and refine the product
            for widespread adoption.
            <br />
            🌍 Together, let's work toward a greener, more
            sustainable future for agriculture.
            <br />
            <br />
            <strong>
              Join Us in Shaping the Future of Agriculture
            </strong>
            <br />
            We're currently validating the product with
            early-stage users. Get involved now and be part
            of the revolution in precision farming!
            <br />
            <br />
            <strong>
              Contact Us for Early Access or Feedback
            </strong>
            <br />
            Help us improve by sharing your feedback,
            scheduling a demo, or getting access to our
            beta. We're eager to collaborate with
            forward-thinking stakeholders in agriculture
            technology.
          </p>
        </VStack>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Button
            as={AppLink}
            to='mailto:contact@viridfuture.com?subject=Early Access or Feedback on Virid Punk&body=Hello, I would like to learn more about Virid Punk and participate in early-stage feedback.'
            style={{ padding: '8px 16px' }}
          >
            Contact us 
          </Button>
        </div>
      </div>
    </Page>
  )
}

export default ProductsPage
