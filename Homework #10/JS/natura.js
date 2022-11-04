let universal = () => {
    let srt = document.getElementById("light").src;
    console.log(srt);

    if(srt == "file:///C:/Users/user/Desktop/Homework%20%2310/IMG/off.png"){
    document.getElementById("light").src="IMG/on.png";
}

else{
    document.getElementById("light").src="IMG/off.png";
}
}

