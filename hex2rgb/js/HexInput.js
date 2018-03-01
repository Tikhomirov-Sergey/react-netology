'use strict';

const HexInput = props => {

  let input;

  function onChange() {
    props.onChange(input.value);
  }

  return (
    <input
      ref={element => input = element}
      defaultValue={props.value}
      onChange={onChange}
      type="text"
      className="hex-field js-hex-field"
      placeholder="#000000" />
  );
};
