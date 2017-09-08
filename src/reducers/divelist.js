const divelist = (state = diveList, action) => {
    switch (action.type) {
        case 'ADD_DIVE':
            return [...state, action.dive]
        case 'EDIT_DIVE':
            return [
                ...state.slice(0, action.dive.id),
                action.dive,
                ...state.slice(action.dive.id + 1)
            ];
        default:
            return state
    }
};

const diveList = [
    {
        id: 0,
        site: 'Fethiye - Afkule',
        meter: '21',
        minute: '24',
        date: new Date(),
        notes: ''
    },
    {
        id: 1,
        site: 'Bodrum - Küçük Reef',
        meter: '24',
        minute: '32',
        date: new Date(),
        notes: 'İlk kebap dalışı'
    },
    {
        id: 2,
        site: 'Fethiye - Sarıyarlar',
        meter: '24',
        minute: '20',
        date: new Date(),
        notes: ''
    },
    {
        id: 3,
        site: 'Kaş - Kanyon',
        meter: '27',
        minute: '35',
        date: new Date(),
        notes: 'Tünelden geçtik'
    }
];

export default divelist;