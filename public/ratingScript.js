// Add an event listener to the form that upon submits creates a new rating
// When the rating is created redirect to the ratings page
const ratingForm= document.getElementById("ratingForm")

ratingForm.addEventListener("submit", async(e)=>{
    e.preventDefault()

    const ratingData = new formData(ratingForm)
    const reqBody = Object.fromEntries(ratingData)

    const response = await fetch("/add",{
        method:"POST",
        headers:{
            "Context-Type":"application/json"
        },
        body:JSON.stringify(reqBody)
    })
    const data = await response.json()
    console.log(data)
})