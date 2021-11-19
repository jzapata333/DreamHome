const initialState = {
    homes: {
        list: [],
        hasNext: true
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
