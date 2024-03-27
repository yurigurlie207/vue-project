<template>
    <div :class="name">
        <div class="mt-24 bg-gray">
            <div class="container">
                <div class="col-span-full">
                    <p class="text-white !py-20">Footer</p>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        props: {
            exampleProp: {
                type: String,
                default: () => '',
            },
        },
        data() {
            return {
                name: 'c-footer',
            }
        },
    }
</script>