<script lang="ts" setup>
//const isAuthenticated = $msal.isAuthenticated();
const isAuthenticated = false;
</script>

<template>
    ABC
    <button v-if="!isAuthenticated" @click="$msal.signIn()">Sign In</button>
    <button v-if="isAuthenticated" @click="$msal.signOut()">Sign Out</button>
</template>
