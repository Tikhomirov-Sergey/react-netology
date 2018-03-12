
class FontSelector extends React.Component {

    constructor (props, context) {
        super(props, context);

        this.onSelect = this.onSelect.bind(this);
    }

    onSelect() {

        const font = this.props.fonts.filter((font) => {
            return font.name === event.target.value
        });

        this.props.onSelect(font[0]);
    }

    createSelection() {

        let select = this.props.fonts.map((item) => {

            return (
                <div className="grid center font-item" key={item.name}>
                    <input type="radio" name="font" value={item.name} id={item.name} defaultChecked={item.name === this.props.selectedFont} onChange={this.onSelect}/>
                    <label htmlFor="abc1" className="grid-1">

                        <div className="picture-font grid">
                            <div className="char">
                                <img className="font-img" src={`${item.path}/a.jpg`} alt="a"/>
                            </div>
                            <div className="char">
                                <img className="font-img" src={`${item.path}/b.jpg`} alt="b"/>
                            </div>
                            <div className="char">
                                <img className="font-img" src={`${item.path}/c.jpg`} alt="c"/>
                            </div>
                        </div>
                    </label>
                </div>
            );
        });

        return select;
    }

    render() {
        return (
            <div className="font-picker">
                {this.createSelection()}
            </div>
        )
    }
}