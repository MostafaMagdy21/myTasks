import React from 'react';
import TableItems from './tableItems';


const ShowList = (props) =>(
    <div className="container mt-40">
        {props.prodacts.length ? 
            <table className="table">
                <thead className="mt-4">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Prise</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {props.prodacts && props.prodacts
                .map((prodact) =><TableItems prodact={prodact}
                                            onClickDeleteItem={props.onClickDeleteItem}
                                            key={prodact.id}/>)}
            </table>
            : <h1 className="text-center">You haven't added any expenses yet</h1>
        }
        
    </div>
)

export default ShowList;