<template>
  <div>
    <v-row>
      <v-col cols="10" md="11">
        <h1 class="text-center">Bem-Vindo, Administrador</h1>
      </v-col>
      <v-col cols="2" md="1">
        <!-- @click="() => $router.push('/')" -->
        <v-btn text @click="logout()">
          <v-icon left> mdi-exit-to-app </v-icon>
          Sair
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <!-- Buscar Imob Button-->
      <v-col cols="12" md="6" align="center" justify="center">
        <v-text-field
          v-model="search"
          clearable
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Buscar Imobiliárias"
        ></v-text-field>
      </v-col>
      <!-- Cadastrar Imob Button-->
      <v-col cols="12" md="3" align="center" justify="center">
        <v-btn
          text
          large
          class="mx-4"
          @click="() => $router.push('/cadastro-imob')"
        >
          <v-icon left> mdi-domain </v-icon>
          Cadastrar Imobiliária
        </v-btn>
      </v-col>
      <!-- Solicitacao de COntratos Button-->
      <v-col cols="12" md="3" align="center" justify="center">
        <v-btn text large @click="() => $router.push('/contratos')">
          <v-icon left> mdi-file </v-icon>
          Contratos
        </v-btn>
      </v-col>
    </v-row>

    <!-- Nao tem Imobiliaria Cadatrados -->
    <div
      style="height: 50vh"
      class="d-flex justify-center align-center"
      v-if="clientes.length == 0"
    >
      <div class="d-flex text-center">
        <h1>
          Não há Imobiliárias cadastradas. <br />
          Aperte no botão acima para cadastrar um imobiliária
        </h1>
      </div>
    </div>

    <!-- Tem Imobiliaria Cadatrada -->
    <div>
      <v-row align="center" justify="center">
        <v-col
          v-for="cliente in clientes"
          :key="cliente.id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="pa-2 elevation-2" outlined width="400">
            <v-col>
              <v-row justify="center">
                <v-col cols="8">
                  <h2>{{ cliente.name }}</h2>
                </v-col>
                <v-col cols="2">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn text>
                        <v-icon v-bind="attrs" v-on="on"> mdi-pencil </v-icon>
                      </v-btn>
                    </template>
                    <span>Editar</span>
                  </v-tooltip>
                </v-col>
                <v-col cols="2">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn text @click="deleteImovel">
                        <v-icon v-bind="attrs" v-on="on">
                          mdi-trash-can
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Excluir</span>
                  </v-tooltip>
                </v-col>
              </v-row>
              <v-col class="pa-3">
                <div>CNPJ: {{ cliente.cnpj }}</div>
                <div>Email: {{ cliente.email }}</div>
                <div>Tel: {{ cliente.phone }}</div>
              </v-col>
              <v-row justify="center" class="pt-3">
                <v-btn
                  text
                  @click="
                    () =>
                      $router.push({
                        name: 'listagem-imoveis',
                        params: { cliente },
                      })
                  "
                >
                  <v-icon left> mdi-home </v-icon>
                  Imóveis
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
import { getClients } from "../services/api";
export default {
  data: () => ({
    clientes: [],
  }),
  async created() {
    try {
      let clientes = await getClients();
      this.clientes = clientes;
      console.log("clientes", this.clientes);
    } catch (error) {
      console.log(error);
    }
  },
  
};
</script>

<style>
</style>