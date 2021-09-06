<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 750px" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>      
          <q-toolbar-title>Forma de Pagamento</q-toolbar-title>         
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page padding>            
            <fieldset>
                <label for="">Descrição:</label><br />
                <input type="text" />
            </fieldset>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    label{
        font-size: 20px;
    }

    input{
        width: 700px;
        height: 30px;
        font-size:20px
    }
</style>