<!-- components/SearchBox.vue -->
<template>
    <div class="search-container">
        <input type="text" class="search-input" v-model="searchQuery" @input="search" placeholder="Search...">
        <ul v-show="searchQuery && searchResults.length" class="search-results">
            <li v-for="result in searchResults" :key="result.id" class="search-result">{{ result.title }}</li>
        </ul>
        <p v-show="searchQuery && !searchResults.length" class="no-results">No results found</p>
    </div>
</template>

<script>

export default {
    data() {
        return {
            searchQuery: '',
            searchData: [
                { id: 1, title: 'Example 1' },
                { id: 2, title: 'Example 2' },
                { id: 3, title: 'Example 3' }
                // Add more data as needed
            ]
        };
    },
    computed: {
        searchResults() {
            return this.searchData.filter(item =>
                item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    },
    methods: {
        search() {
            // You can perform additional actions here if needed
            console.log('Search query:', this.searchQuery);
        }
    }
};
</script>

<style scoped>
.search-container {
    position: relative;
}

.search-input {
    width: 500px;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 100px;

}

.search-results {
    list-style-type: none;
    padding: 0px;
    margin: 5px 0px;
    position: absolute;
}

.search-result {

    padding: 8px;
    background-color: #f9f9f9;
    border-radius: 5px;
    cursor: pointer;

}

.search-result:hover {
    background-color: #e9e9e9;
}

.no-results {

    padding: 8px;
    background-color: #f9f9f9;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
}
</style>