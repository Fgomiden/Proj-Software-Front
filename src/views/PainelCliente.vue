<template>
  <div>
    <v-row>
      <v-col cols="3" md="4">
        <h1 class="text-center">Bem-Vindo, {{cliente.name}}</h1>
      </v-col>
      <!-- Cadastrar Imob Button-->
      <v-col cols="3" md="3" align="center" justify="center">
        <v-btn text large class="mx-4"  @click="() => $router.push('/cadastro-imovel')">
          <v-icon left> mdi-home-plus </v-icon>
          Cadastrar Imóvel
        </v-btn>
      </v-col>
      <!-- Buscar Imob Button-->
      <v-col cols="3" md="3" align="center" justify="center">
        <v-text-field
          v-model="search"
          style="background: #eee"
          clearable
          flat
          solo
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Buscar Imobiliárias"
        ></v-text-field>
      </v-col>
      <v-col cols="2" md="2" justify="center">
        <v-btn text @click="() => $router.push('/')">
          <v-icon left> mdi-exit-to-app </v-icon>
          Sair
        </v-btn>
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
                <v-btn text @click="openModal = Math.random()">
                  <v-icon left> mdi-file-document </v-icon>
                  Solicitar Seguro
                </v-btn>
              </v-row>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
      <SolicitarSeguro :open="openModal"/>
    </div>
  </div>
</template>

<script>
//import { getClients } from "../services/api";
import SolicitarSeguro from "@/components/SolicitarSeguro";
export default {
  name: "painel-cliente",
  components: {
    SolicitarSeguro,
  },
  data: () => ({
    openModal: 0,    
  }),
  // async created() {
  //   try {
  //     let clientes = await getClients();
  //     this.clientes = clientes;
  //     console.log("clientes", this.clientes);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
};
</script>

<style>
</style>