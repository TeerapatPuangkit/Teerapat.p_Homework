<template>
  <div class="container">
    <h1>My Contact</h1>
    <p>
      TEL : {{ tel }} <br /><br />
      E-mail : {{ mail }} <br /><br />
      Facebook : {{ Facebook }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: "086-101-4680",
      mail: "gabcodile@gmail.com",
      Facebook: "Teerapat Puangkit",
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