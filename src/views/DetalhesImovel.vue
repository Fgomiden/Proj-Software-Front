<template>
  <div>
    <v-row>
      <v-col cols="3" md="7">
        <h1>Detalhes</h1>
      </v-col>
      <!-- Buscar Imovel Button-->
      <v-col cols="3" md="5" align="center" justify="center">
        <v-text-field
          v-model="search"
          clearable
          flat
          solo
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Buscar Documentos"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-col>
      <v-row>
        <v-col cols="12" sm="3">
          <div><strong>Endereço</strong></div>
          <div>{{ imovel.street_name }}</div>
          <br />
          <v-col>
            <div><strong>Numero</strong></div>
            <div>{{ imovel.estate_number }}</div>
            <div><strong>CEP</strong></div>
            <div>{{ imovel.cep }}</div>
          </v-col>
        </v-col>
        <v-col cols="12" sm="3">
          <div><strong>Proprietario</strong></div>
          <div>{{ imovel.owner_name }}</div>
          <br />
          <div><strong>CPF</strong></div>
          <div>{{ imovel.owner_cpf }}</div>
        </v-col>
        <v-col cols="12" sm="3">
          <div><strong>Inquilino</strong></div>
          <div>{{ imovel.tenant_name }}</div>
          <br />
          <div><strong>CPF</strong></div>
          <div>{{ imovel.tenant_cpf }}</div>
        </v-col>
      </v-row>
    </v-col>

    <!--Lista Documentos -->
    <div>
      <v-row>
        <v-col cols="6" sm="6">
          <h1>Documentos</h1>
        </v-col>
        <v-col cols="6" sm="3" align-self="center" class="text-center">
          <v-file-input
            prepend-icon="mdi-paperclip"
            @change="onFileSelected"
          ></v-file-input>
        </v-col>
        <v-col cols="6" sm="3" align-self="center" class="text-center">
          <v-btn text @click="onUpload">
            <v-icon left>mdi-upload</v-icon>
            Enviar Documentos
          </v-btn>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col v-for="n in 3" :key="n" cols="12">
          <v-card class="pa-2 elevation-2" outlined>
            <v-row>
              <v-col cols="7" md="8" class="d-flex">
                <v-icon class="mx-1"> mdi-file-document </v-icon>
                <h2>Doc.pdf</h2>
              </v-col>
              <v-col cols="3" md="2">
                <div>Enviado: 05/10/22 14:25</div>
              </v-col>
              <v-col cols="3" md="2">
                <v-btn text>
                  <v-icon> mdi-download-outline </v-icon>
                </v-btn>
                <v-btn text>
                  <v-icon> mdi-trash-can-outline </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    imoveis: [],
  }),
  computed: {
    imovel() {
      return this.$route.params.imovel;
    },
  },
};
</script>

<style>
</style>