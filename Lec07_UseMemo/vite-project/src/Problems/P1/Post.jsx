import React from 'react';

const Post = React.memo(({value})=>{
    
    console.log("Post rendered");
    return(
        <>
        <h2>Your name is {value.name} and your age is {value.age}</h2>
        </>
    )
});

export default Post;