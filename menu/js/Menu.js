const Menu = React.createClass({

    render: function () {

        let menu;

        if(this.props.opened) {
            let items = this.props.items.map((item, index) => {

                return (
                    <li>
                        <a key={index} href={item.href}>{item.title}</a>
                    </li>
                );
            });

            menu = (
                <div className="menu menu-open">
                    <div className="menu-toggle"><span/></div>
                    <nav>
                        <ul>

                            {items}

                        </ul>
                    </nav>
                </div>
            )
        } else {
            menu = (
                <div className="menu">
                    <div className="menu-toggle"><span/></div>
                </div>
            )
        }

        return menu;
    }
});