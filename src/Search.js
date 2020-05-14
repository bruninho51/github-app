import React from "react";
import PropTypes from "prop-types";

const Search = ({ handleSearch, isDisabled }) => (
    <div className="search">
        <input 
            disabled={isDisabled}
            type="text" 
            placeholder="Digite a busca" 
            onKeyUp={handleSearch}
        />
    </div>
);

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

export default Search;