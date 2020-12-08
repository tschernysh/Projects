import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialog__users}>
                
                <DialogItem name='Тёма' id='1' />
                <DialogItem name='Хомяк' id='2' />
                <DialogItem name='Илья' id='3' />
                <DialogItem name='Айкос' id='4' />
                <DialogItem name='ДиОнИзи' id='5' />
                <DialogItem name='Настя' id='6' />
                <DialogItem name='Ромка' id='7' />
                <DialogItem name='Вовчег' id='8' />

            </div>

            <div className="dialog__messages">
                <div className="dialog__message">
                    Hey bro
                </div>
                <div className="dialog__message">
                    can we go doto today ?
                </div>
                <div className="dialog__message">
                    I'll be playing for Pudge
                </div>
            </div>
        </div>
    )
}

export default Dialogs