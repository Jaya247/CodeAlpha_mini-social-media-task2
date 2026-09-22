const express=require('express'); const {read,write}=require('../db'); const {auth}=require('../middleware/auth');
const router=express.Router();
const safe=u=>({id:u.id,name:u.name,email:u.email,bio:u.bio,avatar:u.avatar,createdAt:u.createdAt});
router.get('/:id',(req,res)=>{const db=read();const u=db.users.find(x=>x.id===req.params.id);if(!u)return res.status(404).json({message:'User not found'});const followers=db.follows.filter(f=>f.to===u.id).length,following=db.follows.filter(f=>f.from===u.id).length;res.json({user:safe(u),followers,following});});
router.post('/:id/follow',auth,(req,res)=>{const db=read();const target=db.users.find(u=>u.id===req.params.id);if(!target)return res.status(404).json({message:'User not found'});if(target.id===req.user.id)return res.status(400).json({message:'You cannot follow yourself'});const i=db.follows.findIndex(f=>f.from===req.user.id&&f.to===target.id);if(i>=0)db.follows.splice(i,1);else db.follows.push({from:req.user.id,to:target.id});write(db);res.json({following:i<0});});
module.exports=router;
