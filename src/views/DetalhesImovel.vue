<template>
  <div>
    <v-row>
      <v-col cols="3" md="7">
        <h1>Detalhes</h1>
      </v-col>
      <!-- Buscar Imovel Button-->
      <v-col cols="3" md="5" align="center" justify="center">
        <v-text-field
          v-model="search"
          clearable
          flat
          solo
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Buscar Imobiliárias"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-col>
      <!-- <v-col class="text-center">
        <span> <strong>Cond. Rio 2, B1, Apt 305</strong> </span>
      </v-col> -->
      <v-row>
        <v-col cols="12" sm="3">
          <div><strong>Endereço</strong></div>
          <div>{{imovel.street_name}}</div>
          <br />
          <div><strong>Numero</strong></div>
          <div>{{imovel.estate_number}}</div>
        </v-col>
        <v-col cols="12" sm="3">
          <div><strong>CEP</strong></div>
          <div>{{imovel.cep}}</div>
          <!-- <br />
          <div><strong>Local</strong></div>
          <div>Rio de Janeiro, RJ</div> -->
        </v-col>
        <v-col cols="12" sm="3">
          <div><strong>Proprietario</strong></div>
          <div>{{imovel.owner_name}}</div>
          <br />
          <div><strong>CPF</strong></div>
          <div>{{imovel.owner_cpf}}</div>
        </v-col>
        <v-col cols="12" sm="3">
          <div><strong>Inquilino</strong></div>
          <div>{{imovel.tenant_name}}</div>
          <br />
          <div><strong>CPF</strong></div>
          <div>{{imovel.tenant_cpf}}</div>
        </v-col>
      </v-row>
    </v-col>

    <!--Lista Documentos -->
    <div>
      <v-row>
        <v-col cols="6" sm="6">
          <h1>Documentos</h1>
        </v-col>
        <!-- v-if qnd for admin habilitar Enviar Doc -->
        <!-- accept=".txt, .pdf, .docx" -->
        <v-col cols="6" sm="3" align-self="center" class="text-center">
          <v-file-input prepend-icon="mdi-paperclip" @change="onFileSelected"></v-file-input>
        <!-- <input type="file" @change="onFileSelected"/> -->
        </v-col>
        <v-col cols="6" sm="3" align-self="center" class="text-center">
          <v-btn text @click="onUpload">
            <v-icon left>mdi-upload</v-icon>
            Enviar Documentos
          </v-btn>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <!-- v-for="(file, index) in fileInfos" :key="index" -->
        <!--  <a :href="file.url">{{ file.name }}</a> -->
        <v-col v-for="n in 6" :key="n" cols="12">
          <v-card class="pa-2 elevation-2" outlined>
            <v-row>
              <v-col cols="7" md="8" class="d-flex">
                <v-icon class="mx-1"> mdi-file-document </v-icon>
                <h2>Nome_Doc.pdf</h2>
              </v-col>
              <v-col cols="3" md="2">
                <div>Enviado: 05/10/22 14:25</div>
              </v-col>
              <v-col cols="3" md="2">
                <v-btn text>
                  <v-icon> mdi-download-outline </v-icon>
                </v-btn>
                <v-btn text>
                  <v-icon> mdi-trash-can-outline </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
//import { getEstates} from "../services/api";
export default {  
  data: () => ({
    imoveis:[],
       
    //selectedFile: null,
  }),
  computed:{
    imovel(){
      return this.$route.params.imovel
    }
  },
  methods:{
    
    // onFileSelected(e){
    //   console.log(e);
    //   this.seleectedFile = e;
    // },
    // onUpload(){
      
    // }
  }
};
</script>

<style>
</style>