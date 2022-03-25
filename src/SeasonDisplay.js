import React from 'react';


const getSeason = ( lat, month )  => {
    if (month > 2 && month < 9) {
       return  lat > 0 ? 'Summer' : 'Winter'
    } else {
        return lat < 0 ? 'Winter' : 'Summer'
    }
};

const SeasonDisplay = (props) => {
    const date = new Date().getMonth()
    const season = getSeason(props.lat, date)
    const text = season === 'Summer' ? 'Lets Hit the beach!!!' : 'Burrr, its cold!!!'
    const icon = season === 'Summer' ? 'sun' : 'snowflake'


    return (
        <div>
        <i className={`${icon} icon`} />
        <h1>{ text }</h1>
        <i className={`${icon} icon`} />
        </div>
    )
};


export default SeasonDisplay;