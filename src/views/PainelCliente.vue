<template>
  <div>
    <v-row>
      <v-col cols="3" md="4">
        <h1 class="text-center">Bem-Vindo, Castro Imóveis</h1>
      </v-col>
      <!-- Cadastrar Imob Button-->
      <v-col cols="3" md="3" align="center" justify="center">
        <v-btn
          text
          large
          class="mx-4"
          @click="
            () =>
              $router.push({
                name: 'cadastro-imovel',
                params: { cliente: { name: cliente.name, id: cliente.id } },
              })
          "
        >
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
    <div
      style="height: 50vh"
      class="d-flex justify-center align-center"
      v-if="imoveis.length == 0"
    >
      <div class="d-flex text-center">
        <h1>
          Não há Imóveis cadastrados. <br />
          Aperte no ícone para cadastrar um imóvel
        </h1>
      </div>
    </div>

    <!-- Tem Imovel Cadatrado -->
    <div>
      <v-row align="center" justify="center">
        <v-col
          v-for="imovel in imoveis"
          :key="imovel.id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="pa-2 elevation-2" outlined width="430">
            <v-col>
              <v-col class="pa-3">
                <div>Imóvel: {{ imovel.street_name }}</div>
              </v-col>
              <v-col class="pa-3">
                <div>Proprietario: {{ imovel.owner_name }}</div>
              </v-col>
              <v-col class="pa-3">
                <div>Inquilino: {{ imovel.tenant_name }}</div>
              </v-col>
              <v-row justify="center" class="pt-3">
                <v-btn
                  text
                  @click="
                    () =>
                      $router.push({
                        name: 'detalhes-imovel',
                        params: { imovel },
                      })
                  "
                >
                  <v-icon left> mdi-menu </v-icon>
                  Detalhes
                </v-btn>
                <v-btn text @click="dialog = true">
                  <v-icon left> mdi-file-document </v-icon>
                  Solicitar Seguro
                </v-btn>
              </v-row>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog :open="openModal" v-model="dialog" scrollable max-width="500px">        
        <v-card>
          <v-card-title primary-title>
            Solicitar Seguro
            <v-spacer></v-spacer>
            <v-icon @click="dialog = false">mdi-close-thick</v-icon>
          </v-card-title>
          <v-container>
            <v-row align="center" class="d-flex justify-center">
              <div>Escolha as opções abaixo para cálculo do Seguro:</div>
              <v-col cols="12" sm="6">
                <v-row justify="center" align="center">
                  <v-checkbox v-model="fire"></v-checkbox>
                  Incêndio
                </v-row>
                <v-row justify="center" align="center">
                  <v-checkbox v-model="storm"></v-checkbox>
                  Vendaval
                </v-row>
              </v-col>
              <v-col cols="12" sm="6">
                <v-row justify="center" align="center">
                  <v-checkbox v-model="explosion"></v-checkbox>
                  Explosão
                </v-row>
                <v-row justify="center" align="center">
                  <v-checkbox v-model="electricity"></v-checkbox>
                  Elétrico
                </v-row>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions class="d-flex justify-center">
            <v-btn text @click="submitContratos">
              Enviar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { submitContracts, getEstates } from "../services/api";
// import { getClients } from "../services/api";

export default {
  name: "painel-cliente",

  data: () => ({
    openModal: 0,
    imoveis: [],
    cliente: { name: "Castro Imoveis", id: 9 },
    dialog: false,
    fire: false,
    explosion: false,
    storm: false,
    electricity: false,
  }),
  props: {
    open: Number,
  },
  async created() {
    try {
      let imoveis = await getEstates();
      this.imoveis = imoveis;
      console.log("imoveis", this.imoveis);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {    
    async submitContratos() {
      const contrato = {
        fire: this.fire,
        explosion: this.explosion,
        storm: this.storm,
        electricity: this.electricity,
        estate_id: 4,
      };
      console.log(contrato);
      await submitContracts(contrato);
      alert("Enviado com sucesso");       
    },
  },
  watch: {
    open() {
      this.dialog = true;
    },
  },
  computed: {
    cliente() {
      console.log("params do cliente nos imoveis", this.$route.params.cliente);
      return this.$route.params.cliente;
    },
  },  
  
};
</script>

<style>
</style>