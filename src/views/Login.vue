<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          src="/predio.png"
          alt="predio"
          aspect-ratio="1"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6" class="center">
        <div class="form">
          <v-form class="py-5">
            <v-text-field
              label="Usuário"
              name="login"
              type="text"
            ></v-text-field>

            <v-text-field
              id="password"
              label="Senha"
              name="password"
              type="password"
            ></v-text-field>
            <v-btn
              block
              color="primary"
              @click="() => $router.push('/cadastro-imob')"
              >Login</v-btn
            >
          </v-form>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
};
</script>

<style>
.center {
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  width: 400px;
}
</style>