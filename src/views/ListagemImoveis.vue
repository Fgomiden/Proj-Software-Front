<template>
  <div>
    <v-row>
      <v-col cols="3" md="4">
        <h1 class="text-center">Castro Imoveis</h1>
      </v-col>
      <!-- Cadastrar Imob Button-->
      <v-col cols="3" md="3" align="center" justify="center">
        <v-btn text large class="mx-4">
          <v-icon left> mdi-home-plus </v-icon>
          Cadastrar Imóvel
        </v-btn>
      </v-col>
      <!-- Buscar Imob Button-->
      <v-col cols="3" md="5" align="center" justify="center">
        <v-text-field
          v-model="search"
          style="background: #eee"
          clearable
          flat
          solo
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Buscar Imóveis"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Nao tem Imovel Cadatrado -->
    <!-- <div style="height:50vh;" class="d-flex justify-center align-center">
      <div class="d-flex text-center">
        <h1>Não há Imóveis cadastrados. <br> Aperte no ícone para cadastrar um imóvel</h1> 
      </div>
    </div> -->

    <!-- Tem Imovel Cadatrado -->
    <div>
      <v-row align="center" justify="center">
        <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4">
          <v-card class="pa-2 elevation-2" outlined width="430">
            <v-col>
              <v-row justify="center">
                <h2>Nome Imovel</h2>
              </v-row>
              <v-col class="pa-3">
                <div>Proprietario: Fulano</div>
              </v-col>
              <v-col class="pa-3">
                <div>Inquilino: Siclano</div>
              </v-col>
              <v-row justify="center" class="pt-3">
                <v-btn text @click="() => $router.push('/detalhes-imovel')">
                  <v-icon left> mdi-menu </v-icon>
                  Detalhes
                </v-btn>
              </v-row>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
//import ImovelCienteCard from "../components/ImovelClienteCard";

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