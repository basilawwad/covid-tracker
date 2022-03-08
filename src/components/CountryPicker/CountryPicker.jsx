import React from "react";

const DropDown = ( props ) => {
    let countries = props.countries
    console.log(countries)
    return(
        <select key={"t"} name="countries" id="countries">
            {countries ? countries.map((ele) => <option key={ele.iso2} value={ele.iso3}>{ele.name}</option>) : <h2>Loading...</h2> }
        </select>
    )
}

export default DropDown