import React from "react";
import { Card } from "react-bootstrap";

function ChatConversation(props) {
    return (
        <Card style={{border: 'none'}}>
            {props.user ? <div className="userMessage">{props.message}</div>
             : 
             <div className="userMessage bot">{props.message}</div>}
        </Card>
    )
}
export default ChatConversation;