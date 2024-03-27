<template>
    <div :class="name">
        <div class="container">
            <ul class="col-span-full flex justify-end gap-x-6">
                <li>
                    <a href="/blog" class="text-lg">
                        Home
                    </a>
                </li>
                <li>
                    <!-- <a href="/about" class="text-lg">
                        About
                    </a> -->
                </li>
            </ul>
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
                name: 'c-navigation',
            }
        },
    }
</script>