<template>
    <div class="px-4">
    <div class="row sticky-top">
        <div class="col-md-12">
            <h1 class="text_title">Últimos avisos</h1>
            <h2 class="text_subtitle">Veja abaixo os últimos avisos pela Administração</h2>
        </div>
    </div>
    <div class="row pt-4">
        <div class="col-12">
            <div class="card-list">
                <a href="#">
                    <div class="card notification">
                        <div class="card-header bg-transparent">dia</div>
                        <div class="card-body">
                            <h5 class="card-title">titulo</h5>
                            <p class="card-text">
                                texto
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
//
</script>

<style lang="css">
.notification {
    background: #FFECEF;
    padding: 5px;
    gap: 10px;
    border-radius: 16px;
    border: none;
    margin-bottom: 20px;
}

    .notification > .card-body .card-title {
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        text-align: left;
        color: #9A1B35;
    }

    .notification > .card-header {
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        text-align: left;
        color: #313131;
        border-bottom: none;
        padding-bottom: 0;
    }

    .notification > .card-body {
        font-family: Source Sans Pro;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        text-align: left;
        color: #313131;
    }
</style>