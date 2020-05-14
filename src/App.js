'use strict'

import React from 'react';
import AppContent from './AppContent';
import ajax from "@fdaciuk/ajax";

class App extends React.Component {

    constructor() {
        super();

        this.login = null;

        this.state = {
            userInfo: null,
            repos: [],
            starred: [],
            isFetching: false
        }
    }

    url() {
        let uri = "";
        Array.from(arguments).forEach((el) => {
            uri += `/${el}`;
        });

        return 'https://api.github.com' + uri;
    }

    handleSearch (e) {
        const value = e.target.value;
        const keyCode = e.which || e.keyCode;
        const ENTER = 13;
        if (keyCode == ENTER) {
            this.setState({ isFetching: true });
            /*e.target.disabled = true;
            e.persist();*/

            ajax().get(this.url('users', value))
                .then(result => {
                    this.login = result.login;
                    this.setState({
                        userInfo: {
                            username: result.name,
                            photo: result.avatar_url,
                            login: result.login,
                            repos: result.public_repos,
                            followers: result.followers,
                            following: result.following
                        },
                        repos: [],
                        starred: []
                    });
                })
                .always(() => {
                    //e.target.disabled = false;
                    this.setState({ isFetching: false });
                });
        }
    }

    handleRepos(name) {
        return (e) => {
            ajax().get(this.url('users', this.login, name))
            .then(result => {
                this.setState({
                    [name]: result.map(repo => {
                        return { id: repo.id, name: repo.name, link: repo.url }
                    })
                });
            });
        }
    }

    render() {
      return (
        <AppContent 
            { ...this.state }
            handleSearch={(e) => this.handleSearch(e)}
            handleRepos={this.handleRepos('repos')}
            handleStarred={this.handleRepos('starred')}
        />
      );
    }
}

export default App;
