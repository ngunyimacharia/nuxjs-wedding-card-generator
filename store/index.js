export const state = () => ({
    names: {
        bride: "Eve",
        groom: "Adam"
    },
    date: {
        day: "SATURDAY",
        month: "AUG",
        date: 17,
        year: 2022,
        time: "4 PM"
    },
    address: {
        first: "Avocado Tree - Volcano of Trust",
        second: "Garden of Eden - Mesopotamia"
    }
});

export const getters = {
    names: state => state.names,
    date: state => state.date,
    address: state => state.address
};

export const mutations = {

};

export const actions = {

};