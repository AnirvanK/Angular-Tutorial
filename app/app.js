    // Code goes here

    'use strict';

    function greetingController($scope){
        var time = (new Date()).getHours();
        var tod = 'Good Morning';

        if (time > 9){
        tod = 'Good Late Morning';
        }

        if(time > 12){
        tod = 'Good Afternoon';
        }

        $scope.timeOfDay = tod;
        $scope.showGreeting = true;
    }

    function hotelsController($scope){
        
        var hotels = [{
        "id": "1",
        "name": "Taj Westend",
        "price": 17000,
        "location": "Race Course Road",
        "imgUrl": "kVIGWsz.jpg",
        "url": "http://www.theleela.com/",
        "availableForBook": false,
        "description": "Incoherently newt hound ",
        "area": 40000
    }, {
        "id": "2",
        "name": "Keys Hotel",
        "price": 8000,
        "location": "Whitefield",
        "imgUrl": "OqJMuy5.jpg",
        "availableForBook": true,
        "description": "Irresolutely and oh across wherever oh goodness more wallaby a some much reindeer octopus overcast howled far far honey tamarin a ouch inventoried distinct wombat egregious deceptive conservative alas.",
        "area": 20000
    }, {
        "id": "3",
        "name": "Leela Palace",
        "price": 20000,
        "location": "Old Airport Road",
        "imgUrl": "qA4PCDl.jpg",
        "availableForBook": true,
        "description": "Llama crab credible wow reproachfully brave apart dived rugged this hey luscious obediently pert taped smug crud learned thus arousingly or jeepers as before pill save jeez cunning jeez some pointed near house imprecise chose.",
        "area": 65000
    }, {
        "id": "4",
        "name": "Oberoi!!!",
        "price": 20000,
        "location": "Whitefield",
        "imgUrl": "qA4PCDl.jpg",
        "availableForBook": true,
        "description": "Llama crab credible wow reproachfully brave apart dived rugged this hey luscious obediently pert taped smug crud learned thus arousingly or jeepers as before pill save jeez cunning jeez some pointed near house imprecise chose.",
        "area": 198000
    }];

        $scope.hotels = hotels;
        $scope.addHotel = function(hotel){
            $scope.hotels.push(hotel);
            }       

        $scope.deleteHotel = function(hotel){
            for(var i = hotels.length - 1; i >= 0; i--){
                if (hotels[i].name == hotel.name){
                     delete hotels[i];
                }
            }
        }
    }
