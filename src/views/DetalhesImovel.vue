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
          label="Buscar Imobiliárias"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-col>
      <v-col class="text-center">
        <span> <strong>Cond. Rio 2, B1, Apt 305</strong> </span>
      </v-col>
      <v-row>
        <v-col cols="12" sm="3">
          <div><strong>Endereço</strong></div>
          <div>Rua Alfredo Ceschiatti, 10</div>
          <br />
          <div><strong>Bairro</strong></div>
          <div>Barra da Tijuca</div>
        </v-col>
        <v-col cols="12" sm="3">
          <div><strong>CEP</strong></div>
          <div>22755-040</div>
          <br />
          <div><strong>Local</strong></div>
          <div>Rio de Janeiro, RJ</div>
        </v-col>
        <v-col cols="12" sm="3">
          <div><strong>Proprietario</strong></div>
          <div>Sofia Almeida</div>
          <br />
          <div><strong>CPF</strong></div>
          <div>999.999.999-00</div>
        </v-col>
        <v-col cols="12" sm="3">
          <div><strong>Inquilino</strong></div>
          <div>Jose Nunes</div>
          <br />
          <div><strong>CPF</strong></div>
          <div>999.999.999-00</div>
        </v-col>
      </v-row>
    </v-col>

    <!--Lista Documentos -->
    <div>
      <v-row>
        <v-col cols="6" sm="9">
          <h1>Documentos</h1>
        </v-col>
        <!-- v-if qnd for admin habilitar Enviar Doc -->
        <v-col cols="6" sm="3" align-self="center" class="text-center">
          <v-btn>
            <v-icon left> mdi-upload </v-icon>
            Enviar Documentos
          </v-btn>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col v-for="n in 6" :key="n" cols="12">
          <v-card class="pa-2 elevation-2" outlined>
            <v-row>
              <v-col cols="7" md="8" class="d-flex">
                <v-icon class="mx-1"> mdi-file-document </v-icon>
                <h2>Nome_Doc.pdf</h2>
              </v-col>
              <v-col cols="3" md="2">
                <div>Enviado: 05/10/22 14:25</div>
              </v-col>
              <v-col cols="3" md="2" >
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
    items: [
      { title: "Contrato 1" },
      { title: "Contrato 2" },
      { title: "Contrato 3" },
    ],
  }),
};
</script>

<style>
</style>