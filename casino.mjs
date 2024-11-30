import clientPromise from "./db.mjs";




export class Casino {
    
    client ;
    db;

    async startClient() {
        this.client = await clientPromise;
        this.db = this.client.db('Casino');
    }

    async  getGameBySlug(slug){

        let game  = await this.db.collection("Games").findOne({slug:slug})
        return game


    }

    async getGames(page) {
        const skip  = page * 15;
        const games = this.db.collection('Games');
        const result  = await games.find({}).skip(skip).limit(15).toArray();
        return result;
    }

    async searchGames(query){
        const terms = query.toLowerCase().split(' ')
        const games = this.db.collection('Games');
        const result  = await games.find({tags:{$all:terms}}).toArray();
        return result;

    }
}
