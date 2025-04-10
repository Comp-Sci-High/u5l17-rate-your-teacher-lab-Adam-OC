// Add an event listener to the form that upon submits creates a new teacher
// When the teacher is created redirect to the teachers page
const teacherForm= document.getElementById("teacherForm")

teacherForm.addEventListener("submit", async(e)=>{
    e.preventDefault()

    const teacherData = new formData(teacherForm)
    const reqBody = Object.fromEntries(teacherData)

    const response = await fetch("/add/teacher",{
        method:"POST",
        headers:{
            "Context-Type":"application/json"
        },
        body:JSON.stringify(reqBody)
    })
    const data = await response.json()
    console.log(data)
    window.location.href = "/"
})