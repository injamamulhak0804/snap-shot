import React from 'react'

const Btn = ({ handleClick, setCurrent, current }) => {

    const carName = ['kia', 'Hundai', 'Honda', 'Tata']

    return (
        <>
            <div className='text-center'>
                {
                    carName.map((items, index) => {

                        return (
                            <button type='button'
                                data-itemtype={items}
                                key={index}
                                onClick={handleClick}
                                className={current === items ?
                                    'btn ps-4 pe-4 btn-primary active' :
                                    'btn ps-4 pe-4 btn-primary'}>
                                {items}
                            </button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Btn