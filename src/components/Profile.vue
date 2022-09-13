<template>
  Profile
    <form class="form-widget" @submit.prevent="updateProfile">
      <div>
        <label for="email">Email</label>
        <input id="email" type="text" :value="supabaseStore.user.email" disabled />
      </div>
      <div>
        <label for="username">Name</label>
        <input id="username" type="text" v-model="username" />
      </div>
      <div>
        <label for="website">Website</label>
        <input id="website" type="website" v-model="website" />
      </div>
  
      <div>
        <input
          type="submit"
          class="button primary block"
          :value="loading ? 'Loading ...' : 'Update'"
          :disabled="loading"
        />
      </div>
  
      <div>
        <button class="button block" @click="signOut" :disabled="loading">
          Sign Out
        </button>
      </div>
    </form>
  </template>
  
  <script lang="ts">
    import { supabase } from '../supabase'
    import { supabaseStore } from '../supabaseStore'
    import { onMounted, ref } from 'vue'

    type Profiles = {
      id : string | number,
      username :  string,
      website :  string,
    }

    export default {
      setup() {
        const loading = ref(true)
        const username = ref('')
        const website = ref('')
        // const avatar_url = ref('')
  



        async function getProfile() {
          try {
            loading.value = true
            supabaseStore.user = supabase.auth.user()
            
            if( supabaseStore.user != null){
              console.log(supabaseStore.user )

            

            let { data, error, status } = await supabase
              .from<Profiles>('profiles')
              .select(`username, website`)
              .eq('id', supabaseStore.user.id)
              .single()
  
            if (error && status !== 406) throw error
  
            if (data) {
              username.value = data.username
              website.value = data.website
              // avatar_url.value = data.avatar_url
            }
          }
          } catch (error) {
            console.log(error)
            alert(error.message)
          } finally {
            loading.value = false
          }
        }
  
        async function updateProfile() {
          try {
            loading.value = true
            supabaseStore.user = supabase.auth.user()
  
            const updates = {
              id: supabaseStore.user.id,
              username: username.value,
              website: website.value,
              // avatar_url: avatar_url.value,
              updated_at: new Date(),
            }
  
            let { error } = await supabase.from('profiles').upsert(updates, {
              returning: 'minimal', // Don't return the value after inserting
            })
  
            if (error) throw error
          } catch (error) {
            alert(error.message)
          } finally {
            loading.value = false
          }
        }
  
        async function signOut() {
          try {
            loading.value = true
            let { error } = await supabase.auth.signOut()
            if (error) throw error
          } catch (error) {
            console.log(error)
            alert(error.message)
          } finally {
            loading.value = false
          }
        }
  
        onMounted(() => {
          getProfile()
        })
  
        return {
          supabaseStore,
          loading,
          username,
          website,
          // avatar_url,
  
          updateProfile,
          signOut,
        }
      },
    }
  </script>