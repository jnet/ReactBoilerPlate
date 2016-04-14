
import IStore = require('./../interfaces/IStore');
import ISubscriber = require('./../interfaces/ISubscriber');
import IAction = require('./../interfaces/IAction');
import Dispatcher = require('./../dispatcher/AppDispatcher');

class ButtonStore implements IStore {
    private _subscribers: ISubscriber[];

    constructor() {
        this._subscribers = [];
        Dispatcher.register(this.Update.bind(this));
    }

    public Update(action: IAction) {
        this.Publish(action.Data);
    } 

    public Subscribe(subscriber: ISubscriber): string {
        this._subscribers.push(subscriber);   
        return "";
    }

    public Publish(data: any): void {
        for (let sub of this._subscribers) {
            sub.Notify(data);
        }
    }
}

export = ButtonStore;