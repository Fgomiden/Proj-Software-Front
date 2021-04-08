<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <h1>Cadastro Imobiliária</h1>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="imobName"
              :rules="nameRules"
              label="Nome da Imobiliária"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="cnpj"
              :rules="nameRules"
              label="CNPJ"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="Email"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Telefone"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="Senha"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Confirmar Senha"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-btn depressed color="primary">Confirmar</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
