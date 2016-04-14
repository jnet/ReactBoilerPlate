
import ISubscriber = require('./ISubscriber');

interface IStore {
    Subscribe(subscriber: ISubscriber): string;
    Publish(data : any): void;
}

export = IStore;