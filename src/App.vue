<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Todos</router-link> |
      <router-link to="/ContactList">Contact List</router-link> |
      <router-link to="/AddEditContact">Change Contact</router-link>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
 body {
   font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
   line-height: 1.6;
   background: #e8f7f0
 }
 .container {
   max-width: 1100px;
   margin: auto;
   overflow: auto;
   padding: 0 2rem;
 }
</style>
