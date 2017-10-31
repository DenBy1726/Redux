import React from "react"
let connect = require("react-redux").connect;
import actions from "./actions.js"

class PhoneForm extends React.Component {
    constructor(props) {
        console.log("PhoneForm constructor");
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        console.log("PhoneForm onClick");
        if (this.refs.phoneInput.value !== "") {
            let itemText = this.refs.phoneInput.value;
            this.refs.phoneInput.value = "";
            return this.props.addPhone(itemText);
        }
    }

    render() {
        console.log("PhoneForm render");
        return <div>
            <input ref="phoneInput"/>
            <button onClick={this.onClick}>Добавить</button>
        </div>
    }
}

class PhoneItem extends React.Component {
    constructor(props) {
        console.log("PhoneItem constructor");
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        console.log("PhoneItem onClick");
        this.props.deletePhone(this.props.text)
    }

    render() {
        console.log("PhoneItem render");
        return <div>
            <p>
                <b>{this.props.text}</b><br />
                <button onClick={this.onClick}>Удалить</button>
            </p>
        </div>
    }
}

class PhonesList extends React.Component {
    constructor(props) {
        console.log("PhonesList constructor");
        super(props);
    }

    render() {
        console.log("PhonesList render");
        return <div>
            {this.props.phones.map(item =>
                <PhoneItem key={item}
                           text={item}
                           deletePhone={this.props.deletePhone}/>
            )}
        </div>
    }
}

class AppView extends React.Component {

    render() {
        console.log("AppView render");
        //форме нужно отдать только действие добавления
        //списку отдает все свойства
        return <div>
            <PhoneForm addPhone={this.props.addPhone}/>
            <PhonesList {...this.props} />
        </div>
    }
}

function mapStateToProps(state) {
    console.log("mapStateToProps");
    return {
        phones: state.get("phones")
    };
}

//связываем действия и состояние с видом
module.exports = connect(mapStateToProps, actions)(AppView);
export default AppView;