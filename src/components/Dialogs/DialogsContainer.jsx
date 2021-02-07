import React from 'react'
import { sendMessageCreator, updateNewMessageTextCreator } from '../../state/dialogReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return{
        newMessageText: state.dialogPage.newMessageText,
        users: state.dialogPage.users,
        messages: state.dialogPage.messages,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageText: (text) => {
            dispatch( updateNewMessageTextCreator(text))
        },
        addMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;