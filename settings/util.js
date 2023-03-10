function dataFormat(data, search = false) {
    let result = ""
    let first = data.split(' ')[0]
    let second = data.split(' ')[1]

    if(first.substr(-1, 1) == '시') {
        if(!first.match('제주')) {
            first = first.replace(/시$/, '')
            first = first.replaceAll('광역', '').replaceAll('특별', '') 
        }
        
    
        result = second == undefined ? first : first + " " + second
        console.log(result);
        return result
    } else {
        console.log(second == undefined ? first : second);
        return second == undefined ? first : second
    }

}

const CITYS = [
    [
        "종로구",
        "중구",
        "용산구",
        "성동구",
        "광진구",
        "동대문구",
        "중랑구",
        "성북구",
        "강북구",
        "도봉구",
        "노원구",
        "은평구",
        "서대문구",
        "마포구",
        "양천구",
        "강서구",
        "구로구",
        "금천구",
        "영등포구",
        "동작구",
        "관악구",
        "서초구",
        "강남구",
        "송파구",
        "강동구"
    ],
    [
        "중구",
        "동구",
        "서구",
        "영도구",
        "부산진구",
        "동래구",
        "연제구",
        "금정구",
        "북구",
        "사상구",
        "사하구",
        "강서구",
        "남구",
        "해운대구",
        "수영구",
        "기장군",
    ],
    [
        "중구",
        "동구",
        "미추홀구",
        "연수구",
        "남동구",
        "부평구",
        "계양구",
        "서구",
        "강화군",
        "웅진군"
    ],
    [
        "중구",
        "동구",
        "서구",
        "남구",
        "북구",
        "수성구",
        "달서구",
        "달성군",
    ],
    [
        "중구",
        "동구",
        "서구",
        "유성구",
        "대덕구",
    ],
    [
        "동구",
        "남구",
        "서구",
        "북구",
        "광산구"
    ],
    [
        "중구",
        "남구",
        "동구",
        "북구",
        "울주군"
    ],
    [
        "세종특별자치시"
    ],
    [
        "고양시",
        "과천시",
        "광명시",
        "광주시",
        "구리시",
        "군포시",
        "김포시",
        "남양주시",
        "동두천시",
        "부천시",
        "성남시",
        "수원시",
        "시흥시",
        "안산시",
        "안성시",
        "안양시",
        "양주시",
        "오산시",
        "용인시",
        "의왕시",
        "의정부시",
        "이천시",
        "파주시",
        "평택시",
        "포천시",
        "하남시",
        "화성시"
    ],
    [
        "강릉시",
        "동해시",
        "삼척시",
        "원주시",
        "속초시",
        "춘천시",
        "태백시"
    ],
    [
        "제천시",     
        "청주시",     
        "충주시" 
    ],
    [
        "계룡시",
        "공주시",
        "논산시",
        "당진시",
        "보령시",
        "서산시",
        "아산시",
        "천안시"
    ],
    [
        "경산시",
        "경주시",
        "구미시",
        "김천시",
        "문경시",
        "상주시",
        "안동시",
        "영주시",
        "영천시",
        "포항시"
    ],
    [
        "거제시",
        "김해시",
        "밀양시",
        "사천시",
        "양산시",
        "진주시",
        "창원시",
        "통영시"
    ],
    [
        "군산시",
        "김제시",
        "남원시",
        "익산시",
        "전주시",
        "정읍시"
    ],
    [
        "광양시",
        "나주시",
        "목포시",
        "순천시",
        "여수시"
    ],
    [
        "서귀포시",
        "제주시"
    ]

]

const AREA = [
    "서울특별시",
    "부산광역시",
    "인천광역시",
    "대구광역시",
    "대전광역시",
    "광주광역시",
    "울산광역시",
    "세종특별자치시",
    "경기도",
    "강원도",
    "충청북도",
    "충청남도",
    "경상북도",
    "경상남도",
    "전라북도",
    "전라남도",
    "제주특별자치도"
]