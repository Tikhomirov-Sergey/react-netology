'use strict';

const TextInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type={props.type} className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required}/>
    </div>
  )
};

RadioGroup.propTypes = {
    onChange: PropTypes.func,

    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string
};
