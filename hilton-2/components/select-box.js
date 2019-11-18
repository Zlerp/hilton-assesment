import React from 'react';

const SelectBox = (props) => {

    const handleChange = (event, isAdult) => {
        props.updateOccupants(event.target.value, isAdult, props.roomIndex);
    };

    return (
        <select name={props.fieldName} disabled={props.disabled}
                onChange={() => handleChange(event, props.adult)}
                value={props.value}>

            { !props.adult &&
            <option value="0">0</option>
            }


            <option value="1">1</option>
            <option value="2">2</option>


        </select>
    )
}

export default SelectBox