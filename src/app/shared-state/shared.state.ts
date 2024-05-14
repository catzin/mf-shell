import { Action, Selector, State, StateContext } from "@ngxs/store";
import { userStateModel } from "./shared-model";
import { Injectable } from "@angular/core";
import { AddLoggedUser } from "./shared.actions";
import { User } from "../core/models/user.model";


@State<userStateModel>({
    name:'user',
    defaults : {
        user : {
            name:'',
            email:'',
            token:''
        }
    }
})

@Injectable()
export class UserState{

    @Selector()
    static user(state : userStateModel):User{
        return state.user;
    }

    @Action(AddLoggedUser)
    public addLoggedUser({getState , patchState} : StateContext<userStateModel> , { payload} : AddLoggedUser){
        const state = getState();
        patchState({
            ...state,
            user : {
                ...payload
            }
        })
    }

}