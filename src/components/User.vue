<template>
    <div class="row">
        <div class="col-2">
            <b-img slot="aside" blank blank-color="#ccc" width="42" alt="placeholder" rounded="circle"/> 
        </div>
        <div class="col-6">
            <div class="row">
                <b-link style="color:#9EC59E" href="#">{{username}}</b-link>
            </div>
            <div class="row">
                <h6 style="color:#C1CADE"> {{updatedAt}} </h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'User',
    props: [
        'username', 
        'updatedAt'
    ]
}
</script>

