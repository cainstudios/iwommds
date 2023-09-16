import React from 'react';

const Card = (props) => {
    return (
        <div className='wtfiwommds'
            style={{
                backgroundColor: '#eb4c89',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                textDecoration: 'none',
                cursor: 'pointer',
                borderRadius: '10px',
            }}>
            {props.label}
        </div>
    );
}

export default Card;