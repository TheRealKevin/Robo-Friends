import React from 'react';

// const divStyle = {
//     textAlign: 'center',
//     backgroundColor: 'green'

// };

//div className ="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"

const Card = (prop) => {
    const {name,email,id} = prop;
    return(
        <div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src = {`https://robohash.org/${id}?200x200`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
        </div>
    );
}

export default Card;