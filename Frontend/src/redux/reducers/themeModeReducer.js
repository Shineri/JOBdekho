import { THEME_MODE } from "../constants/themeConstant";

export const modeReducer =(states={toggleActive:true},action)=>{
    switch (action.type) {
        case THEME_MODE:
            return {
                ...states,
                toggleActive: !states.toggleActive,
                mode: states.toggleActive ? "light":"dark"
            }
            
           
    
        default:
           return states;
    }
}