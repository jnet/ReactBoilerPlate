
import IAction = require('./../interfaces/IAction');
import ButtonActionTypes = require('./ButtonActionTypes');

class ButtonAction implements IAction {
    ActionType: ButtonActionTypes;
    Data: Object;
    constructor(data: any = {}, actionType = ButtonActionTypes.NONE) {
        this.Data = data;
        this.ActionType = actionType;
    }
}


export =  ButtonAction;