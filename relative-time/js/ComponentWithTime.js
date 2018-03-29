
const ComponentWithCustomDate = (Component) => {

    return class extends React.Component {

        settings = [
            {
                value: 1000*60*60*24,
                message:' дней назад'
            },
            {
                value: 1000*60*60,
                message:' часов назад'
            },
            {
                value: 1000*60,
                message:' минут назад'
            }
        ];

        getDateTime() {

            const now = new Date();
            const dateComponent = new Date(this.props.date);

            const interval = now - dateComponent;

            let date;

            this.settings.every((setting) => {
                if(interval > setting.value) {

                    date = parseInt(interval / setting.value);
                    date += setting.message;

                    return false;
                }

                return true;
            });

            return date;
        }

        render() {

           let date = this.getDateTime();

           return <Component date={date}/>
        }
    }
};