const Find = (props) => {
  return <div>
    <div>Find countries</div>
    <input type="text" value={props.value} onChange={props.onFindChange} />
  </div>;
};

export default Find;
