import express from 'express'
const app = express()
app.use(express.json())
let employeeDetails = [
    {id:1,name:"Aslam",department:"HR",salary:100000},
    {id:2,name:"Chetan",department:"Sales",salary:200000},
    {id:3,name:"Sagar",department:"Cyber",salary:300000},
]

app.get("/employees",(req,res)=>{
    res.status(200).json({
        "data":employeeDetails
    })
})

app.get("/employees/:id",(req,res)=>{
    const id = req.params.id
    const emp = employeeDetails.filter((emp)=>emp.id == id)
    if(emp){
        return res.status(200).json({
        "data":emp
    })
    }
    else{
        return res.status(404).json({
            "error":"Employee not found"
        })
    }
})

app.post("/employees",(req,res)=>{
    const {id,name,department,salary} = req.body
    const emp = {
        id,
        name,
        department,
        salary
    }
    employeeDetails.push(emp)
    return res.status(201).json({
        "message":"New employee created successfully",
        "data":emp
    })
})

app.put("/employees/:id",(req,res)=>{
    const id = req.params.id
    const {name,department,salary} = req.body
    let emp = employeeDetails.filter((employee)=>employee.id == id)
    emp = emp[0]
    if(emp){
        console.log(emp);
        
        if(name)emp.name=name
        if(department)emp.department=department
        if(salary)emp.salary=salary
    }
    return res.status(203).json({
        "message":"emplooyee data updated successfully",
        "data":emp
    })
})

app.delete("/employees/:id",(req,res)=>{
    const id = req.params.id
    employeeDetails = employeeDetails.filter((emp)=> emp.id != emp)
    res.status(200).json({
        "message":"Employee deleted successfully",
    })
})

app.listen(3500,()=>{console.log("server started")})
