<template>
  <div>
    <v-row>
      <v-col cols="10" md="11">
        <h1 class="text-center">Bem-Vindo, Administrador</h1>
      </v-col>
      <v-col cols="2" md="1">
        <v-btn text>
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
        <v-btn text large class="mx-4">
          <v-icon left> mdi-domain </v-icon>
          Cadastrar Imobiliária
        </v-btn>
      </v-col>
      <!-- Solicitacao de COntratos Button-->
      <v-col cols="12" md="3" align="center" justify="center">
        <v-menu offset-y close-on-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text large v-bind="attrs" v-on="on">
              <v-icon left> mdi-file </v-icon>
              Solicitacoes de Contratos
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>

    <!-- Nao tem Imobiliaria Cadatrados -->
    <!-- <div style="height:50vh;" class="d-flex justify-center align-center">
      <div class="d-flex text-center">
        <h1>Não há Imobiliárias cadastradas. <br> Aperte no botão acima para cadastrar um imobiliária</h1> 
      </div>
    </div> -->

    <!-- Tem Imobiliaria Cadatrada -->
    <div>
      <v-row align="center" justify="center">
        <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4">
          <v-card class="pa-2 elevation-2" outlined width="400">
            <v-col>
              <v-row justify="center">
                <h2>Nome Imobiliaria</h2>
              </v-row>
              <v-col class="pa-3">
                <div>Email: exemplo@gmail.com</div>
                <div>Tel: (21)9999-9999</div>
              </v-col>
              <v-row justify="center" class="pt-3">
                <v-btn text>
                  <v-icon left> mdi-home </v-icon>
                  Imoveis
                </v-btn>
                <v-btn text>
                  <v-icon left> mdi-pencil </v-icon>
                  Editar
                </v-btn>
                <v-btn text>
                  <v-icon left> mdi-trash-can </v-icon>
                  Excluir
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