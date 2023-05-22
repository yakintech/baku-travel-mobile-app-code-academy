//CITY CONTROLLER
let getAllCitiesResponseModel = [
    {
        id: 1,
        name: 'İzmir',
        country: 'Türkiye'
    },
    {
        id: 2,
        name: 'İstanbul',
        country: 'Türkiye'
    },
    {
        id: 3,
        name: 'Atina',
        country: 'Yunanistan'
    }
]


let getCityByIdResponseModel = {
    id: 1,
    name: 'İzmir',
    country: 'Türkiye'
}


//Dışarıdan ( swaggerdan ) şehir adı ve countryId alacak. Eğer sistemde o countryId yoksa açıklamalı bir hata vermeli?
let addCityRequestModel = {
    name: 'Moskova',
    countryId: 9
}

//DISTRICT CONTROLLER
let getAllDistrictsResponseModel = [
    {
        id: 1,
        name: 'Beşiktaş',
        cityName: 'İstanbul',
        countryName: 'Türkiye'
    },
    {
        id: 2,
        name: 'Konak',
        cityName: 'İzmir',
        countryName: 'Türkiye'
    }
]


let GetDistrictById = {
    id: 1,
    name: 'Beşiktaş',
    cityName: 'İstanbul',
    countryName: 'Türkiye'
}


let category = {
    id: 2,
    name: 'Museum'
}

let place = {
    id: 1,
    name: 'Topkapı Sarayı',
    categoryId: 2
}



let getAllPlacesResponseModel = [
    {
        id: 1,
        name: 'Topkapı Sarayı',
        category: 'Museum'
    },
    {
        id: 2,
        name: 'Yerebatan Sarnıcı',
        category: 'Museum'
    },
    {
        id: 3,
        name: 'Kız Kulesi restonran',
        category: 'Restorant'
    }
]

let getPlaceById = {
    id: 1,
    name: 'Topkapı Sarayı',
    category: 'Museum'
}


let addPlaceRequestModel = {
    name: 'Resim Müzesi',
    categoryId: 5
}




let getAllContactResponseModel = [
    {
        id: 1,
        title: 'Ulaşım Sorunu',
        message: "Otobüs geçmiyor. Mekan kapalıymış...",
        webUserEMail: "a@a.com"
    },
    {
        id: 2,
        title: 'Kapalı',
        message: "Anlıyorum hocam",
        webUserEMail: "a@a.com"
    }
]


let getContactById = {
    id: 2,
    title: 'Kapalı',
    message: "Anlıyorum hocam",
    webUserEMail: "a@a.com"
}


let addContactRequestModel = {
    title: 'Kapalı',
    message: "Anlıyorum hocam",
    webUserId:1
}