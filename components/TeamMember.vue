<script lang="ts" setup>
  const props = defineProps({
    member: {
        type: Object,
        required: true,
    }
});
const { member } = props;
</script>
<template>
    <v-col>
        <v-container no-gutter>
            <v-row >
                <v-col cols='3'>
                    <v-sheet>
                        <v-avatar
                            image="https://images.squarespace-cdn.com/content/v1/51ef4493e4b0561c90fa76d6/1667313793322-XYFXOZNRI4P0S4XXZQFA/20220324_SLP7286_edit.jpg"
                            size="100">
                        </v-avatar>
                    </v-sheet>
                </v-col>
                <v-col cols='auto'>
                    <v-sheet>
                        <span class='font-weight-bold '>{{member.name}}</span><br>
                        <span class=''>{{member.title}}</span><br>
                        <span  class='text-body'><a href='#' class='color-primary text-decoration-none'>{{member.email}}</a></span><br>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-col>
<!--     
    <v-container >
        <v-row  cols="3" no-gutters >
            <v-col cols="2">
                <v-sheet class="pa-2 ma-2">
                    <v-avatar
                        image="https://images.squarespace-cdn.com/content/v1/51ef4493e4b0561c90fa76d6/1667313793322-XYFXOZNRI4P0S4XXZQFA/20220324_SLP7286_edit.jpg"
                        size="100">
                    </v-avatar>
                </v-sheet>
            </v-col>
            <v-col>
                <v-sheet class="pa-2 ma-2 ml-n9" >
                    <span class='font-weight-bold text-h5'>{{member.name}}</span><br>
                    <span class='text-h6'>{{member.title}}</span><br>
                    <span  class='text-body'><a href='#' class='color-primary text-decoration-none'>{{member.email}}</a></span><br>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container> -->
</template>

<style scoped>
</style>
