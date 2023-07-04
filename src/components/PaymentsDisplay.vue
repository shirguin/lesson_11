<template>
    <div>
        Общая сумма расходов: {{ getFV }}
        <div v-for="item in items" :key="item.id">
            {{ item.category }} {{ item.date }}  {{ item.value }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentsDisplay',
    props: {
        items: {
            type: Array,
            default() {
                return [];
            },
        },
    },

    data() {
        return {

        };
    },
    computed:{
getFV(){
    return this.$store.getters.getFullPayment;
}
    },

    methods: {

    },
};
</script>

<style scoped></style>