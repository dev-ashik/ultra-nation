import React from 'react';

const Cart = (props) => {
    console.log(props.addedCountry);
    const addedCountry = props.addedCountry;

    // let totalPopulation = 0;
    // for (let i = 0; i < addedCountry.length; i++) {
    //     const country = addedCountry[i];
    //     totalPopulation = totalPopulation + country.population;
    // }
    const totalPopulation = addedCountry.reduce( (sum, country) => sum + country.population , 0)

    return (
        <div>
            <p><small>Total Populaton: {totalPopulation}</small></p>
        </div>
    );
};

export default Cart;