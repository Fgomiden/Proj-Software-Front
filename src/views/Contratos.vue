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
              <v-col
                cols="12"
                sm="3"
                align-self="center"
                class="d-flex justify-center justify-md-start"
              >
                <div>
                  <v-btn text>
                    <v-icon color="#5B5959"> mdi-plus-circle-outline </v-icon>
                  </v-btn>
                  <v-btn text>
                    <v-icon color="#8FD66E"> mdi-check-circle-outline </v-icon>
                  </v-btn>
                  <v-btn text>
                    <v-icon color="#F18080"> mdi-close-circle-outline </v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <!--Lista Documentos -->
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
export default {
  data: () => ({
    items: [
      { title: "Contrato 1" },
      { title: "Contrato 2" },
      { title: "Contrato 3" },
    ],
    dates: [],
  }),
  methods: {
    // getMaxAndMinDates(dates) {
    //   let formatedDates = {
    //     max: "2001-1-1",
    //     min: "2099-1-1",
    //   };
    //   dates.forEach((d) => {
    //     if (d > formatedDates.max) formatedDates.max = d;
    //     if (d < formatedDates.min) formatedDates.min = d;
    //   });
    //   return formatedDates;
    // },
  },
};
</script>

<style>
</style>