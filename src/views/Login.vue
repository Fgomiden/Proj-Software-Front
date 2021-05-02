<template>
  <div>
    <v-row>
      <!-- <v-col cols="6">
        <v-img src="/predio.png" alt="predio" aspect-ratio="1"></v-img>
      </v-col> -->
      <v-col class="center">
        <div class="form">
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
              type="e-mail"
              v-model="password"
              @keyup.enter="doLogin"
            ></v-text-field>

            <v-switch v-model="isAdmin" label="Admin ?"></v-switch>
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
// import { authenticationService } from '@/_services';
// import { router, Role } from '@/_helpers';
export default {
  name: "Login",
  data: () => ({
    isAdmin: true,
    email: "",
    password: "",
  }),
  methods: {
    async doLogin() {
      const { email, password } = this;

      try {
        const res = await this.$firebase
          .auth()
          .signInWithEmailAndPassword(email, password);

        window.uid = res.user.uid;
        this.$router.push("/painel-adm");
      } catch (e) {
        alert("Usuário/Senha Inválidos!");
      }
      /**
     *  if (this.user) {
        if (this.user.type == "admin" {
          this.$router.push('/painel-adm');
        } else {
          this.$router.push('/painel-cliente');
        }
      }
      admin@seguro.com
      admin123
     */
    },
    // beforeRouteEnter(to, from, next){
    //   next(vm => {
    //     if (window.uid) {
    //       vm.$router.push({name:'painel-adm'})
    //     }
    //   })
    // }
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