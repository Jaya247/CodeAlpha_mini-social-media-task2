const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';
function auth(req,res,next){
  const h=req.headers.authorization||'';
  const token=h.startsWith('Bearer ')?h.slice(7):null;
  if(!token) return res.status(401).json({message:'Login required'});
  try{ req.user=jwt.verify(token,SECRET); next(); }catch(e){ return res.status(401).json({message:'Invalid or expired token'}); }
}
module.exports={auth,SECRET};
