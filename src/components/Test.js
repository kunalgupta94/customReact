import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
    try: {
        color: 'blue',
    }
})


const Test = () => {
    const classes = useStyle();
    return (
        <div className={classes.try}>
            appp
        </div>
    )
}

export default Test
