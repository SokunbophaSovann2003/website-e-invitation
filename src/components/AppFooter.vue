<template>
    <footer class="bg-gray-50 pt-10 sm:max-w-xl md:max-w-full lg:max-w-screen md:px-16 w-full border-t-2 border-gray-100">
      <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 px-4">
        <div class="sm:col-span-2">
          <router-link to="/" aria-label="Go home" title="InviteMe" class="inline-flex items-center">
            <svg class="w-8 text-teal-600" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2"
              stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
              <rect x="3" y="1" width="7" height="12"></rect>
              <rect x="3" y="17" width="7" height="6"></rect>
              <rect x="14" y="1" width="7" height="6"></rect>
              <rect x="14" y="11" width="7" height="12"></rect>
            </svg>
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">InviteMe</span>
          </router-link>
          <div class="mt-6 lg:max-w-sm">
            <p class="text-sm text-gray-800">
              Create beautiful digital invitations for any occasion. Our designs are crafted with care to make your events memorable.
            </p>
            <p class="mt-4 text-sm text-gray-800">
              Customize every detail to match your style and preferences.
            </p>
          </div>
        </div>
        <div class="space-y-2 text-sm">
          <p class="text-base font-bold tracking-wide text-gray-900">Contacts</p>
          <!-- <div class="flex">
            <p class="mr-1 text-gray-800">Phone:</p>
            <a href="tel:123-456-7890" aria-label="Our phone" title="Our phone"
              class="transition-colors duration-300 text-teal-600 hover:text-teal-800">123-456-7890</a>
          </div> -->
          <div class="flex">
            <p class="mr-1 text-gray-800">Email:</p>
            <a href="mailto:info@inviteme.com" aria-label="Our email" title="Our email"
              class="transition-colors duration-300 text-teal-600 hover:text-teal-800">sokunbophasovann@gmail.com</a>
          </div>
          <div class="flex">
            <p class="mr-1 text-gray-800">Address:</p>
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address"
              title="Our address"
              class="transition-colors duration-300 text-teal-600 hover:text-teal-800">
              Phnom Penh City, Cambodia
            </a>
          </div>
        </div>
        <div>
          <span class="text-base font-bold tracking-wide text-gray-900">Social</span>
          <div class="flex items-center mt-1 space-x-3">
            <a href="https://twitter.com" target="_blank" class="text-gray-500 transition-colors duration-300 hover:text-teal-600">
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                <path
                  d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z">
                </path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" class="text-gray-500 transition-colors duration-300 hover:text-teal-600">
              <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path
                  d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z">
                </path>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" class="text-gray-500 transition-colors duration-300 hover:text-teal-600">
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                <path
                  d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z">
                </path>
              </svg>
            </a>
          </div>
          <p class="mt-4 text-sm text-gray-500">
            Follow us for design inspiration and special offers.
          </p>
        </div>
      </div>
      <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row px-4">
        <p class="text-sm text-gray-600">
          © Copyright 2023 InviteMe. All rights reserved.
        </p>
        <p class="text-sm text-gray-600">
          Ownership by: <b>Sokunbopha Sovann</b>
        </p>
        <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <!-- <li>
            <router-link to="/faq" class="text-sm text-gray-600 transition-colors duration-300 hover:text-teal-600">F.A.Q</router-link>
          </li> -->
          <li>
            <router-link to="/privacy-policy" class="text-sm text-gray-600 transition-colors duration-300 hover:text-teal-600">Privacy Policy</router-link>
          </li>
          <li>
            <router-link to="/terms-conditions" class="text-sm text-gray-600 transition-colors duration-300 hover:text-teal-600">Terms & Conditions</router-link>
          </li>
        </ul>
      </div>
    </footer>
  </template>
  
  <script setup>

  </script>