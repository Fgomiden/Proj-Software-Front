<template>
  <!-- <v-dialog v-model="dialog" fullscreen> -->
  <v-form v-model="valid">
    <v-container>
      <h1>Cadastro Imóvel</h1>
      <v-row class="pt-4">
        <v-col cols="12" md="6">
          <v-text-field
            v-model="owner_name"
            :rules="nameRules"
            label="Nome do proprietário"
            required
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="owner_cpf"
            label="CPF do proprietário"
            required
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="tenant_name"
            label="Nome do Inquilino"
            required
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="tenant_cpf"
            label="CPF do Inquilino"
            required
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="street_name"
            label="Endereço"
            required
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="estate_number"
            label="Número"
            required
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="cep"
            label="CEP"
            required
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <!-- <v-col cols="12" md="6">
          <v-text-field
            v-model="firstname"
            label="Complemento"
            required
            outlined
          ></v-text-field>
        </v-col> -->

        <v-col cols="12" md="6">
          <v-select
            :items="tipos"
            v-model="estate_type"
            label="Tipo do imóvel"
            outlined
          ></v-select>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-btn depressed color="primary" @click="saveEstates">Cadastrar</v-btn>
      </v-row>
    </v-container>
  </v-form>
  <!-- </v-dialog> -->
</template>

<script>
import { submitEstates } from "../services/api";
export default {
  data: () => ({
    owner_name: "",
    owner_cpf: "",
    tenant_name: "",
    tenant_cpf: "",
    street_name: "",
    estate_number: "",
    cep: "",
    estate_type: "",
    // dialog: false,
    tipos: ["Apartamento", "Casa", "Terreno"],
  }),
  methods: {
    /**
     * Add validacao
     * Owner name is too short (minimum is 6 characters), 
     * Owner cpf is too short (minimum is 11 characters), 
     * Tenant cpf is too short (minimum is 11 characters), 
     * Client can't be blank, 
     * Client is too short (minimum is 1 character))
     */
    async saveEstates() {
      const imoveis = {
        owner_name: this.owner_name,
        owner_cpf: this.owner_cpf,
        tenant_name: this.tenant_name,
        tenant_cpf: this.tenant_cpf,
        street_name: this.street_name,
        estate_number: this.estate_number,
        cep: this.cep,
        estate_type: this.estate_type,
        client_id:1, //Implementar o id do cliente qnd der o get
      };
      console.log(imoveis);
      await submitEstates(imoveis);
    },
  },
  // props: {
  //   open: Number,
  // },
  // watch: {
  //   open() {
  //     this.dialog = true;
  //   },
  // },
};
</script>