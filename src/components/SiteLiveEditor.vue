<template>    
  <div class="w-full object-cover lg:h-18 bg-black">
    <div class="md:flex container mx-auto justify-between">
        <div class="py-2 m-auto">
          <h2 class="m-4
            text-2xl
            font-bold
            leading-7
            text-white
            sm:text-3xl sm:tracking-tight sm:truncate
          ">
            Site Live Editor
          </h2>
        </div>
        <div class="my-18 m-auto">
          <nav class="text-sky-400">
            <!-- This example requires Tailwind CSS v2.0+ -->
            <router-link to="/">Home</router-link> |
            <router-link to="/live/home">Home (LiveEdit)</router-link> |
            <router-link to="/admin">Admin</router-link>
          </nav>
        </div>
        <div class="py-8 m-auto">          
          <button type="button" class="
            inline-flex
            items-center
            px-4
            py-2
            border border-transparent
            rounded-md
            shadow-sm
            text-sm
            font-medium
            text-white
            bg-gray-600
            hover:bg-gray-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-offset-gray-800
            focus:ring-indigo-500
          ">
            Edit
          </button>
          <button type="button" class="
            ml-3
            inline-flex
            items-center
            px-4
            py-2
            border border-transparent
            rounded-md
            shadow-sm
            text-sm
            font-medium
            text-white
            bg-indigo-500
            hover:bg-indigo-600
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-offset-gray-800
            focus:ring-indigo-500
          ">
            Publish
          </button>
        </div>
      </div>
  </div>
</template>