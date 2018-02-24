'use strict';

function Stars({count}) {

  let items = [];

  console.log(count);

  if((count > 0) && (count <= 5))
  {
    for( let i = 1; i <= count; i++){
      items.push(<li><Star /></li>);
    }
  }

  return (
      <ul className="card-body-stars u-clearfix">
          {items}
      </ul>
  );
}

Stars.defaultProps = { count: 0 };