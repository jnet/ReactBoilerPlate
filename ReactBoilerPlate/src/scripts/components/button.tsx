// a simple example component
// using react and typescript
import React = require('react');
import ISubscriber = require('./../interfaces/ISubscriber');
import ButtonActionTypes = require('./../actions/ButtonActionTypes');
import ButtonAction = require('./../actions/ButtonAction');
import ButtonStore = require('./../stores/ButtonStore');
import Dispatcher = require('./../dispatcher/AppDispatcher');

interface ButtonProps {
    Text: string
}

interface ButtonState {
    SayHello: boolean;
}

class Button extends React.Component<ButtonProps, ButtonState>
    implements ISubscriber {
    
    constructor(props) {
        super(props);
        let store = new ButtonStore();
        store.Subscribe(this);
        this.state = {
            SayHello: false
        };
    }

    /**
    * the notify method takes
    * a javascript object from
    * a store that it is subscribed
    * to, it then updates its state
    * so the compnent can be re-rendered
    * @data {object} the new state of the component
    */
    public Notify(data: any) {
        this.setState(data);
    }

    public render() {
        return (
            <div>
                <a href="#" onClick={this.handleClick.bind(this) } className="btn btn-default">
                    say hello again 7
                </a>
                <div>
                    {this.state.SayHello ? "Hello!!" : ""}
                </div>
            </div>
        );
    }

    /**
    * handles the click event of the anchor
    * by sending a new action to the application
    * dispatcher which will then be delivered 
    * to all registered stores
    */
    private handleClick() {
        let buttonAction = new ButtonAction({ SayHello : true }, ButtonActionTypes.CLICKED);
        Dispatcher.dispatch(buttonAction);
    }
}

export = Button;
