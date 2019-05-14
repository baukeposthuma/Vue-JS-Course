<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <new-quote @quoteAdded="newQuote"></new-quote>
        <quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Click on a quote to delete it
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './Components/QuoteGrid.vue'
    import NewQuote from './Components/NewQuote.vue'
    import Header from './Components/Header.vue'

    export default {
        data: () => {
            return {
                quotes: [
                    'Just a quote to start with'
                ],
                maxQuotes: 10
            }
        },
        methods: {
            newQuote(quote) {
                if(this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete a quote first')
                }
                this.quotes.push(quote)
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1)
            }
        },
        components: {
            'app-header': Header,
            QuoteGrid,
            NewQuote
        }
    }
</script>

<style>
</style>
