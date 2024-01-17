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

    const content = ref([
        {
            body: {
                title: 'EDUCATIONAL OPPORTUNITIES',
                text: `We are dedicated to supporting the needs of today's Travel Agents, and 
                        know that education is key to a profitable career in the industry. 
                        Each Forum provides agents with training from industry experts - 
                        covering the most relevant topics and advice to succeed.`
            },
            images: [
                'https://cdn.vuetifyjs.com/images/cards/docks.jpg', 
                'https://cdn.vuetifyjs.com/images/cards/hotel.jpg'
            ]  
        },
        {
            body: {
                title: 'TOOLS TO SUCCEED',
                text: `From branding and marketing strategies to destinations and technology
                        training, our full suite of events aims to help every Travel Agent 
                        and each stage of their career. Our large scale trade shows offers a 
                        little bit of everything. Our niche events for Specialists and Agency 
                        Owners streamline the way today’s Travel Agents can learn in one 
                        comprehensive 3-day event.`
            },
            images: [ 
                'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
                'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
            ]  
        },
        {
            body: {
                title: 'SUPPLIER ENGAGEMENT',
                text: `From branding and marketing strategies to destinations and technology
                        training, our full suite of events aims to help every Travel Agent 
                        and each stage of their career. Our large scale trade shows offers a 
                        little bit of everything. Our niche events for Specialists and Agency 
                        Owners streamline the way today's Travel Agents can learn in one 
                        comprehensive 3-day event.`
                    },
            images: [ 
                'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
                'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
            ]  
        },
        {
            body: {
                title: 'PRODUCT & DESTINATION TRAINING',
                text: `From branding and marketing strategies to destinations and technology
                        training, our full suite of events aims to help every Travel Agent 
                        and each stage of their career. Our large scale trade shows offers a 
                        little bit of everything. Our niche events for Specialists and Agency 
                        Owners streamline the way today's Travel Agents can learn in one 
                        comprehensive 3-day event.`,
            },
            images: [ 
                'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
                'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
            ]  
        },
    ])
    
    const headerText = ref({
        title: 'Why TravelSMG',
        text: `TravelSMG is the most trusted partner in bringing Suppliers and Travel 
        Agents face-to-face. With a proven track record in producing effective trade 
        shows and events, we've attracted the biggest names in leisure travel. Our 
        diverse portfolio caters to the travel professional community by tuning into the
        pulse of the industry`});
</script>

<template>
    <v-container no-gutters  class="mt-10">
        <PageHeader :content='headerText'/>

        <template v-for="(item, index) in content"> 
            <TextImageBlockLeft 
                v-if='index % 2'
                :pdata='item' 
                :bcolor="'bg-primary'"
            />
            <TextImageBlockRight  
                v-else
                :pdata='item' 
                :bcolor="'bg-secondary'"
            />
        </template>
    </v-container>

    <UpcomingEventsCarousel />

</template>

