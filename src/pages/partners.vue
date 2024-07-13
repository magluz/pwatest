<template>
    <div class="px-4">
        <div class="row sticky-top">
            <div class="col-md-12">
                <h1 class="text_title">Realização e patrocínio</h1>
                <h2 class="text_subtitle"></h2>
            </div>
            <div class="card-category">
                <div class="card active">
                    <div class="card-text">
                        <div class="title">Patrocínio</div>
                        <div class="subtitle">Ouro</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-text">
                        <div class="title">Patrocínio</div>
                        <div class="subtitle">Prata</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <!-- <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Carregando...</span>
                    </div>
                </div> -->

                <div class="card-partners">
                    <div v-for="(tile, i) in tiles" :key="i" :value="tile">
                        <a href="#" >
                            <img :src="tile.img" :alt="tile.title" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    sheet: true,
    tiles: [
      { img: 'https://epinneepb2024.com.br/wp-content/uploads/2024/04/logo_abrapp.png', title: 'Entrar como participante', link: 'participant' },
      { img: 'https://epinneepb2024.com.br/wp-content/uploads/2024/04/logo_icss.png', title: 'Programação completa', link: 'participant' },
      { img: 'https://epinneepb2024.com.br/wp-content/uploads/2024/04/logo_4um.png', title: 'Local do evento', link: 'participant' },
      { img: 'https://epinneepb2024.com.br/wp-content/uploads/2024/04/logo_arx.png', title: 'Mapa do evento', link: 'participant' },
      { img: 'https://epinneepb2024.com.br/wp-content/uploads/2024/04/logo_investments.png', title: 'Patrocínio', link: 'participant' },
      { img: 'https://epinneepb2024.com.br/wp-content/uploads/2024/04/logo_bahia.png', title: 'Informações gerais', link: 'participant' }
    ],
  }),
}
</script>

<style lang="css">

.card-category {
    display: grid;
    grid-auto-flow: column;
    overflow-x: auto;
    margin-bottom: 30px;
    grid-auto-columns: min-content;
}

    .card-category > .card {
        padding: 14px;
        gap: 0px;
        width: 110px;
        margin-right: 10px;
        border-radius: 16px;
        border: 1px solid #0A7696;
    }

    .card-category > .active {
        background: #0A7696;
        color: #fff;
    }

    .card-category .title {
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        text-align: center;
    }

    .card-category .subtitle {
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        text-align: center;
    }

.card-partners {
    padding: 16px;
    gap: 16px;
    border-radius: 16px;
    border: 2px;
    border: 2px solid var(--patrocnio-ouro, #D7B334);
    text-align: center;
    margin-bottom: 50px;
}

    .card-partners img {
        width: 100%;
        padding: 25px;
    }
</style>