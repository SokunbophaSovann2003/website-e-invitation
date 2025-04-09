<template>
    <div class="py-10">
        <div class="container mx-auto px-4">
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-gray-800 mb-2">My Account</h1>
                <p class="text-gray-600">Manage your account information</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Navigation -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="flex items-center mb-6">
                            <div
                                class="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">
                                {{ userInitials }}
                            </div>
                            <div class="ml-4">
                                <h3 class="font-medium text-gray-900">{{ user.name }}</h3>
                                <p class="text-sm text-gray-500">{{ user.email }}</p>
                            </div>
                        </div>

                        <nav class="space-y-1">
                            <router-link to="/my-account"
                                class="block px-3 py-2 rounded-md text-base font-medium text-white bg-teal-600">
                                Account Overview
                            </router-link>
                            <router-link to="/my-designs"
                                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                                My Designs
                            </router-link>
                            <router-link to="/orders"
                                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                                Order History
                            </router-link>
                            <button @click="logout"
                                class="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                                Sign Out
                            </button>
                        </nav>
                    </div>
                </div>

                <!-- Account Details -->
                <div class="lg:col-span-2">
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <h2 class="text-xl font-semibold text-gray-800 mb-6">Account Information</h2>

                        <form @submit.prevent="updateAccount">
                            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label for="first-name" class="block text-sm font-medium text-gray-700">First
                                        name</label>
                                    <input id="first-name" v-model="form.firstName" type="text"
                                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
                                </div>

                                <div>
                                    <label for="last-name" class="block text-sm font-medium text-gray-700">Last
                                        name</label>
                                    <input id="last-name" v-model="form.lastName" type="text"
                                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
                                </div>

                                <div class="sm:col-span-2">
                                    <label for="email" class="block text-sm font-medium text-gray-700">Email
                                        address</label>
                                    <input id="email" v-model="form.email" type="email"
                                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
                                </div>

                                <div class="sm:col-span-2">
                                    <label for="current-password"
                                        class="block text-sm font-medium text-gray-700">Current Password</label>
                                    <input id="current-password" v-model="form.currentPassword" type="password"
                                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
                                </div>

                                <div>
                                    <label for="new-password" class="block text-sm font-medium text-gray-700">New
                                        Password</label>
                                    <input id="new-password" v-model="form.newPassword" type="password"
                                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
                                </div>

                                <div>
                                    <label for="confirm-password"
                                        class="block text-sm font-medium text-gray-700">Confirm Password</label>
                                    <input id="confirm-password" v-model="form.confirmPassword" type="password"
                                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
                                </div>
                            </div>

                            <div class="mt-8 border-t border-gray-200 pt-5">
                                <div class="flex justify-end">
                                    <button type="button"
                                        class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                        Cancel
                                    </button>
                                    <button type="submit"
                                        class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const authStore = useAuthStore()
        const router = useRouter()

        const user = ref({
            name: 'John Doe',
            email: 'user@example.com'
        })

        const form = ref({
            firstName: 'John',
            lastName: 'Doe',
            email: 'user@example.com',
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        })

        const userInitials = computed(() => {
            const names = user.value.name.split(' ')
            return names.map(name => name[0]).join('').toUpperCase()
        })

        const updateAccount = () => {
            // In a real app, you would update the user's account here
            alert('Account updated successfully!')
        }

        const logout = () => {
            authStore.logout()
            router.push('/login')
        }

        return {
            user,
            form,
            userInitials,
            updateAccount,
            logout
        }
    }
}
</script>