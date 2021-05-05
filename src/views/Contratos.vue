<template>
  <div>
    <v-col>
      <v-col>
        <h1>Contratos</h1>
      </v-col>
      <v-col>
        <h1>Solicitações</h1>
      </v-col>
    </v-col>
    <v-col>
      <v-row align="center" justify="center">
        <v-col cols="6">
          <v-col
            v-for="openEstate in openEstates"
            :key="openEstate.id"
            cols="12"
          >
            <v-row>
              <v-col cols="12" sm="4">
                <div>
                  Proprietário: {{ openEstate.owner_name }} CPF:
                  {{ openEstate.owner_cpf }}
                </div>
                <div>
                  Inquilino: {{ openEstate.tenant_name }} CPF:{{
                    openEstate.tenant_cpf
                  }}
                </div>
              </v-col>
              <v-col cols="12" sm="4">
                <div>Aluguel: R$ {{ openEstate.rent_price }}</div>
              </v-col>
              <v-col cols="12" sm="4">
                <div>End.: {{ openEstate.street_name }}</div>
                <div>Tipo do Imóvel: {{ openEstate.estate_type }}</div>
              </v-col>
            </v-row>
          </v-col>
        </v-col>
        <v-col cols="6">
          <v-col
            v-for="openContract in openContracts"
            :key="openContract.id"
            cols="12"
          >
            <v-row>
              <v-col cols="12" sm="3">
                <div>Valor: R$ {{ openContract.contract_value }}</div>
              </v-col>
              <v-col cols="12" sm="3">
                <div>Eletricidade: {{ openContract.electricity }}</div>
                <div>Vendaval: {{ openContract.storm }}</div>
                <div>Explosão: {{ openContract.explosion }}</div>
                <div>Fogo: {{ openContract.fire }}</div>
              </v-col>
              <v-col cols="12" sm="3">
                <div>Enviado: {{ convertTime(openContract.created_at) }}</div>
              </v-col>
              <v-col cols="12" sm="3">
                <v-row align-self="center">
                  <div>
                    <v-btn text>
                      <v-icon color="#8FD66E">
                        mdi-check-circle-outline
                      </v-icon>
                    </v-btn>
                    <v-btn text>
                      <v-icon color="#F18080">
                        mdi-close-circle-outline
                      </v-icon>
                    </v-btn>
                  </div>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-col>
      </v-row>
    </v-col>

    <!--Histórico Documentos -->
    <v-col>
      <v-row class="my-4">
        <v-col>
          <h1>Histórico</h1>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-date-picker v-model="dates" range no-title scrollable>
          <v-spacer></v-spacer>
          <v-row>
            <v-col cols="6">
              <v-btn :disabled="loading" text @click="dates = []">Limpar</v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn :disabled="loading" text>Pesquisar</v-btn>
            </v-col>
          </v-row>
        </v-date-picker>
      </v-row>
      <v-row align="center" justify="center">
        <v-col v-for="n in 3" :key="n" cols="12">
          <v-card class="pa-2 elevation-2" outlined>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                class="d-flex justify-center justify-md-start"
              >
                <v-icon class="mx-1"> mdi-file-document </v-icon>
                <h2>Nome_Doc.pdf</h2>
              </v-col>
              <v-col
                cols="12"
                sm="3"
                class="d-flex justify-center justify-md-start align-center"
              >
                <div>Enviado: 05/10/22 14:25</div>
              </v-col>
              <v-col cols="12" sm="3" class="d-flex justify-center">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn text>
                      <v-icon v-bind="attrs" v-on="on" color="#5B5959">
                        mdi-plus-circle-outline
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Ver mais</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn text>
                      <v-icon v-bind="attrs" v-on="on" color="#5B5959">
                        mdi-trash-can-outline
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Excluir</span>
                </v-tooltip>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import moment from "moment";
import { getOpenContracts, getOpenEstates } from "../services/api";

export default {
  data: () => ({
    openContracts: [],
    openEstates: [],
  }),
  async created() {
    try {
      let c = await getOpenContracts();
      let e = await getOpenEstates();
      this.openContracts = c;
      this.openEstates = e;
      console.log("openContracts", this.openContracts);
      console.log("openEstates", this.openEstates);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    convertTime(time) {
      return moment(time).format("DD/MM/YYYY HH:mm:ss");
    },
  },
};
</script>

<style>
</style>