<template>
  <v-container>
    <v-responsive class="align-centerfill-height mx-auto">
      <v-bottom-sheet>
        <template v-slot:activator="{ props }">
          <v-row>
            <v-col class="d-flex align-center px-6" cols="10">
              Bem-vindo(a) ao nosso app!
            </v-col>
            <v-col class="d-flex align-center justify-center" cols="2">
              <v-btn v-bind="props" class="navbar-toggler">
              </v-btn>
            </v-col>
          </v-row>
        </template>


        <v-list class="rounded-t-xl">
          <v-list-subheader class="border-b-lg border-background">
            Menu
          </v-list-subheader>

          <v-list-item v-for="(tile, i) in tiles" :key="i" :value="tile" color="primary" @click="() => { this.$router.push({ path: tile.link }); props.modelValue = false; }">

            <template v-slot:prepend>
              <v-img :src="tile.img" width="40" class="px-2 mr-3"></v-img>
            </template>

            <v-list-item-title>{{ tile.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-bottom-sheet>
    </v-responsive>
  </v-container>

</template>

<script>
export default {
  data: () => ({
    sheet: true,
    tiles: [
      { img: new URL("@/assets/icons/icon_mn_participante.svg", import.meta.url).href, title: 'Entrar como participante', link: 'participant' },
      { img: new URL("@/assets/icons/icon_mn_programacao.svg", import.meta.url).href, title: 'Programação completa' },
      { img: new URL("@/assets/icons/icon_mn_local.svg", import.meta.url).href, title: 'Local do evento' },
      { img: new URL("@/assets/icons/icon_mn_mapa.svg", import.meta.url).href, title: 'Mapa do evento' },
      { img: new URL("@/assets/icons/icon_mn_patrocinio.svg", import.meta.url).href, title: 'Patrocínio' },
      { img: new URL("@/assets/icons/icon_mn_informacoes.svg", import.meta.url).href, title: 'Informações gerais' },
    ],
  }),
}
</script>

<style scoped>
.navbar-toggler {
    appearance: none;
    cursor: pointer;
    background: url("@/assets/icons/bi-menu.svg") no-repeat center/1.1rem rgba(255, 255, 255, 1);
    border-radius: 100px;
    box-shadow: 0px 4px #2F3D6F40;
    min-width: 35px;
    height: 35px !important;
    margin-bottom: 5px;
}

    .navbar-toggler:checked {
        background-color: rgba(255, 255, 255, 0.5);
    }

    .navbar-toggler:focus {
        opacity: 0.8;
        box-shadow: 0px 4px #2F3D6F40;
    }

.navbar-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    color: #313131;
}

.navbar-back {
    font-family: Source Sans Pro;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    text-decoration: none;
    padding-left: 10px;
    color: #313131;
}

    .navbar-back::before {
        display: inline-block;
        content: '';
        background: url('css/icons/bi-back.svg') no-repeat;
        width: 8.83px;
        height: 15px;
        gap: 0px;
        padding-right: 15px;
    }


.top-row {
    height: 4.8rem;
    background-color: #fff;
    border: none;
}

.navbar-brand {
    font-size: 1.1rem;
}

.nav-item {
    font-size: 0.9rem;
    padding-bottom: 0.2rem;
}

    .nav-item:first-of-type {
        padding-top: 1rem;
    }

    .nav-item:last-of-type {
        padding-bottom: 1rem;
    }

    .nav-item ::deep a {
        color: #d7d7d7;
        border-radius: 4px;
        height: 3rem;
        display: flex;
        align-items: center;
        line-height: 3rem;
    }

        .nav-item ::deep a.active {
            background-color: rgba(255,255,255,0.37);
            color: white;
        }

        .nav-item ::deep a:hover {
            background-color: rgba(255,255,255,0.1);
            color: white;
        }

.m-menu {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    margin: 0;
    padding: 0;
    pointer-events: none;
}

.m-menu__backdrop {
    z-index: 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    opacity: 0;
    transition: opacity 500ms ease-out;
    pointer-events: none;
}

.m-menu__content {
    z-index: 4;
    position: absolute;
    bottom: 0;
    overflow: auto;
    width: 100%;
    height: max-content;
    margin: 0;
    padding: 0 0 0.5rem 0;
    background: #0A7696;
    transform-origin: 0 0;
    transform: translateY(51.5rem);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    pointer-events: all;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.75);
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
}

.m-menu.active > .m-menu__content {
    transform: none;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

.m-menu.active > .m-menu__backdrop {
    background: #1D1D1D;
    opacity: 0.8;
    pointer-events: all;
}

.fixed-top {
    z-index: 30;
}

.fixed-android {
    top: auto;
}

.fixed-ios-bar {
    top: 35px;
}
</style>
