import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentList: [],
  },
  mutations: {
    SET_PAYMENT(state, payments) {
      state.paymentList = payments;
    },

    ADD_PAYMENT(state, pay) {
      state.paymentList.push(pay);
    },
  },

  getters: {
    getPayment: (state) => state.paymentList,
    getFullPayment: (state) => {
      return state.paymentList.reduce((a, b) => a + b.value, 0);
    },
  },
  actions: {
    fetchData({commit}){
        setTimeout(() => {
            const paymentList = [
                {
                  date: '28.03.23',
                  category: 'foot',
                  value: 169,
                },
                {
                  date: '29.03.23',
                  category: 'transport',
                  value: 250,
                },
                {
                  date: '29.03.23',
                  category: 'foot',
                  value: 49,
                },
                {
                  date: '30.03.23',
                  category: 'foot',
                  value: 211,
                },
              ];
              commit('SET_PAYMENT', paymentList)
        }, 1000);
    }
  },
  modules: {},
});
