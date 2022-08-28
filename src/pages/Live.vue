
<template>
  <div id="editor-content">
    <div id="sidebar-container">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex-1 flex flex-col min-h-0 bg-gray-800">
      <div class="content-center">
        <a class="logo-odi-floating text-center z-40 m-6 p-2 float-left rounded-lg bg-yellow-900 hover:bg-yellow-900 text-sm text-teal-300 font-extrabold outline hover:outline-offset-2 shadow-lg shadow-gray-500/40 hover:shadow-gray-500/40 "
          href="/live/home">
          Odi
        </a>
      </div>
      <div class="space-y-6 sm:px-0 lg:px-0 lg:col-span-9 leading-5">
      <form action="#" method="POST">
        <div class="shadow sm:overflow-hidden">
          <div class="bg-brack py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-100">Profile</h3>
              <p class="mt-1 text-sm text-gray-300">This information will be displayed publicly so be careful what you share.</p>
            </div>

            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3">
                <label for="company-website" class="block text-sm font-medium text-gray-200"> Username </label>
                <div class="mt-1 rounded-md shadow-sm flex">
                  <span class="bg-gray-50 py-2 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm">
                     odiwork.com/ </span>
                  <input type="text" name="username" id="username" autocomplete="username"
                  class="focus:ring-indigo-500 focus:border-indigo-500 flex-grow block w-full min-w-0 border rounded-none rounded-r-md 
                  sm:text-sm border-gray-300" />
                </div>
              </div>

              <div class="col-span-3">
                <label for="about" class="block text-sm font-medium text-gray-700"> About </label>
                <div class="mt-1">
                  <textarea id="about" name="about" rows="3" class="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com" />
                </div>
                <p class="mt-2 text-sm text-gray-300">Brief description for your profile. URLs are hyperlinked.</p>
              </div>

              <div class="col-span-3">
                <label class="block text-sm font-medium text-gray-300"> Photo </label>
                <div class="mt-1 flex items-center">
                  <span class="inline-block bg-gray-100 rounded-full overflow-hidden h-12 w-12">
                    <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <button type="button" class="ml-5 bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change</button>
                </div>
              </div>

              <div class="col-span-3">
                <label class="block text-sm font-medium text-gray-300"> Cover photo </label>
                <div class="mt-1 border-2 border-gray-300 border-dashed rounded-md px-6 pt-5 pb-6 flex justify-center">
                  <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-300">
                      <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-300">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-700 text-right sm:px-6">
            <button type="submit" class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
          </div>
        </div>
      </form>

        </div>

        <div class="flex-1 flex flex-col overflow-y-auto">
          <nav class="flex-1 px-2 py-4 space-y-1">
            <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
              <component :is="item.icon" :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
              {{ item.name }}
            </a>
          </nav>
        </div>
      </div>
    </div>
    
    <div id="editor-preview">
        <iframe src="/draft/home" class="h-auto iframe"></iframe>
    </div>
  </div>
</template>
<script setup>
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/vue/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
</script>

<script>
import { defineComponent } from "vue";
import TopNav from "../components/TopNav.vue";
export default defineComponent({
  components:{
    TopNav
  }
})
</script>
<style scoped>
#editor-content {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 40px;
    display: flex !important;
}
#sidebar-container {
    overflow: auto;
    background-color: black;
    margin-left:0px;
    transition: all 125ms ease;
    margin-left: 0px;
    width: 450px;
}
#editor-preview{
      width: 100%;
    display: flex;
    align-items: center;
      transition-duration: 0.25s;
}
#editor-preview iframe {
    border: none;
    overflow-y: scroll;
    max-width: 100%;
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
</style>