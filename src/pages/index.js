/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Link } from 'gatsby'
import { useQuery } from '@apollo/react-hooks'
import { useMediaQuery } from 'react-responsive'
import { Grid, Box, Button, Heading, Text } from 'theme-ui'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ProjectListing from '../components/projectListing'

// import decorative graphics
import decoratorLeaf from '../images/decorator-leaf.png'

import { FETCH_PROJECTS } from '../apollo/gql/projects'

// placeholder image
import NoImage from '../images/no-image-available.jpg'

const ProjectSection = styled(Box)``

const IndexPage = () => {
  const { data } = useQuery(FETCH_PROJECTS)
  const isMobile = useMediaQuery({ query: '(max-width: 850px)' })

  return (
    <Layout>
      <img
        src={decoratorLeaf}
        alt=""
        sx={{ position: 'absolute', top: '60vh', left: '-70px' }}
      />
      <Hero />
      <ProjectSection pt={4} sx={{ variant: 'grayBox' }}>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: '1440px',
            padding: `0 1.0875rem 1.45rem`
          }}
        >
          <Grid p={4} columns={[1, 2, 3]} style={{ justifyItems: 'center' }}>
            <ProjectListing
              name="Giveth DAC"
              image="https://feathers.beta.giveth.io/uploads/368b8ef30b9326adc4a490c4506189f905cdacef63b999f9b042a853ab12a5bb.png"
              raised={1223}
              category="Blockchain 4 Good"
              listingId={'key1'}
              key={'key1'}
            />
            <ProjectListing
              name="Aragon DAC"
              image="https://feathers.beta.giveth.io/uploads/3aa88b6ed3a6e0f54542086886194696a21c06b756864b97a1c1a0dcf58d4e17.png"
              raised={423}
              category="Blockchain 4 Good"
              listingId={'key2'}
              key={'key2'}
            />
            <ProjectListing
              name="Fairdata Society"
              image="https://ipfs.giveth.io/ipfs/QmUCepVMUhCHhZ5mSEXqWgL3taxPU5gaUhczTZgA4JLyPk"
              raised={0}
              category="Social Technology"
              listingId={'key3'}
              key={'key3'}
            />
            <ProjectListing
              name="Unicorn DAC"
              image="https://feathers.beta.giveth.io/uploads/5906e1be14c47c0a18b44a29fe8873ddfb6440a8a212cf42bacb84b7e2e1c0c1.png"
              raised={10004}
              category="All the things"
              listingId={'key4'}
              key={'key4'}
            />
            {data &&
              data.projects &&
              data.projects &&
              data.projects.map((project, index) => (
                <ProjectListing
                  listingId={project.title + '-' + index}
                  key={project.title + '-' + index}
                  name={project.title}
                  image={NoImage}
                />
              ))}
          </Grid>
        </div>
      </ProjectSection>
    </Layout>
  )
}

export default IndexPage
