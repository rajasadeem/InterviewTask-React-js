import React from 'react'

const Dropdown = ({ products, onChange, value }) => {
    // console.log("PRODUCTS", products);
    return (
        <div>

            <select value={value} onChange={onChange}>
                {
                    products.map(item => <option value={item.category}>
                        {item.category}
                    </option>)
                }
            </select>

        </div>
    )
}

export default Dropdown
