<template>
  <div>
    <div class="d-flex">
      <div style="flex: 0.9" class="d-flex justify-center">
        <h1>Bem-Vindo, Administrador</h1>
      </div>
      <div style="flex: 0.1" class="d-flex justify-center align-center">
        <v-btn> Sair </v-btn>
      </div>
    </div>
    <div class="d-flex pa-3 align-center">
      <v-text-field
        v-model="search"
        clearable
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Buscar Imobiliárias"
      ></v-text-field>
      <v-btn color="primary" depressed large class="mx-4"
        >Cadastrar Imobiliária</v-btn
      >
    </div>

    <!-- Nao tem Imobiliaria Cadatrados -->
    <!-- <div style="height:50vh;" class="d-flex justify-center align-center">
      <div class="d-flex text-center">
        <h1>Não há Imobiliárias cadastradas. <br> Aperte no botão acima para cadastrar um imobiliária</h1> 
      </div>
    </div> -->

    <!-- Tem Imobiliaria Cadatrada -->
    <div>
      <v-row>
        <v-col v-for="n in 3" :key="n" cols="12" sm="4">
          <v-card class="pa-2" outlined>
            <v-col>
              <v-row class="d-flex">
                <h1>Nome Imobiliaria</h1>
              </v-row>
              <v-row>
              <span>Email: exemplo@gmail.com</span> 
              <span>Tel: (21)9999-9999</span> 
              </v-row>
              <v-row>
                <v-btn>Imoveis</v-btn>
                <v-btn>Editar</v-btn>
                <v-btn>Excluir</v-btn>
              </v-row>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>