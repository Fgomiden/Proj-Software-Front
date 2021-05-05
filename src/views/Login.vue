<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-img src="/predio.png" alt="predio" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="6" class="center">
        <div class="form">
          <h3 class="text-center">Sistema Seguradora</h3>
          <v-form class="py-5">
            <v-text-field
              required
              label="Usuário"
              name="login"
              type="text"
              v-model="email"
            ></v-text-field>

            <v-text-field
              required
              id="password"
              label="Senha"
              name="password"
              type="password"
              v-model="password"
            ></v-text-field>

            <v-switch v-model="isAdmin" label="Admin"></v-switch>

            <v-btn
              color="primary"
              block
              @click="
                () =>
                  $router.push({
                    name: isAdmin ? 'painel-adm' : 'painel-cliente',
                    params: { clientLogin },
                  })
              "
              >Login</v-btn
            >
          </v-form>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getClients } from "../services/api";

export default {
  name: "Login",
  data: () => ({
    clientLogin: [],
    isAdmin: true,
    email: "",
    password: "",
  }),
  async created() {
    try {
      let clientLogin = await getClients();
      this.clientLogin = clientLogin;
      console.log("clientLogin", this.clientLogin);
    } catch (error) {
      console.log(error);
    }
  },

  computed: {
    cliente() {
      console.log("params do login no cliente", this.$route.params.cliente);
      return this.$route.params.cliente;
    },
  },
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