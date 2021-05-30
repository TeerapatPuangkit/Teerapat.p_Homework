<template>
  <div class="container">
    <h1>Menu</h1>
    <img src="@/assets/Profile1.jpg" height="200" />
    <h3>
      1. &nbsp;<router-link :to="{ name: 'profile' }"> Profile </router-link>
      <br />
      2. &nbsp;<router-link :to="{ name: 'contact' }"> Contact </router-link>
    </h3>
  </div>
</template>

<script>
</script>
<style scoped>
div {
  margin: 0 0 0 40px;
}
</style>