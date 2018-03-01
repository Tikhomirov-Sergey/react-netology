'use strict';

const AuthForm = ({onAuth}) => {

    const regExpValidKey = {
        email:/[@\w.\-_]/,
        password:/[\w\-]/
    };

    let onSubmit = () => {

        let user = {
            name:username.value,
            email:email.value,
            password:password.value
        };

        if(onAuth && typeof onAuth === 'function')
            onAuth(user);

        event.preventDefault();
    };

    let onKeyDown = () => {

        const idInput = event.target.id;
        const regExp = regExpValidKey[idInput];

        if(regExp) {
            if(!regExp.test(event.key))
                event.preventDefault();
        }
    };

    return (
        <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={onSubmit} >
            <div className="Input">
                <input required type="text" placeholder="Имя" id="username"/>
                    <label/>
            </div>
            <div className="Input">
                <input type="email" placeholder="Электронная почта" id="email" onKeyDown={onKeyDown}/>
                    <label/>
            </div>
            <div className="Input">
                <input required type="password" placeholder="Пароль" id="password" onKeyDown={onKeyDown}/>
                    <label/>
            </div>
            <button type="submit">
                <span>Войти</span>
                <i className="fa fa-fw fa-chevron-right"/>
            </button>
        </form>
    );
};


