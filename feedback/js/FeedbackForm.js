'use strict';

const FeedbackForm = ({onSubmit, data}) => {

    let onsubmit = () => {
        const form = event.target;

        const salutionRadio = form.querySelector('input[name=salutation]:checked');
        const salution = salutionRadio ? salutionRadio.value : "";

        let snacksInput = form.querySelectorAll('input[name=snacks]');
        let snacks = [];

        snacksInput.forEach((item) => {

            if(item.checked)
                snacks.push(item.value)
        });

        let value = {
            salution,
            name:name.value,
            email:email.value,
            subject:subject.value,
            message:message.value,
            snacks
        };

       onSubmit(JSON.stringify(value));
       event.preventDefault();
    };

    return (
        <form className="content__form contact-form" onSubmit={onsubmit} >
            <div className="testing">
                <p>Чем мы можем помочь?</p>
            </div>
            <div className="contact-form__input-group">
                <input className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" defaultChecked={"Мистер" === data.salutation} type="radio" value="Мистер"/>
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
                <input className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" defaultChecked={"Мисис" === data.salutation} type="radio" value="Мисис"/>
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
                <input className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" defaultChecked={"Мис" === data.salutation} type="radio" value="Мис"/>
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="name">Имя</label>
                <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" defaultValue={data.name}/>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
                <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={data.email}/>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
                <select className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={data.subject}>
                    <option>У меня проблема</option>
                    <option>У меня важный вопрос</option>
                </select>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
                <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" defaultValue={data.message}/>
            </div>
            <div className="contact-form__input-group">
                <p className="contact-form__label--checkbox-group">Хочу получить:</p>
                <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца" checked={data.snacks.indexOf("пицца") !== -1}  />
                <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
                <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог" checked={data.snacks.indexOf("пирог") !== -1} />
                <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
            </div>
            <button className="contact-form__button" type="submit">Отправить сообщение!</button>
            <output id="result" />
        </form>
    );
};

FeedbackForm.defaultProps = {
    salutation: '',
    name: '',
    message: '',
    email: '',
    snacks: []
};