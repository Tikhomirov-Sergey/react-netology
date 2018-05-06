'use strict';

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};

DateInput.propTypes = {
    onChange: PropTypes.func,

    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: (props, propName, componentName) => {
        if (!/^[0-9]{1,4}-[0-9]{1,2}-[0-9]{1,2}$/.test(props[propName])) {
            return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'YYYY-MM-DD'. Validation failed.`);
        }
    }
};

const now = new Date().toISOString().split('T')[0];

DateInput.defaultProps = {
    value: now
};