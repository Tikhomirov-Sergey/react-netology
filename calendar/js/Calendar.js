
let createArrayDays = (date) => {

    const lastDayMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const countDays = lastDayMonth.getDate();
    const countDaysInPrefMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const lastDay = lastDayMonth.getDay();

    const nextMonthDays = 7 - lastDay;
    const prefMonthDays = ~~((countDays - lastDay - 1 ) / 7);

    console.log(prefMonthDays);

    let days = [];
    let week = [];


    for(let i = countDaysInPrefMonth - prefMonthDays + 1; i <= countDaysInPrefMonth; i++)
    {
        week.push({ day: i, class: "ui-datepicker-other-month "});
    }

    let dayWeek = prefMonthDays + 1;

    for(let i = 1; i <= countDays; i++)
    {
       week.push({ day: i, class: (i === date.getDate()) ? "ui-datepicker-today " : "" });

       if(dayWeek === 7){
           dayWeek = 1;
           days.push(week);
           week = [];
       }
       else {
           dayWeek++;
       }
    }

    for(let i = 1; i <= nextMonthDays; i++)
    {
        week.push({ day: i, class: "ui-datepicker-other-month "});
    }

    days.push(week);

    return days;
};

let createCalendar = (date) => {

    let days = createArrayDays(date);

    days = days.map((items, indexWeek) => {

        let week = items.map((item, indexDay) => {

            return (
                <td key={indexDay} className={item.class}>

                    {item.day}

                </td>
            );

        });

        return (
          <tr key={indexWeek} >

              {week}

          </tr>
        );
    });

    return (
        <div>
        <table className="ui-datepicker-calendar">
            <thead>
            <tr>
                <th scope="col" title="Понедельник">Пн</th>
                <th scope="col" title="Вторник">Вт</th>
                <th scope="col" title="Среда">Ср</th>
                <th scope="col" title="Четверг">Чт</th>
                <th scope="col" title="Пятница">Пт</th>
                <th scope="col" title="Суббота">Сб</th>
                <th scope="col" title="Воскресенье">Вс</th>
            </tr>
            </thead>
            <tbody>

            {days}

            </tbody>
        </table></div>
    );
};


const Calendar = React.createClass({

    render: function () {

        let days = createCalendar(this.props.date);

        this.days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

        this.months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

        return (
            <div className="ui-datepicker">
                <div className="ui-datepicker-material-header">
                    <div className="ui-datepicker-material-day">{this.days[this.props.date.getDay()]}</div>
                    <div className="ui-datepicker-material-date">
                        <div className="ui-datepicker-material-day-num">{this.props.date.getDate()}</div>
                        <div className="ui-datepicker-material-month">{this.months[this.props.date.getMonth()]}</div>
                        <div className="ui-datepicker-material-year">{this.props.date.getFullYear()}</div>
                    </div>
                </div>
                <div className="ui-datepicker-header">
                    <div className="ui-datepicker-title">
                        <span className="ui-datepicker-month">{this.months[this.props.date.getMonth()]}</span>&nbsp;<span className="ui-datepicker-year">{this.props.date.getFullYear()}</span>
                    </div>
                </div>

                {days}

            </div>
        );
    }
});

