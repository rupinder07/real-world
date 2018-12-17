<template>
    <div class="container">
        <div class="banner">
            <h1>Hello</h1>
            <!-- <User :username='username' :updatedAt='updatedAt'/> -->
        </div>
    </div>
</template>

<script>

import User from '@/components/User'

export default {
    name: 'ArticleDetails',
    data() {
        return {
            username: 'Hello',
            updatedAt: 'now'
        }
    },
    props: [
        'article'
    ],
    components: {
        User
    }
}
</script>

