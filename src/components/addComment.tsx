import React, { useState } from 'react';
import * as layouts from "."
const AddCommentForm = ({ projectName, setprojectInfo }: any) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const result = await fetch(`/api/projects/${projectName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setprojectInfo(body);
        setUsername('');
        setCommentText('');
    }

    return (
        <layouts.bubble m="5px">
            <h3>Add a Comment</h3>
            <layouts.flex width="auto">

                <layouts.DIV p="5px">
                    <b> Name: </b>

                    <input type="text" width="20vw" value={username} onChange={(event) => setUsername(event.target.value)} />


                </layouts.DIV>
                <layouts.DIV>
                    <b>Comment: </b>
                    <textarea value={commentText} onChange={(event) => setCommentText(event.target.value)} />
                </layouts.DIV>
            </layouts.flex>
            <layouts.DIV mr="0px"><layouts.buttons.primary textAlign="right" fontSize="15px" p="5px" fontWeight="bold" onClick={() => addComment()}>Post Comment</layouts.buttons.primary></layouts.DIV>

        </layouts.bubble>);
}

export default AddCommentForm;