console.log('this is the script file')

if(navigator.geolocation) {
    console.log("Location is available")
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
      });
  } else {
    console.log("Location not available")
  }

