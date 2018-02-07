import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRepos } from '../redux/modules/bullet'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-radius: 3px;
  padding: 24px;
  background: #fdcd30;
  border: 2px solid black;
  text-align: center;
`

const Name = styled.div`
  font-family: cursive;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px
`

const Repos = styled.ul`
  list-style-type: none
`

const Repo = styled.li`
  line-height: 2;
`

class BulletDemo extends Component {
  componentDidMount () {
    this.props.fetchRepos('letthebulletfly')
  }

  render () {
    return (
      <Wrapper>
        <Name>Let the Bullet Fly </Name>
        <Repos>
          {this.props.repos.map(repo =>
            <Repo key={repo.id}>{repo.name} - <a href={repo.url}>link</a></Repo>
          )}
        </Repos>
      </Wrapper>
    )
  }
}

BulletDemo.defaultProps = {
  repos: []
}

const mapStateToProps = state => {
  return {
    repos: state.bullet.repos
  }
}

const mapDispatchToProps = {
  fetchRepos
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BulletDemo)
