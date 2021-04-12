<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <h1>Cadastro Imóvel</h1>
        <v-row class="pt-4"> 
          <v-col cols="12" md="6">
            <v-text-field
              v-model="imobName"
              :rules="nameRules"
              label="Nome do proprietário"
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="cnpj"
              :rules="nameRules"
              label="CPF do proprietário"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="Nome do Inquilino"
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="CPF do Inquilino"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Endereço"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="Número"
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="CEP"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="Complemento"
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-select :items="items" label="Tipo do imóvel" outlined></v-select>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-btn depressed color="primary">Cadastrar</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
