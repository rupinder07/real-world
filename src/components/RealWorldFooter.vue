<template>
    <div class="footer">
        <div class="container">
            <span class="logo">conduit</span> An Interactive learning project from <a href="#">Thinkster</a>. Code & design licensed under MIT.
        </div>
    </div>
</template>


<script>
export default {
    name: 'RealWorldFooter'
}
</script>

<style>

    html {
        position: relative;
        min-height: 100vh;
        padding-bottom: 100px;
    }
    
    .footer{
        background: #f3f3f3;
        margin-top: 3rem;
        padding: 1rem 0;
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .logo {
        color: #5cb85c;
        font-family: titillium web,sans-serif;
        font-size: 1.5rem;
        padding-top: 0;
        margin-right: 2rem;
    }

</style>

