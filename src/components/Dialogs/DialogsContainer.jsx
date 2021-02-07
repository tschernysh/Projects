import React from 'react'
import { sendMessageCreator, updateNewMessageTextCreator } from '../../state/dialogReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

    function addMessage(){
        props.dispatch( sendMessageCreator() )
    }

    let onMessageChange = (text) =>{
        props.dispatch( updateNewMessageTextCreator(text) )
    } 

    return <Dialogs updateNewMessageText={onMessageChange}
                    addMessage={addMessage} 
                    newMessageText={props.dialogPage.newMessageText} 
                    users={props.dialogPage.users} 
                    messages={props.dialogPage.messages} />
}

export default DialogsContainer;