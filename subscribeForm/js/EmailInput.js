

class EmailInput extends React.Component {
    render () {
        return (
            <section>
                <label htmlFor="input-email" className="sr-only">Email</label>
                <input
                       type="email"
                       id="input-email"
                       placeholder="Email"
                       className="form-control"
                       ref={this.props.emailRef}
                       onChange={this.props.onchange}
                />
            </section>
        );
    }
}
