import React from 'react';
import PropTypes from 'prop-types';

const UserTemplate = (props) => {
    return (
        <div>
            Template
        </div>
    );
};

UserTemplate.PropTypes = {
    name:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.number,
        PropTypes.oneOf(['Francis', 'Steve'])
        
    ]),
    lastname:PropTypes.string,
    age:PropTypes.number,
    hobbies:PropTypes.arrayOf(PropTypes.string),
    spanish:PropTypes.bool,
    message:PropTypes.func,
    car:PropTypes.object,
    mother:function(props, propName, component){
        console.log(props);
    }
}

export default UserTemplate;