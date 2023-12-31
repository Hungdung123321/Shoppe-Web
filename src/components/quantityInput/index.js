import React, { useEffect, useState } from 'react'
import AppButton from '../Appbutton'
import CustomInput from '../CustomInput'
import './style.css'

const QuantityInput = ({
    getCount = () => { },
    width,
    height
}) => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        getCount(count)
    }, [count])

    const handleIncreaseCount = () => {
        setCount((value) => value + 1)
    }

    const handleDecreaseCount = () => {
        setCount((value) => value - 1)
    }

    return (
        <div id='container-quantity-input' style={{ width: width, height: height }}>
            <AppButton
                className='text-font-family_default text-heading5 text-color-dark-gray'
                onClick={handleDecreaseCount}
            >-</AppButton>
            <CustomInput
                className=''
                value={count}
            />
            <AppButton
                className='text-font-family_default text-heading5 text-color-dark-gray'
                onClick={handleIncreaseCount}
            >+</AppButton>
        </div>
    )
}

export default QuantityInput