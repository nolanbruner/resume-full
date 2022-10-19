import React, { useState } from 'react';
import * as layouts from "../layouts"
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
        <layouts.bubble>
            <h3>Add a Comment</h3>
            <div>
                <label>
                    Name:
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Comment:
                    <textarea value={commentText} onChange={(event) => setCommentText(event.target.value)} />
                </label>
            </div>
            <button onClick={() => addComment()}>Add Comment</button>
        </layouts.bubble>);
}

export default AddCommentForm;