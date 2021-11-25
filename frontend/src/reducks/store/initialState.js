const initialState = {
    homes: {
        list: [],
    },
    saved: {
        list: []
    },
    tags: {
        list: []
    },
    user: { errors: {
            email: null,
            password: null,
            password_confirm: null,
            error: null,
    },}
};

export default initialState;
