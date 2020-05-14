import React from "react";
import PropTypes from 'prop-types';

import Search from './Search';
import UserInfo from './UserInfo';
import Actions from './Actions';
import Repos from './Repos';

const AppContent = ({ userInfo, repos, starred, handleSearch, handleRepos, handleStarred, isFetching }) => (
    <div className="app">
       <Search handleSearch={handleSearch} isDisabled={isFetching} />
        {isFetching && <div>Carregando...</div>}
        {!!userInfo && <UserInfo userInfo={userInfo} />}
        {!!userInfo && 
            <Actions 
                handleRepos={handleRepos} 
                handleStarred={handleStarred}
            />}

        {!!repos.length &&
            <Repos 
                className="repos" 
                title="Repositórios" 
                repos={repos} 
            />
        }

        {!!starred.length &&
            <Repos 
                className="starred" 
                title="Favoritos" 
                repos={starred} 
            />
        }
    </div>
);

AppContent.propTypes = {
    userInfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleRepos: PropTypes.func.isRequired,
    handleStarred: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
}

export default AppContent;