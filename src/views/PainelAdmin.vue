<template>
  <div>
    <v-row>
      <v-col cols="10" md="11">
        <h1 class="text-center">Bem-Vindo, Administrador</h1>
      </v-col>
      <v-col cols="2" md="1">
        <v-btn text @click="() => $router.push('/')">
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
        <v-menu offset-y close-on-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text large v-bind="attrs" v-on="on">
              <v-icon left> mdi-file </v-icon>
              Contratos
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
            <v-list-item-title>
              <v-btn text @click="() => $router.push('/contratos')"
                >Ver mais</v-btn
              >
            </v-list-item-title>
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
                <v-col cols="8">
                  <h2>Nome Imobiliaria</h2>
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
                      <v-btn text>
                        <v-icon v-bind="attrs" v-on="on"> mdi-trash-can </v-icon>
                      </v-btn>
                    </template>
                    <span>Excluir</span>
                  </v-tooltip>
                </v-col>
              </v-row>
              <v-col class="pa-3">
                <div>Email: exemplo@gmail.com</div>
                <div>Tel: (21)9999-9999</div>
              </v-col>
              <v-row justify="center" class="pt-3">
                <v-btn text @click="() => $router.push('/listagem-imoveis')">
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