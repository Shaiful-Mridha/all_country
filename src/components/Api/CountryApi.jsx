import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./CountryApi.css";

const CountryApi = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="header">
      <h2>Countries Around The World🌎</h2>
      <p className="paragraph">Number Of Country: {countries.length}</p>
      <section>
        {countries.map((country) => (
          <Country key={country.cca2} country={country} />
        ))}
      </section>
    </div>
  );
};
export default CountryApi;

//***              Another way      */

// import React, { useEffect, useState } from 'react';
// import Country from './Country';

// const CountryAPI = () => {

//     const [countries,setCountries] = useState([]);
//     useEffect( ()=>{
//         fetch('https://restcountries.com/v3.1/all')
//         .then ( res => res.json())
//         .then( data => setCountries(data))
//     },[])
//     return (
//         <div>
//             <h2>Visit around the world</h2>
//             <p>Number of country {countries.length}</p>
//              {countries.map(country => (
//                 <Country key ={country.cca2}
//                     name ={country.name.common}
//                     population ={country.population}
//                     area ={country.area}
//                     region ={country.region}
//                 />
//             ))}

//         </div>
//     );
// };

// export default CountryAPI;
