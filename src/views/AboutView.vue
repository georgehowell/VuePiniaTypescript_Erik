<script setup lang="ts">
  import { mapActions, storeToRefs } from 'pinia';
  import { useCounterStore } from '../stores/useCounter';

  const main = useCounterStore()
  const {counter, name} = storeToRefs(main);
  const {addOne, minusOne, reset} = main;

  function add(value: number) {
      main.$patch(state => (state.counter += value))
  }

  main.$subscribe((mutation, state) => {
    console.log("mutation: ", mutation);
    console.log("state: ", state);
  })

  // replaced by shor-thand version above:
  // const { addOne } = mapActions(useCounterStore, ['addOne']);
  // addOne(value: number) {
  //      counter: counter.value + value
  // }

  // function reset() {
  //     main.$reset();
  // }

</script>


<template>
  <h1 class="mb-10">This is an about page</h1>
  <div class="about">
    
    <div class="counter">
      <h4>Counter: {{ counter }}</h4>
      <button @click="addOne" class="btn">add one</button>
      <button @click="minusOne" class="btn">minus one</button>
      <button @click="add(15)" class="btn">add 15</button>
      <button @click="reset"> Reset Store</button>
    </div>

  </div>
</template>


<style>
.counter {
  text-align: center;
  display: flex;
  flex-direction: column;
}
.counter button {margin: 5px auto; width: 150px}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: top;
  }

}
</style>
