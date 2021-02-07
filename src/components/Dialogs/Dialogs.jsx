import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import React from 'react'

const Dialogs = (props) => {

    
    let user = props.users.map( u => <DialogItem name={u.name} id={u.id} photo={u.photo} />)
    let message = props.messages.map( m => <MessageItem message={m.message} id={m.id}/> )

    function addMessage(){
        props.addMessage()
    }

    let onMessageChange = (e) =>{
        let text = e.target.value;
        props.updateNewMessageText(text)
    } 

    return(
        <div className={s.dialogs}>
            <div className={s.dialog__users}>   
                {user}
            </div>

            <div className={s.dialog__messages}>
                {message}
                <textarea  onChange={onMessageChange} value={props.newMessageText} ></textarea>
                <button onClick = {addMessage}> suck dick </button>
            </div>
        </div>
    )
}

export default Dialogs;