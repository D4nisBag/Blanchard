ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map__container", {

            center: [55.75846806898367, 37.60108849999989], 
            zoom: 14, 
            controls: ['geolocationControl', 'zoomControl']
        },
        {
            suppressMapOpenBlock: true,
            geolocationControlSize: "large",
            geolocationControlPosition:  { top: "350px", right: "10px" },
            geolocationControlFloat: 'none',
            zoomControlSize: "small",
            zoomControlFloat: "none",
            zoomControlPosition: { top: "270px", right: "10px" }
        }
        );
        myMap.behaviors.disable('scrollZoom');
        const myPlacemark = new ymaps.Placemark(
            [55.75846806898367, 37.60108849999989],
            {},
            {
              iconLayout: "default#image",
              iconImageHref: "img/mark.svg",
              iconImageSize: [20, 20],
              
            }
          );
          myMap.geoObjects.add(myPlacemark);
        
    }