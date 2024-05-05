<template>
    <div id="splash_header"></div>
    <v-container class="fill-height">
        <v-responsive class="align-centerfill-height mx-auto">
            <v-img class="mb-4" height="150" src="@/assets/splash/XVIISTPC_MARCA_BRANCA.png" />
        </v-responsive>
    </v-container>
    <div id="splash_footer"></div>
</template>

<script setup>
</script>

<style scoped>
    #splash_header{
        background: url('@/assets/splash/HEADER.png') no-repeat;
        background-size: 100%;
        height: 220px;
        width: 100%;
    }

    #splash_footer{
        background: url('@/assets/splash/FOOTER.png') no-repeat;
        background-size: 100%;
        height: 130px;
        width: 100%;
    }
</style>