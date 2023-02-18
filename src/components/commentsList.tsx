import React from 'react';
import * as layouts from "."


const CommentsList = ({ comments }: any) => (
    <>
        <h3>Comments:</h3>
        {
            comments.map((comment: any, key: any) => (
                <layouts.bubble key={key} m="10px" >
                    <layouts.flex ml="15px" >

                        <layouts.statement fontWeight="bold" fontSize="22px">{comment.username}: </layouts.statement>
                        <layouts.statement fontSize="22px"> {comment.text}</layouts.statement>

                    </layouts.flex>
                </layouts.bubble>

            ))}

    </>
);

export default CommentsList;