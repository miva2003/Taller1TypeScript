export class Serie {
    id;
    name;
    channel;
    seasons;
    description;
    url;
    image;
    constructor(id, name, channel, seasons, description, url, image) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
        this.image = image;
    }
}
