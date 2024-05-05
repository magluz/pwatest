<template>
   <v-bottom-sheet>
      <template v-slot:activator="{ props }">
        <v-row>
          <v-col cols="2"></v-col>
          <v-col class="d-flex align-center px-6" cols="6">
            Bem-vindo(a) ao nosso app!
          </v-col>
          <v-col class="d-flex align-center justify-center" cols="2">
            <v-btn v-bind="props" class="ma-2" color="white" icon>
              <v-icon icon="mdi-menu" size="x-large"></v-icon>
            </v-btn>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
      </template>

      
      <v-list class="rounded-t-xl">
        <v-list-subheader class="border-b-lg border-background">
            Menu
        </v-list-subheader>
        
        <v-list-item
          v-for="(tile, i) in tiles"
          :key="i"
          :value="tile"
          color="primary"
          
          @click="sheet = false">
          
          <template v-slot:prepend>
            <v-img :src="tile.img" width="40" class="px-2 mr-3"></v-img>
          </template>

          <v-list-item-title>{{ tile.title }}</v-list-item-title>
        </v-list-item>  
      </v-list>
    </v-bottom-sheet>
</template>

<script>
  export default {
    data: () => ({
      sheet: false,
      tiles: [
        { img: new URL("@/assets/icons/icon_mn_participante.svg", import.meta.url).href, title: 'Entrar como participante' },
        { img: new URL("@/assets/icons/icon_mn_programacao.svg", import.meta.url).href, title: 'Programação completa' },
        { img: new URL("@/assets/icons/icon_mn_local.svg", import.meta.url).href, title: 'Local do evento' },
        { img: new URL("@/assets/icons/icon_mn_mapa.svg", import.meta.url).href, title: 'Mapa do evento' },
        { img: new URL("@/assets/icons/icon_mn_patrocinio.svg", import.meta.url).href, title: 'Patrocínio' },
        { img: new URL("@/assets/icons/icon_mn_informacoes.svg", import.meta.url).href, title: 'Informações gerais' },
      ],
    }),
  }
</script>

<style scoped lang="sass">
 
</style>
