import React from 'react'

const Search = ({ value, setValue, handleChange }) => {
    return (
        <>
            <div className='text-center mb-5'>
                <form>
                    <input type="text"
                        className='form-control input-form'
                        placeholder='Search For Brand Car' 
                        value={value}
                        onChange={handleChange}
                        />
                </form>
            </div>
        </>
    )
}

export default Search