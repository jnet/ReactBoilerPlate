
import * as flux from 'flux';
import IAction from './../interfaces/action';

var Dispatcher: flux.Dispatcher<IAction> = new flux.Dispatcher();

export default Dispatcher;