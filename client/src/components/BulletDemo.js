import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRepos } from '../redux/modules/bullet'

class BulletDemo extends Component {
  componentDidMount () {
    this.props.fetchRepos('letthebulletfly')
  }

  render () {
    return (
      <div>
        <ul>
          {this.props.repos.map(repo =>
            <li key={repo.id}>{repo.name} - <a href={repo.url}>link</a></li>
          )}
        </ul>
      </div>
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
