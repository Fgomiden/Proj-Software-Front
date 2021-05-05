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
              @keyup.enter="doLogin"
            ></v-text-field>

            <v-text-field
              required
              id="password"
              label="Senha"
              name="password"
              type="password"
              v-model="password"
              @keyup.enter="doLogin"
            ></v-text-field>

            <v-switch v-model="isAdmin" label="Admin"></v-switch>
            <!-- () => $router.push(isAdmin ? '/painel-adm' : '/painel-cliente') -->
            <!-- @click="doLogin" -->

              <!-- :disabled="!email || !password" -->
            <v-btn
              color="primary"
              block
              @click="() => $router.push(isAdmin ? '/painel-adm': '/painel-cliente')"
              >Login</v-btn
            >
          </v-form>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getUsers } from "../services/api";

export default {
  name: "Login",
  data: () => ({
    // users:[],
    isAdmin: true,
    email: "",
    password: "",
  }),
  async created() {
    try {
      let users = await getUsers();
      this.users = users;
      console.log("users", this.users);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async doLogin() {     
      
      // if (this.users) {
      //   if (this.users.type == "admin") {
      //     this.$router.push('/painel-adm');
      //   } else {
      //     this.$router.push('/painel-cliente');
      //   }
      // }
       
      // admin@gmail.com
      // admin123
      // cliente@gmail.com
      // cliente123
     
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