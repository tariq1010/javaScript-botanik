const environment={
    // BACKEND_BASE_URL: "https://senshi.buildmydapp.co"
    BACKEND_BASE_URL: "http://localhost:8080"
}


if(process.env.REACT_APP_ENV==="development"){
    environment.BACKEND_BASE_URL= "http://localhost:8080"
}


if(process.env.REACT_APP_ENV==="production"){
    environment.BACKEND_BASE_URL= "http://localhost:8080"
}


if(process.env.REACT_APP_ENV==="staging"){
    environment.BACKEND_BASE_URL= "http://localhost:8080"
}


export default environment;