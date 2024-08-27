import { Application,Request,Response,NextFunction } from "express"
export default (app:Application)=>{
app.get('/testRouting',(req,res)=>{
    res.json('test_ok')
})
}
