import React from 'react';
import { Circle, MsgBox, MsgInfo, MsgRoot } from '.';


const Messages = ({
    messages
}) => {
    return (
        <div className='content'>
            {messages.map(({ name, msg, isSender = false, date }) => {
                const d = new Date(date);
                return (
                    <MsgRoot key={name} isSender={isSender}>
                        <Circle>{name[0].toUpperCase()}</Circle>
                        <MsgBox>
                            <MsgInfo>
                                <div className="name">{name}</div>
                                <div className="time">{`${d.getHours()}:${d.getMinutes()}`}</div>
                            </MsgInfo>
                            <div className="msg-text">
                                {msg}
                            </div>
                        </MsgBox>
                    </MsgRoot>
                )
            })}
        </div>
    )
}

export default Messages;