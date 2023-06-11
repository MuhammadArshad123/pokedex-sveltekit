<script>
    export let data
    let pokemon = data.props.pokemon;
    console.log(`data: ${data.props.pokemon.name}`)
</script>


<section class="flex justify-center">
    <div class="max-w-3xl mx-auto">
        <h1 class="font-bold text-3xl">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        <img src="{pokemon.sprites.front_default}" alt="">
        <ul class="list-none flex gap-1">
            <h2>Types</h2>
            {#each pokemon.types as type}
            <li>{type.type.name}</li>
            {/each}
            <h2>Height: {pokemon.height} decimetres</h2>
            <h2>Weight: {pokemon.weight} hectograms</h2>
        </ul>
    </div>
</section>
