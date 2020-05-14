import React from "react";
import PropTypes from "prop-types";

const Actions = ({ handleRepos, handleStarred }) => (
    <div className="actions">
        <button onClick={handleRepos}>Ver repositórios</button>
        <button onClick={handleStarred}>Ver favoritos</button>
    </div>
);

Actions.propTypes = {
    handleRepos: PropTypes.func.isRequired,
    handleStarred: PropTypes.func.isRequired
}

export default Actions;