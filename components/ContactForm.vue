<script lang="ts" setup>

</script>
<template>
    <v-container>
        <v-container>
            <div align='center'>
                <h2>Contact Us</h2>
                <p>Have more questions? Tell us what you need and we'll respond with 2 business days</p>
            </div>
        </v-container>
        <v-form v-model="valid">
            <v-row>
                <v-col cols='6'>
                    <v-text-field label="First name" variant="outlined"></v-text-field>
                    <!-- <label for="firstName"></label> -->
                    <!-- <input 
                        ref="firstName"
                        type="text" 
                        class="form-control" 
                        name="firstName"  
                        placeholder="Enter first name"
                        value=""
                        > -->
                </v-col>
                <v-col cols='6'>
                    <v-text-field label="Last name" variant="outlined"></v-text-field>
                    <!-- <label for="lastName">Last name</label>
                    <input 
                    ref="lastName"
                    type="text" 
                    class="form-control" 
                    name="lastName" 
                    placeholder="Enter last name"
                    value=""> -->
                </v-col>
            </v-row>

            <v-row>
                <v-col cols='6'>
                    <v-text-field label="Company name" variant="outlined"></v-text-field>
                    <!-- <label for="Company" class="font-weight-bold">Company Name</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        name="Company" 
                        placeholder="Enter company name"
                        value="">  -->
                </v-col>
                <v-col cols='6'>
                    <v-text-field label="Email Address" variant="outlined"></v-text-field>
                    <!-- <label for="email" class="font-weight-bold">Email Address</label>
                    <input 
                        ref="email"
                        type="text" 
                        class="form-control"
                        name="email" 
                        placeholder="Enter email"
                        value=""
                    >  -->
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-textarea label="Your Message" variant="outlined"></v-textarea>
                    <!-- <label for="message">Your Message</label>
                    <textarea 
                        id="message" 
                        v-model="formData.message" 
                        name="message" 
                        title="message"
                        class="form-control" 
                    ></textarea>   -->
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <div class="text-right">
                    <v-btn class='bg-primary' flat>
                        <span class="mr-2 text-white">Submit Form</span>
                    </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<style scoped>
</style>

