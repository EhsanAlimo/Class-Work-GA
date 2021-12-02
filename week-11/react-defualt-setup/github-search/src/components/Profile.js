import React, { Component } from "react";
import Github from "../services/github";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      info: null,
      repos: null,
    };
  }

  componentDidMount() {
    console.log("the component did mount");
    const { username } = this.props.match.params;
    Github.getUserInfo(username).then((response) => {
      // console.log(response.data);
      this.setState({ info: response.data });
    });
    Github.getUserRepos(username).then((response) => {
      // console.log(response.data);
      this.setState({ repos: response.data });
    });
  }
  render() {
    return (
      <div>
        <h2>Profile for {this.props.match.params.username} </h2>
        <div style={{ display: "flex" }}>
          <UserInfo info={this.state.info} />
          <Repositories repos={this.state.repos} />
        </div>
      </div>
    );
  }
}

const UserInfo = (props) => {
  //conditional rendering///
  if (props.info === null) {
    return <div>loading ...</div>;
  }
  const {
    login,
    avatar_url,
    bio,
    followers,
    following,
    public_repos,
    public_gists,
  } = props.info;

  return (
    <div>
      <h3>Stats for {login}</h3>
      <img src={avatar_url} alt={login} width="200" />
      <p>bio: {bio}</p>
      <p>followers: {followers}</p>
      <p>{public_repos}</p>
      <p>{public_gists}</p>
    </div>
  );
};
const Repositories = (props) => {
  if (props.repos === null) {
    return <div>Loading...</div>;
  }

  const userRepos = props.repos.map((r) => {
    return (
      <li key={r.id}>
        <a href={r.html_url} target="_blank">
          {r.name}
        </a>
      </li>
    );
  });
  return (
    <div>
      <h3>Repos</h3>
      <ul>{userRepos}</ul>
    </div>
  );
};
