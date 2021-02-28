module.exports = (req,res,next) => {
    console.log(req.body, '[body logger] req body');
    console.log(req.params, '[body logger] req params')
    console.log(req.query,  '[body logger] req query')
    next();
}