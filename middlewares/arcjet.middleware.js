import aj from '../config/arcjet.js'

const arcjetMiddleware = async  (req, res, next) => {
    try{
        const ip =
          req.headers["x-forwarded-for"]?.split(",")[0] ||
          req.headers["x-real-ip"] ||
          req.socket?.remoteAddress ||
          "0.0.0.0";
        
        const decision = await aj.protect(req, { 
            requested : 1,
            ip,
        });

        if(decision.isDenied()){
            if(decision.reason.isRateLimit()) return res.status(429).json({ error : "Rate limit exceeded"});
            if(decision.reason.isBot()) return res.status(403).json({ error : "Bot detected"});

            return res.status(403).json({ error : "Access denied" }); 
            }
        
    next();
    } catch (error) {
        console.log(`Arject Middleware Error : ${error}`);
        next(error);
    }
}

export default arcjetMiddleware;
