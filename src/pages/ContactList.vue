<template>
  <div class="home">
  <router-link :to="{ name: 'AddEditContact', params: { contactId: 0}}">Add Contact</router-link>
   <table v-if="hasContacts" :v-for="(index,contact) in this.contacts" :key="index">
     <tr>
       <th>Name</th>
       <th>Number</th>
       <th>Email</th>
     </tr>
     <tr>
       <td>{{ contact.name }}</td>
       <td>{{ contact.number }}</td>
       <td>{{ contact.email }}</td>
     </tr>
   </table>
   <p v-else>No contacts available</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ContactList',
  components: {
  },
  data: function () {
    return {
      contacts: [] 
    };
  },
  create() {
    //get contacts from vuex
    //this.contacts = $v.store.get.contacts
  },
  computed: {
    hasContacts: function() {
      return this.contacts.length > 0;
    }
  }
}
</script>
