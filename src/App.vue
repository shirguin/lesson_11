<template>
  <div id="app">
    <PaymentsDisplay :items="paymentList"/>
    <AddList @addNewPay="addNewPay"/>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue';
import AddList from './components/AddList.vue';

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddList
  },
  data() {
    return {
      paymentList: [],
      
    };
  },

  methods: {
    fetchData() {
      return [
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
    },

    addNewPay(data){
      this.paymentList.push(data);
    }
  },

  created(){
    this.paymentList = this.fetchData();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
