<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <h1>Cadastro Imobiliária</h1>
        <v-row class="pt-4">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="imobName"
              :rules="nameRules"
              label="Nome da Imobiliária"
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="cnpj"
              :rules="nameRules"
              label="CNPJ"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="email"
              :rules="nameRules"
              label="Email"
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="telephone"
              :rules="nameRules"
              label="Telefone"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="password"
              :rules="nameRules"
              label="Senha"
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="password_confirm"
              :rules="nameRules"
              label="Confirmar Senha"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-btn depressed color="primary" @click="submit">Confirmar</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<script>
export default {
  name: "CadastroImob",
  data: () => ({
    imobName: "",
    cnpj: "",
    email: "",
    telephone: "",
    password: "",
    password_confirm: "",
  }),
  methods: {
    async submit() {
      
    },
  },
};
</script>
<!-- 
<template>
  <v-row justify="center">
    <v-dialog max-width="450" v-model="open" persistent @change="$emit('close', false)">
      <v-card>
        <v-card-title style="background: #2A2929;">
          <span class="headline">Criar um usuário</span>
          <v-spacer></v-spacer>
          <v-icon @click="$emit('close', false)">mdi-close</v-icon>
        </v-card-title>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container fluid>
            <v-row dense align="center" justify="center" style="width: 99%">
              <v-col cols="6">
                <v-text-field
                  v-model="name"
                  counter="10"
                  :rules="nameRules"
                  label="Nome"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  v-model="login"
                  :rules="loginRules"
                  label="Login"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  v-model="pass"
                  type="password"
                  :rules="passwordRules"
                  label="Senha"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-select
                  v-model="select"
                  :items="items"
                  :rules="[(v) => !!v || 'Tipo de Usuário é nescessário']"
                  label="Tipo do usuário"
                  required
                ></v-select>
              </v-col>

              <br />
              <v-row justify="center">
                <v-btn
                  :disabled="!valid"
                  :loading="loading"
                  color="orange"
                  class="mr-4"
                  outlined
                  rounded
                  @click="submit"
                >
                  Enviar
                </v-btn>

                <v-btn color="red" class="mr-4" outlined
                rounded @click="reset">
                  Limpar Formulário
                </v-btn>
              </v-row>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>
    {{checkValid}}
  </v-row>
</template>
<script>
import generateId from "@/utils/generateId";

export default {
  name: "CreateUser",
  props: { open: Boolean },
  data: () => ({
    valid: false,
    name: "",
    loading: false,
    nameRules: [
      (v) => !!v || "Nome é nescessário",
      (v) =>
        (v && v.length >= 5) ||
        "É nescessário mais de 5 caracteres",
    ],
    pass: "",
    passwordRules: [
      (v) => !!v || "Senha é nescessária",
      (v) =>
        (v && v.length >= 6) ||
        "É nescessário mais de 6 caracteres",
    ],
    login: "",
    loginRules: [
      (v) => !!v || "Login é nescessária",
      (v) =>
        (v && v.length >= 6) ||
        "É nescessário um Login com mais de 6 caracteres",
    ],
    select: null,
    items: ["admin", "separador", "motorista", "conferente"],
  }),
  methods: {
    async submit() {
      this.loading = true;
      if (this.$refs.form.validate()) {
        try {
          let md5 = require("md5");
          let user = {
            type: this.select,
            username: this.login,
            password: md5(this.pass),
            name: this.name,
            id: String(generateId()),
          };

          console.log(user);

          this.$emit("add-user", user);
          this.reset();
        } catch (error) {
          this.showNotification({
            text: error,
            color: "error",
          });
        }
      } else {
        this.showNotification({
          text: "Ocorreu um erro, olhe os campos e preencha novamente",
          color: "error",
        });
      }
      this.loading = false;
    },
    reset() {
      this.$refs.form.reset();
    },
  },
  computed: {
    checkValid() {
      if(this.name?.length > 5 && this.pass?.length > 6 && this.login?.length > 6) this.valid = true;
      else this.valid = false;
      return "";
    }
  }
};
</script>

-->
