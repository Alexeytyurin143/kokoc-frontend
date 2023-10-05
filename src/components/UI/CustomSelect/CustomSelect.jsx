import React from 'react'
import Select from 'react-select'

export const CustomSelect = ({ options, onChange }) => {
    const selectStiles = {
        borderColor: '#8f8f9d',
        height: '42px',
        marginBottom: '10px',
        borderRadius: 0,
    }

    return (
        <Select
            styles={{
                control: (baseStyles) => ({
                    ...baseStyles,
                    ...selectStiles,
                }),
            }}
            options={options}
            onChange={onChange}
        />
    )
}
