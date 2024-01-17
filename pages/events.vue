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

    const eventList = ref([
        {
            name: "Las Vegas Travel Agent Forum",
            dates: "March 24 - 27, 2024",
            location: "Las Vegas, Nevada",
            property: "Paris Las Vegas Hotel Casino & Resort",
            img: "/img/LVTAF_Home_600x338.png",
            logo: "https://cmsvegas.travelsmg.com//uploads/Logo_LV_18cb109935.jpg",
            details: 'Our flagship event connecting nearly 1,000 Travel Agents with a global collective of over 300 Travel Suppliers.',
            link: 'https://www.travelagentforum.com',
            images: [ 
                'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
                'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
            ]  
        },
        {
            name: "Romance Travel Forum",
            dates: "May 6th - 9th, 2024",
            location: "Costa Mujeres, Mexico",
            property: "Secrets Playa Blanca",
            img: "/img/RTF_Home_600x338.png",
            logo: "https://cmsromance.travelsmg.com//uploads/Romance_Logo_300_2b36ce4f34.jpg",
            details: 'Our flagship event connecting nearly 1,000 Travel Agents with a global collective of over 300 Travel Suppliers.',
            link: 'https://www.travelagentforum.com',
            images: [ 
                'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
                'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
            ]  
        },
        {
            name: "European Travel Forum",
            dates: "October 21st – 24th, 2024",
            location: "Terceira Island The Azores, Portugal",
            property: "IHG Platinum",
            img: "/img/ETAF_Home_600x338.png",
            logo: "https://cmseurope.travelsmg.com/uploads/show_logo_46b0d9818e.png",
            details: 'Our flagship event connecting nearly 1,000 Travel Agents with a global collective of over 300 Travel Suppliers.',
            link: 'https://www.travelagentforum.com',
            images: [ 
                'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
                'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
            ]
        },
        {
            name: "Owners Travel Forum",
            dates: "October 21st – 24th, 2024",
            location: "Terceira Island The Azores, Portugal",
            property: "IHG Platinum",
            img: "/img/TAOF_Home_600x338.png",
            logo: "https://cmsowners.travelsmg.com/uploads/TA_Owners_Logo2023_300w_f3fea736e6.png",
            details: 'Our flagship event connecting nearly 1,000 Travel Agents with a global collective of over 300 Travel Suppliers.',
            link: 'https://www.travelagentforum.com',
            images: [ 
                'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
                'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
            ]  
        },
        {
            name: "Family Travel Forum",
            dates: "May 6th - 9th, 2024",
            location: "Costa Mujeres, Mexico",
            property: "Secrets Playa Blanca",
            img: "/img/FTAF_Home_600x338.png",
            logo: "https://cmsfamily.travelsmg.com//uploads/FTAF_Logo_300_60dc38f506.jpg",
            details: 'Our flagship event connecting nearly 1,000 Travel Agents with a global collective of over 300 Travel Suppliers.',
            link: 'https://www.travelagentforum.com',
            images: [ 
                'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
                'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
            ]  
        },
        {
            name: "Amazing Destination Experience",
            dates: "May 6th - 9th, 2024",
            location: "Costa Mujeres, Mexico",
            property: "Secrets Playa Blanca",
            img: "/img/ADE_Home_600x338.png",
            logo: "https://cmsade.travelsmg.com//uploads/ade_logo_bd3a3376e3.png",
            images: [ 
                'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
                'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
            ]
        } 
    ]);

    const headerText = ref({
        title: 'Our Full Suite of Events',
        text: `TravelSMG produces a variety of large-scale trade shows and niche 
                events to support the leisure travel industry - from both the 
                Supplier side and the Agent side. Each Forum offers extensive 
                engagement, networking, and educational opportunities.`});

</script>

<template>
    <v-container no-gutters  class="fluid mt-10">

        <PageHeader :content='headerText'/>

        <template v-for="(event, index) in eventList"> 
            <EventBlockTextLeft 
                v-if='index % 2'
                :event 
                :bcolor="'bg-primary'" />
            <EventBlockTextRight  
                v-else
                :event 
                :bcolor="'bg-secondary'"/>
           
        </template>
    </v-container>
</template>
