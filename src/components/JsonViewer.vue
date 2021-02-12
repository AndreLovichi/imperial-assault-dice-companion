<template>
    <json-viewer
        :value="jsonData"
        copyable
        :expand-depth="3"
        expanded
        boxed
        sort
    />
</template>

<script>
export default {
    props: {
        jsonData: {
            type: Object,
            required: true
        }
    }
}
</script>