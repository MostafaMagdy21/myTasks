import React from 'react';

const HomePage = () =>{
    return(
        <React.Fragment>
            <div className="content container text-center">
                <h1>Expenses Calculator</h1>
                <h3>Your total expenses are <span>9898</span> EGP</h3>
                <h3>You have <span>1</span> items in your expenses list</h3>
            </div>
            <hr/>
        </React.Fragment>
    )
}

export default HomePage;