require('dotenv').config();
const express=require('express'); const path=require('path'); const auth=require('./routes/auth'); const users=require('./routes/users'); const posts=require('./routes/posts');
const app=express(); const PORT=process.env.PORT||3000;
app.use(express.json()); app.use(express.urlencoded({extended:true})); app.use(express.static(path.join(__dirname,'public')));
app.get('/api/health',(req,res)=>res.json({ok:true,message:'Mini Social Media API is running'}));
app.use('/api/auth',auth); app.use('/api/users',users); app.use('/api/posts',posts);
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'public','index.html')));
app.listen(PORT,()=>console.log(`Mini Social Media Platform running at http://localhost:${PORT}`));
