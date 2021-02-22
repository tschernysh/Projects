import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.profile__bg}>
                <img src='https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/04/Zero-Two-And-Hiro-Battling-Together-Darling-In-The-Franxx.jpg?q=50&fit=crop&w=740&h=370' />
            </div>

            <div className={s.profile__container}>
                <div className={s.profile__ava}>
                    <img src="https://cdn.britannica.com/67/197567-131-1645A26E/Scottish-fold-cat-feline.jpg" alt="" />
                </div>
                <div className={s.profile__info}>

                    <div className={s.profile__box}>
                        <div className={s.profile__title}>
                            Name
              </div>
                        <div className={s.profile__text}>
                            {props.profile == null ? 'strange stranger' : props.profile.fullName}
              </div>
                    </div>

                    <div className={s.profile__box}>
                        <div className={s.profile__title}>
                            Birth date
              </div>
                        <div className={s.profile__text}>
                            18|12|2001
              </div>
                    </div>

                    <div className={s.profile__box}>
                        <div className={s.profile__title}>
                            Sex
              </div>
                        <div className={s.profile__text}>
                            Male
              </div>
                    </div>

                    <div className={s.profile__box}>
                        <div className={s.profile__title}>
                            City
              </div>
                        <div className={s.profile__text}>
                            Los Angeles
              </div>
                    </div>

                    <div className={s.profile__box}>
                        <div className={s.profile__title}>
                            Status
              </div>
                        <div className={s.profile__text}>
                            Single
              </div>
                    </div>

                    <div className={s.profile__box}>
                        <div className={s.profile__title}>
                            Work
              </div>
                        <div className={s.profile__text}>
                            Web developer
              </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;