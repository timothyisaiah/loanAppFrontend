import React from 'react';


const post = (props) => (
    <article className='Post'>
        <h1>{props.title}</h1>
        <div className='info'>
            <div classname='Author'>Author</div>
        </div>
    </article>
);

export default post;