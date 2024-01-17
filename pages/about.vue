<script setup lang="ts">
    useHead({
        title: 'Travel Show Marketing Group',
        meta: [
            {
                name: 'Travel Show Marketing Group',
                content: '#1 producer of travel industry events',
            },
        ],
    });

    const team = ref([
        {
            avatar: '',
            name:'Jim Cloonan',
            title:'CEO',
            email:'Jim@travelSMG.com'
        },
        {
            avatar: '',
            name:'Eric Cooper',
            title:'COO',
            email:'Eric@travelSMG.com'
        },
        {
            avatar: '',
            name:'Jennifer Fernandez',
            title:'VP Sales',
            email:'Jennifer@travelSMG.com'
        },
        {
            avatar: '',
            name:'Scott Camacho',
            title:'Director Technology',
            email:'Jim@travelSMG.com'
        },
        {
            avatar: '',
            name:'Nick LoPresto',
            title:'Business Development',
            email:'Nick@travelSMG.com'
        },
        {
            avatar: '',
            name:'Stephanie McKracken',
            title:'Marketing',
            email:'Stephanie@travelSMG.com'
        },
    ])
    
    const headerText = ref({
        title: 'About Travel Show Marketing Group',
        text: `TravelSMG is an independent event and trade show organizer exclusively serving the North
        American leisure Travel Agent community since 2009. TravelSMG produces one of the largest travel
        agent trade shows in North America, the Las Vegas Travel Agent Forum, in addition to other smaller,
        more exclusive programs designed to provide both niche and destination training.
        You can learn about our full suite of events here (link to event page).`});
</script>

<template>
    <v-container class="mt-10">
        <PageHeader :content='headerText'/>
        
        <v-row class='two-cols'>
            <template v-for="(member, index) in team">  
                  <TeamMember :member />
            </template>
        </v-row>
        
        <ContactForm />
           
    </v-container>

</template>

<style scoped>
    .five-cols {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }
    .two-cols {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
</style>
