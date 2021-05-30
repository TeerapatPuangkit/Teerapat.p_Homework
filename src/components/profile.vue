<template>
  <div class="container">
    <h1>My Profile</h1>
    <p style="color: black">
      Name : {{ name }} <br /><br />Nick name : {{ n_name }}<br /><br />
      Age : {{ Age }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Teerapat Puangkit",
      n_name: "Gab",
      Age: "21",
    };
  },
};
</script>

<style scoped>
h1 {
  margin: 40px 0 40px;
  text-align: center;
}
p {
  margin: 40px 0 0 40px;
}
h2 {
  margin: 40px 0 40px 0;
  text-align: center;
}
</style>>