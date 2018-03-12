//const TextRenderLine = ({value, onChange}) => {


class TextRenderLine extends React.Component {

    constructor (props, context) {
        super(props, context);

        this.onChange = this.onChange.bind(this);
    }

    onChange () {
    	this.props.onChange(event.target.value);
	}

    render() {

        return (
			<div className="type-text">
				<div className="type-text">
					<textarea name="text" id="font-text" cols="30" rows="2" placeholder="Введите текст для футболки" defaultValue={this.props.value} onChange={this.onChange}/>
				</div>
			</div>
        );
	}
}