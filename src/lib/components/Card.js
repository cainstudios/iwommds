import React from 'react';

function Box({
    as: asProp = 'div',
    children,
    backgroundColor,
    border,
    borderRadius,
    color,
    mode = 'default',
    overflow,
    fontFamily = 'Helvetica',
    fontSize = '1rem',
    fontWeight = 300,
    minHeight,
    margin,
    padding,
    width,
    textAlign,
    style,
    ...props
}) {
    const Component = asProp

    let modeStyles

    if (mode === 'modal') {
        modeStyles = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '12px solid #19A8F7',
            flexDirection: 'column',
            backgroundColor: '#1F3F50',
            color: '#eee',
        }
    } else if (mode === 'card') {
        modeStyles = {
            backgroundColor: '#fff',
            color: 'rgba(0, 0, 0, 0.75)',
            paddingBottom: 30,
        }
    }

    return (
        <Component
            {...props}
            style={{
                border,
                backgroundColor,
                borderRadius,
                color,
                fontFamily,
                fontSize,
                fontWeight,
                overflow,
                minHeight,
                margin,
                padding,
                width,
                textAlign,
                ...style,
                ...modeStyles,
            }}
        >
            {children}
        </Component>
    )
}

export default Card;