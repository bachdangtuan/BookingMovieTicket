const stateDefault = {

    isLoading: false,
    isComplete: false

}


export const LoadingReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'DISPLAY_LOADING':
            {
                state.isLoading = true;

                return { ...state }
            }
        case 'HIDE_LOADING':
            {
                state.isLoading = false;

                return { ...state }
            }

        case 'DAT_VE_HOAN_TAT':
            {
                state.isComplete = true;
                return { ...state }
            }

        case 'DAT_VE_HOAN_TAT_OFF':
            {
                state.isComplete = false;
                return { ...state }
            }

        default:
            return { ...state }
    }

}


