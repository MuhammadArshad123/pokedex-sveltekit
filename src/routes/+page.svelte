<script>
    let searchTerm = '';
    function handleFormSubmit() {
        const url = `/pokemon/${searchTerm}`;
        window.location.href = url;
    }
</script>

<section class="flex justify-center">
    <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold">Pokedex</h1>
        <form class="outline" on:submit|preventDefault={() => handleFormSubmit()} action="/pokemon/{searchTerm}">
            <input type="text" placeholder="Search..." bind:value={searchTerm} class="p-1">
            <button type="submit" class="bg-slate-200 p-1">Search</button>
        </form>
    </div>
</section>


