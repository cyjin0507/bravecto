class list {
    constructor(data) {
        this.data = data
        this.area = $('#listArea')
    }

    addEvent() {
        $('.listDetail').click((e)=> {
            this.listFind(e)
        })
    }

    listFind(e) {
        $('.listDetail').css({
            'background-color': 'white',
            'color': 'black'
        })
        let list = this.data.filter(i=> i['location'] == e.target.dataset.loc)

        $(e.target).parent('.listDetail').css({
            'background-color': '#582c83bc',
            'color': 'white'
        })

        new map().map(list, $('#searchInput').val(), 11)
    }


    list() {
        $('#listInfo').html(`
            ${this.data.length}개의 동물병원에서 브라벡토를 만나보세요!
        `)

        this.area.html('')
        this.area.append(`
            <div class="listTitle">
                <div>업체명</div>
                <div>전화번호</div>
            </div>
        `)
        this.data.forEach(e => {
            this.area.append(`
                <div class="listDetail">
                    <div data-loc="${e.location}">${e.name}</div>
                    <div data-loc="${e.location}">${e.phone == 'undefined' ? '-': e.phone}</div>
                </div>
            `)
        })

        this.addEvent()

    }

}