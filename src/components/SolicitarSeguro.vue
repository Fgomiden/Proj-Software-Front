<template>
  <v-dialog v-model="dialog" scrollable max-width="500px">
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
          <div>
            <strong>Valor: </strong>
            <span>100</span>
          </div>
        </v-row>
      </v-container>
      <v-card-actions class="d-flex justify-center">
        <v-btn text @click="dialog = false"> Enviar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      fire: false,
      explosion: false,
      storm: false,
      electricity: false,
      contract_value: 0,
    };
  },
  props: {
    open: Number,
  },
  watch: {
    open() {
      this.dialog = true;
    },
  },
};
</script>