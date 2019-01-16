import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Slider from 'react-slick'
import styled from 'styled-components'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Image = styled.div`
  img {
    width: 50vw;
    height: 40vh;
    object-fit: cover;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  h2 {
    color: #e6a23a;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`
const HighlightedBeers = styled.div`
  display: grid;
  max-width: 50vw;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 20%);
  grid-gap: 2%;
  height: 20%;
  h2 {
    font-size: 0.6em;
    text-align: center;
  }
  img {
    width: 20vw;
    object-fit: contain;
  }
`

class IndexPage extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage
    const FeaturedBeers = this.props.data.allWordpressWpBeers.edges
    const LatestPosts = this.props.data.allWordpressPost.edges
    const LatestEvents = this.props.data.allWordpressWpEvents.edges
    const CombinedPostEvents = [...LatestPosts, ...LatestEvents]
    const settings = {
      className: 'slick-center',
      centerMode: true,
      infinite: true,
      slidesToShow: 1.62,
      speed: 500,
      dots: true,
    }

    return (
      <>
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <Slider {...settings}>
            {/* map over our acf object that contains image */}
            {Object.keys(currentPage.acf).map((image, index) => (
              <Image key={index}>
                <img src={currentPage.acf[image]} alt={index + 'carousel'} />
              </Image>
            ))}
          </Slider>
          {/* Content under header starts here */}
          <Content>
            <h2>Featured Beers</h2>
            <HighlightedBeers>
              {FeaturedBeers.map(beer => {
                return (
                  <Link to={'beers/' + beer.node.slug} key={beer.node.id}>
                    <div>
                      <img
                        src={beer.node.acf.cloudinary}
                        alt={beer.node.title}
                      />
                    </div>
                  </Link>
                )
              })}
            </HighlightedBeers>
            <Gallery data={CombinedPostEvents} />
          </Content>
        </Layout>
      </>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query staticFrontPage(
    $frontpage_id: Int = 2
    $tag_id: Int = 2
    $MaxPosts: Int = 4
  ) {
    wordpressPage(wordpress_id: { eq: $frontpage_id }) {
      id
      title
      acf {
        img1
        img2
        img3
      }
    }
    site {
      id
      siteMetadata {
        title
      }
    }
    allWordpressWpBeers(
      filter: { tags: { elemMatch: { wordpress_id: { eq: $tag_id } } } }
    ) {
      edges {
        node {
          id
          title
          content
          slug
          type
          acf {
            cloudinary
          }
        }
      }
    }
    allWordpressPost(limit: $MaxPosts, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          slug
          title
          excerpt
          type
          acf {
            cloudinary
          }
        }
      }
    }
    allWordpressWpEvents(
      limit: $MaxPosts
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          id
          slug
          title
          excerpt
          date
          type
          acf {
            cloudinary
          }
        }
      }
    }
  }
`

/* wordpressWpBeers(tags: { elemMatch: { wordpress_id: { eq: $tag_id } } }) {
  title
  content
  acf {
    cloudinary
  }
} */
