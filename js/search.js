class search {
    constructor(data) {
        this.data = data
        this.input = $('#searchInput')
        this.btn = $('#searchBtn')

        this.depth1 = $('#depth1')
        this.depth2 = $('#depth2')

        this.citys = {
            "시" : 11,
            "구" : 13,
            "군" : 15
        }


        this.addEvent()
    }

    addEvent() {
        this.btn.click(()=> {
            this.search()
        })

        this.input.keydown((e)=> {
            if(e.keyCode == 13) {
                this.search()
            }
        })

        this.depth1.change((e)=> {
            this.options(e.target.selectedIndex)
            this.selectSearch(this.depth1.val(), CITYS[e.target.selectedIndex][0])
        })

        this.depth2.change((e)=> {
            let city = e.target.options[e.target.selectedIndex].value
            this.selectSearch(this.depth1.val(), city)
        })
    }

    options(idx) {
        this.depth2.html("")
        CITYS[idx].forEach(e=> {
            let option = document.createElement('option')
            option.innerText = e
            option.value = e
            this.depth2.append(option)    
        })
    }

    selectSearch(cityBig , city) {
        this.input.val(cityBig + " " + city)

        let result = dataFormat(cityBig + " " + city)
        
        if(city == '세종특별자치시') {
            this.input.val(cityBig)
            result = '세종특별자치시'
        }
        let search = this.data.filter(e=> e['road'].includes(result))
        new list(search).list() 
        new map().map(search,result, 11)
    }

    search() {
        let inputData = this.input.val()
        if(this.findCity(inputData) != -1) {
            this.depth1.val(AREA[this.findCity(inputData)])
            this.options(this.findCity(inputData))
            this.depth2.val(inputData)
        } else {
            this.depth1.val('#2')
            this.depth2.html('')
            let option = document.createElement('option')
            option.innerText = inputData
            option.value = inputData
            this.depth2.append(option)
        }
        

        let city = inputData.substr(-1,1)
        if(this.citys[city] == undefined) {
            alert("시/군/구 중에 검색해주세요")
            return
        }
        
        let result = ""
        result = dataFormat(inputData)

        if(inputData == '세종특별자치시') {
            result = '세종특별자치시'
        }

        let zoom =  this.citys[city] == undefined ? 10 : this.citys[city]
        let search = this.data.filter(e=> e['road'].includes(result))
        if(search.length == 0) {
            alert('검색결과가 없습니다.')
            this.input.val('')
            return
        }
        
        new list(search).list()      
        new map().map(search,result, zoom)
    }

    findCity(data) {
        let i=0
        let result = -1
        CITYS.forEach(e=> {
            if(e.includes(data)) {
                result = i
            }
            i++
        })

        return result

    }


}