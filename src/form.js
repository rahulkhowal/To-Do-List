import React from 'react';

const Form = (props) => {
    return (
        <form className="item-container" onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="city"></input>
            <input type="text" name="country" placeholder="country"></input>
            <button>submit</button>
        </form>
    )
}; export default Form