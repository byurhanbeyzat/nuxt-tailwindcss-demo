<template>
  <div>
    <Navbar />
    

    <div class="form-group">
      <input type="text" class="field" />
    </div>
  </div>
</template>

<script>
import CredentialEditor from '../components/CredentialEditor.vue'
import Navbar from '../components/Navbar.vue'

export default {
  components: { CredentialEditor, Navbar },
  data() {
    return {
      checkedCredentials: [],
      enableCredentialEditor: false,
      btnLoading: false,
    }
  },

 
}
</script>

<style scoped>

</style>
