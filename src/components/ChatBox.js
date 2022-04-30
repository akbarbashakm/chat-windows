import React, { useState } from 'react';
import { ChatArea } from '.';

const ChatBox = ({
    action
}) => {
    const [value, setValue] = useState('');
    return (
        <div>
            <ChatArea>
                <input value={value} type="text" placeholder="Enter your message..." onChange={(e) => {
                    setValue(e.target.value)
                }} />
                <button type="submit" onClick={(e) => {
                    e && e.preventDefault();
                    action({
                        msg: value,
                        date: new Date()
                    })
                    setValue('');
                }} >Send</button>
            </ChatArea>
        </div>
    )
}

export default ChatBox;