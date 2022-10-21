import React from 'react';


const AddNew = (props) =>(
    <div className="container">
        <h2 className="text-center">Add a new Item</h2>
        <h3>Item</h3>
        <input type="text" className="form-control"
                onChange={props.onChangeItemHandler}
                value={props.itemvalue}/>

        <h3>Price</h3>
        <input type="number" className="form-control"
                onChange={props.onChangePriseHandler}
                value={props.prisevalue}/>
        <button className="btn btn-success btn-block mt-2"
                onClick={props.onClickAddItem}>Add New</button>
    </div>
)

export default AddNew;