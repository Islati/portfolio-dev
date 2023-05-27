<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row align-content="center">
          <v-col cols="2">
            <slot name="sidebar">
              <sidebar-nav/>
            </slot>
          </v-col>

          <v-col cols="10">
            <slot/>
          </v-col>
        </v-row>


      </v-container>

    </v-main>
  </v-app>
</template>

<script setup lang="ts">

</script>
