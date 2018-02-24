'use strict';

$.ajax({
    url: 'https://neto-api.herokuapp.com/etsy',
    success: function(data){

        ReactDOM.render(
            <Listing items={data} />,
            document.getElementById('root')
        );
    }
});