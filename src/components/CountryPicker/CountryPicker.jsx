const DropDown = (props) => {
  return (
    <select key={'t'} name='countries' id='countries'>
      {props.countries ? (
        props.countries.map((ele) => (
          <option key={ele.iso2} value={ele.iso3}>
            {ele.name}
          </option>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </select>
  );
};

export default DropDown;
