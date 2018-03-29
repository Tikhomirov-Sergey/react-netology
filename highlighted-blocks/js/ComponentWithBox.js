
const ComponentWithBox = (Component) => {

    return class extends React.Component {
        render() {

           let componentWithBox;

           if(this.props.views > 1000) {
               componentWithBox = <Popular> <Component {...this.props}/> </Popular>;
           } else {
               componentWithBox = <New> <Component {...this.props}/> </New>;
           }

           return componentWithBox;
        }
    }
};