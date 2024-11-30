import express from 'express';
import { Casino } from './casino.mjs';
import cors from 'cors'

const app = express();
const PORT = 3030;

app.use(cors());

/*app.listen(PORT, () => {
    console.log(`Ouvindo na Porta ${PORT}`);
});*/




app.get('/get-game',async(req,res)=>{

    const response = {}

    try{    

        const casino_instance = new Casino()
        await casino_instance.startClient()

        const game = await casino_instance.getGameBySlug(req.query.slug)

        response['game'] = game

    }catch(e){
        console.log(e)
        response['game'] = {}
    }

    res.json(response)
})

app.get('/get-games',async(req,res)=>{
    const response = {}

    try{    

        const casino_instance = new Casino()
        await casino_instance.startClient()

        const games = await casino_instance.getGames(req.query.page)

        response['games'] = games

    }catch(e){
        console.log(e)
        response['games'] = {}
    }

    res.json(response)
})

app.get('/search-games',async(req,res)=>{
    const response = {}

    try{    

        const casino_instance = new Casino()
        await casino_instance.startClient()

        const games = await casino_instance.searchGames(req.query.game)
        console.log(games)
        response['games'] = games

    }catch(e){
        console.log(e)
        response['games'] = {}
    }

    res.json(response)
})

export default app;