import React from 'react';

const FormSearch = ({ handleChange, name }) => {
    return (
        <div>
            <input type="search" name={name} onChange={handleChange} />
        </div>
    )
}

export default FormSearch;