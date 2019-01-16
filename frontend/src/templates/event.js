import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'

class EventTemplate extends Component {
  render() {
    const event = this.props.data.wordpressWpEvents
    console.log(event)

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: event.title }} />
        <div dangerouslySetInnerHTML={{ __html: event.content }} />
        <img src={event.acf.cloudinary} alt="test" />
      </Layout>
    )
  }
}

EventTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default EventTemplate

export const eventQuery = graphql`
  query currentEventQuery($id: String!) {
    wordpressWpEvents(id: { eq: $id }) {
      title
      content
      acf {
        cloudinary
      }
    }
  }
`
