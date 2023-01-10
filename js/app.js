class app {
    constructor() {
        $.getJSON("./settings/list.json", function (e) {
            new search(e)
            new map(e)
        });
        new list()
    }



}

new app()