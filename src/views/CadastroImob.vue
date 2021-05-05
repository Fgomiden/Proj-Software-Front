<template>
  <div>
    <v-form v-model="valid">
      <div class="text-red" v-if="error">{{ error }}</div>
      <v-container>
        <h1>Cadastro Imobiliária</h1>
        <v-row class="pt-4">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="name"
              label="Nome da Imobiliária"
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="cnpj"
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
              label="Email"
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="phone"
              label="Telefone"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="password"
              label="Senha"
              type="password"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-btn depressed color="primary" @click="saveClients"
            >Confirmar</v-btn
          >
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import { submitClients } from "../services/api";

export default {
  name: "CadastroImob",
  data: () => ({
    name: "",
    cnpj: "",
    email: "",
    phone: "",
    password: "",
    error: "",
  }),
  methods: {
    async saveClients() {
      const imobiliaria = {
        name: this.name,
        cnpj: this.cnpj,
        email: this.email,
        phone: this.phone,
        password: this.password,
      };
      console.log(imobiliaria);

      await submitClients(imobiliaria);
      alert("Cadastro feito com sucesso");
    },
  },
};
</script>