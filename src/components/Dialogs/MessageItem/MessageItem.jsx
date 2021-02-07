import s from './MessageItem.module.css'

const MessageItem = (props) => {
    return(
        <div className="dialog__message">
            {props.message}
        </div>
    )
}

export default MessageItem;