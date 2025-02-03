export const setCookies = (key, value, hours) =>{

    if(getCooketValue(key)) {
        console.log("Timer already exists");
        return
    };


    // console.log("Setting new values")
    const currentDate = new Date();
     currentDate.setTime(currentDate.getTime() + hours * 60 * 60 * 1000);
    const expiry = `expires = ${currentDate.toUTCString()}`;
    document.cookie = `${key} = ${value} ; ${expiry}; path = /`;
}


export const getCooketValue = (keyToGet) =>{
    const cookies = document.cookie.split('; ');
   
    //  console.log("Cookie ", cookies)
    for(let cookie of cookies)
    {
        const [key, value] = cookie.split("=");
        // console.log("Coo", cookie);
        if(keyToGet === key) return value;
    }

    return null;
}


export const  deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }



 export const getRemainingTimeOfACookie = (name) => {
    // Retrieve the expiration timestamp
    const cookies = document.cookie.split("; ");
    // console.log("A,", cookies)
    const expiresCookie = cookies
      .find(row => row.startsWith(`${name}_expires=`))
      ?.split("=")[1];
  
    if (!expiresCookie) {
        // console.log("No expiration")
      return null; // No expiration data available
    }
  
    // Calculate remaining time
    const currentTime = new Date().getTime();
    const expirationTime = parseInt(expiresCookie, 10);
    const remainingTime = expirationTime - currentTime;
  
    // If the cookie has expired
    if (remainingTime <= 0) {
      return true;
    }

     return remainingTime <= 0 ? true : false
  
    // Return the remaining time in a human-readable format
    // const seconds = Math.floor((remainingTime / 1000) % 60);
    // const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    // const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    // return `${hours}h ${minutes}m ${seconds}s remaining`;
  }
  
 
  