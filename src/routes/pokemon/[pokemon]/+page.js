export async function load({ params }){
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);
        console.log(`Parameter is: ${params.pokemon}` )
        const post = await res.json();
        const pokemon = post;
        console.log(`Pokemon is: ${pokemon}`)
        return {
            props: {
                pokemon
            }
        }
    }catch(err){
        console.log(err);
    }
}