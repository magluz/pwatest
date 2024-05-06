<template>
  <v-container class="d-flex align-start flex-row overflow-x-auto">
    <v-card width="135" class="ma-2 pa-2 text-center" v-for="(tile, i) in tiles" :key="i" :value="tile">
      <v-img :src="tile.img" width="40" class="px-2 m-2"></v-img>
      <v-card-text>
        {{ tile.title }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    sheet: false,
    selected: '',
    tiles: [
      { img: new URL("@/assets/icons/icon_mn_participante.svg", import.meta.url).href, title: 'Participante' },
      { img: new URL("@/assets/icons/icon_mn_programacao.svg", import.meta.url).href, title: 'Programação' },
      { img: new URL("@/assets/icons/icon_mn_mapa.svg", import.meta.url).href, title: 'Mapa' },
      { img: new URL("@/assets/icons/icon_mn_patrocinio.svg", import.meta.url).href, title: 'Patrocínio' }
    ],
  }),
}
</script>

<style scoped lang="sass">

</style>
