<template>
  <div class="about">
    <h1>{{ header }} - {{ this.contactId }} </h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AddEditContact',
  components: {
  },
  data: function () {
    return {
      contacts: [] ,
      contactId: 0
    };
  },
  created() {
    //get contacts from vuex
    //this.contacts = $v.store.get.contacts
    this.contactId = this.$route.params.contactId * 1;
  },
  computed: {
    header: function() {
      return this.contactId == 0 ? "Add Contact" : "Edit Contact";
    }
  }
}
</script>

