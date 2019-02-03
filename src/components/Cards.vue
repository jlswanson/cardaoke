<template>
    <el-card :body-style="{ padding: 0 }">
        <img src="../assets/artist.png"/>
        <div class="bottom-content">
            <h2>Title</h2>
            <p>description</p>
        </div>
    </el-card>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import '../styles/colors.scss';

    .el-card {
        display: flex;
        flex-direction: column;
        border: 3px solid $global-blue;

        .bottom-content {
            margin-top: auto;
            padding: 2rem 1rem;
            text-align: center;
        }
    }
</style>