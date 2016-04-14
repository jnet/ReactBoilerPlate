
import flux = require('flux');
import IAction = require('./../interfaces/IAction');

var Dispatcher: flux.Dispatcher<IAction> = new flux.Dispatcher();

export = Dispatcher;