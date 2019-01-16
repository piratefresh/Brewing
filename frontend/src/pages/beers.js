import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4%;
`
const Item = styled(Link)`
  margin-right: 2%;
  img {
    height: 200px;
  }
`

class BeersPage extends Component {
  render() {
    const beers = this.props.data.allWordpressWpBeers.edges
    return (
      <Layout>
        <SEO title="Beers" />
        <Container>
          <Content>
            {beers.map(beer => {
              return (
                <Item to={'beers/' + beer.node.slug} key={beer.node.id}>
                  <img src={beer.node.acf.cloudinary} alt={beer.node.title} />
                </Item>
              )
            })}
          </Content>
        </Container>
      </Layout>
    )
  }
}

export default BeersPage

export const PageQuery = graphql`
  query getallBeers {
    allWordpressWpBeers {
      edges {
        node {
          id
          slug
          title
          excerpt
          date
          acf {
            cloudinary
          }
        }
      }
    }
  }
`
