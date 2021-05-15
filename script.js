function updatemap(){
    fetch("data.json")
        .then(res => res.json())
        .then(res => {
            
            res.data.forEach(element => {
                var lon = element.longitude;
                var lat = element.latitude;
                var cases = element.infected;
                
                if(cases > 255){
                    col = "rgb(255,0,0)"
                }
                else{
                    col = `rgb(0,${cases},0)`
                }
                

                new mapboxgl.Marker({
                    color: col,
                    draggable: false
                    }).setLngLat([lon, lat])
                    .addTo(map);

            })
        })
}

updatemap()