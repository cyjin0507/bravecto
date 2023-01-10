let check = true

class map {
    constructor(data) {
        if (!check) {
            return
        }
        check = false
        this.map(data, "대한민국")
    }


    map(data, txt = "", zoom = 7, bool = false) {
        let mapOptions = {
            zoom: zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };


        let map = new google.maps.Map(document.getElementById("map"),
            mapOptions);


        if (txt == '세종특별자치시') {
            map.setCenter({ lat: 36.48, lng: 127.29 });

        } else {
            let address = txt;

            let geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                } else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
        }




        let marker

        let i = 0

        let infoPop = []

        data.forEach(({ name, postal, road, phone, option1, option2, location }) => {
            let lat = parseFloat(data[i].location.split(',')[0].replaceAll('(', '').replaceAll(' ', ''))
            let lng = parseFloat(data[i].location.split(',')[1].replaceAll(")", '').replaceAll(' ', ''))

            marker = new google.maps.Marker({
                position: { lat, lng },
                i,
                map
            });

            let infowindow = new google.maps.InfoWindow();
            infoPop.push(infowindow)

            if(bool) {
                infoPop.forEach(e => {
                    e.close()
                })
                if (option1 == 1) {
                    infowindow.setContent(`
                        <div class="mapInfo">
                            <div class="info">
                                <div>업체명</div>
                                <div>${name}</div>
                            </div>
                            <div class="info">
                                <div>주소</div>
                                <div>${road}</div>
                            </div>
                            <div class="info">
                                <div>연락처</div>
                                <div>${phone == 'undefined' ? '-' : phone}</div>
                            </div>
                            <div class="icons">
                                <div>
                                    <img src="./settings/imgs/dog_icon.png" />
                                    <img src="./settings/imgs/cat_icon.png" />
                                </div>
                            </div>
                            <div class="btnGroup">
                                <button class="ok">지도보기</button>
                                <button class="ok">확인</button>
                            </div>
                        </div>
                    `);
                } else if (option1 == 0) {
                    infowindow.setContent(`
                        <div class="mapInfo">
                            <div class="info">
                                <div>업체명</div>
                                <div>${name}</div>
                            </div>
                            <div class="info">
                                <div>주소</div>
                                <div>${road}</div>
                            </div>
                            <div class="info">
                                <div>연락처</div>
                                <div>${phone == 'undefined' ? '-' : phone}</div>
                            </div>
                            <div class="icons">
                                <img src="./settings/imgs/dog_icon.png" />
                            </div>
                            <div class="btnGroup">
                                <button>지도보기</button>
                                <button>확인</button>
                            </div>
                        </div>
                    `);
                }

                

                setTimeout(()=> {
                    $('.ok').click(()=> {
                        infoPop.forEach(e => {
                            e.close()
                        })
                    })
                },100)

                infowindow.open(map, marker);
            }


            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {

                    infoPop.forEach(e => {
                        e.close()
                    })

                    if (option1 == 1) {
                        infowindow.setContent(`
                            <div class="mapInfo">
                                <div class="info">
                                    <div>업체명</div>
                                    <div>${name}</div>
                                </div>
                                <div class="info">
                                    <div>주소</div>
                                    <div>${road}</div>
                                </div>
                                <div class="info">
                                    <div>연락처</div>
                                    <div>${phone == 'undefined' ? '-' : phone}</div>
                                </div>
                                <div class="icons">
                                    <div>
                                        <img src="./settings/imgs/dog_icon.png" />
                                        <img src="./settings/imgs/cat_icon.png" />
                                    </div>
                                </div>
                                <div class="btnGroup">
                                    <button class="ok">지도보기</button>
                                    <button class="ok">확인</button>
                                </div>
                            </div>
                        `);
                    } else if (option1 == 0) {
                        infowindow.setContent(`
                            <div class="mapInfo">
                                <div class="info">
                                    <div>업체명</div>
                                    <div>${name}</div>
                                </div>
                                <div class="info">
                                    <div>주소</div>
                                    <div>${road}</div>
                                </div>
                                <div class="info">
                                    <div>연락처</div>
                                    <div>${phone == 'undefined' ? '-' : phone}</div>
                                </div>
                                <div class="icons">
                                    <img src="./settings/imgs/dog_icon.png" />
                                </div>
                                <div class="btnGroup">
                                    <button>지도보기</button>
                                    <button>확인</button>
                                </div>
                            </div>
                        `);
                    }

                    

                    setTimeout(()=> {
                        $('.ok').click(()=> {
                            infoPop.forEach(e => {
                                e.close()
                            })
                        })
                    },100)

                    infowindow.open(map, marker);
                }

            })(marker, i));


            i++


        });




    }



}