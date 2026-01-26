let rect = document.querySelector("#center")

rect.addEventListener("mousemove", function(details){
   let rectangleLoccation = rect.getBoundingClientRect()
  let insiderect = details.clientX - rectangleLoccation.left
  

  if(insiderect<rectangleLoccation.width/2){
      console.log("left")
  }else{
    console.log("right")
  }
})