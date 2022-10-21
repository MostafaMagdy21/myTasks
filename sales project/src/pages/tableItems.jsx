import React from 'react';

const TableItems = (props) =>(
    <React.Fragment>
        <tbody>
            <tr>
                <th scope="row">{props.prodact.id}</th>
                <td>{props.prodact.item}</td>
                <td>{props.prodact.prise}</td>
                <td>
                    <button className="btn btn-danger"
                            onClick={() =>props.onClickDeleteItem(props.prodact)}>
                                Delete
                    </button>
                </td>
            </tr>
        </tbody>
        
            
    </React.Fragment>
)

export default TableItems;