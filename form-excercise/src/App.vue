<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <label for="firstname">Firstname</label>
                        <input
                            type="text"
                            id="firstname"
                            class="form-control"
                            v-model="userData.firstname">
                    </div>

                    <div class="form-group">
                        <label for="lastname">Lastname</label>
                        <input
                            type="text"
                            id="lastname"
                            class="form-control"
                            v-model="userData.lastname">
                    </div>

                    <div class="form-group">
                        <label for="email">email</label>
                        <input
                            type="email"
                            id="email"
                            class="form-control"
                            v-model="userData.email">
                    </div>

                    <div class="form-group">
                        <label for="password">password</label>
                        <input
                            type="password"
                            id="password"
                            class="form-control"
                            v-model="userData.password">
                    </div>

                    <div class="form-group">
                        <input
                            type="checkbox"
                            id="storeData"
                            v-model="storeData">
                        <label for="storeData">storeData?</label>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <button @click.prevent="isSubmitted = true">Submit</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.firstname + userData.lastname }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userData: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: ''
                },
                storeData: true,
                isSubmitted: false
            }
        }
    }
</script>

<style>
</style>
