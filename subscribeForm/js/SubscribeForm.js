

class SubscribeForm extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            classNameForm:''
        };

        this.onchange = this.onchange.bind(this);
    }

    render () {

        return (
            <div className="subscribe__form">
                <form className={`form form--subscribe ${this.state.classNameForm}`}>
                    <h4 className="form-title">Подписаться:</h4>
                    <div className="form-group">
                        <EmailInput
                            emailRef={el => this.emailText = el}
                            onchange={this.onchange}
                        />
                        <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
                        <button type="submit" className="form-next">
                            <i className="material-icons">keyboard_arrow_right</i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }

    onchange() {

        let isValid = this.emailText.validity.valid;
        let classNameForm = isValid ? 'is-valid' : 'is-error';

        this.setState({ classNameForm });
    }
}