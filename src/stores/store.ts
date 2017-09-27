import dispatcher from './../dispatcher/appdispatcher';
import Action from './../interfaces/action';

export default abstract class Store {
  private subscribers : Array<any>;
  constructor() {
    this.subscribers = [];
    dispatcher.register(this.update.bind(this));
  }

  public abstract update(action : Action);
  public abstract getInitialState();

  public subscribe(subscriber) : void {
    this.subscribers.push(subscriber);
  }

  public publish(data) : void {
    for(let subscriber of this.subscribers) {
      subscriber.update(data);
    }
  }
}