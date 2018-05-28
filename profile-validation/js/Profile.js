'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {

  const birthday = props.birthday ? <p>birthday: <a href={props.birthday}>{props.birthday}</a></p> : '';
  const vk = props.url ? <p>vk: <a href={props.url}>{props.url}</a></p> : '';

  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
          {vk}
          {birthday}
      </div>
    </div>
  );
};

Profile.propTypes = {
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    url: (props, propName, componentName) => {
        if (!/https:\/\/vk.com\/(id[0-9]+|[A-Za-z0-9_-]+)/.test(props[propName])) {
            return new Error(`Invalid prop ${propName} supplied to ${componentName}. Validation failed.`);
        }
    },
    birthday: (props, propName, componentName) => {

        if(!props[propName])
          return;

        if (!/^[0-9]{1,4}-[0-9]{1,2}-[0-9]{1,2}$/.test(props[propName])) {
            return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'YYYY-MM-DD'. Validation failed.`);
        }

        const now = new Date();

        if(new Date(props[propName]) > now.setDate(now.getDate() + 1)) {
            return new Error(`Invalid prop ${propName} supplied to ${componentName}. Дата рождения не может быть больше сегодняшней даты. Validation failed.`);
        }
    },

};

const now = new Date().toISOString().split('T')[0];

Profile.defaultProps = {
    img: './images/profile.jpg'
};