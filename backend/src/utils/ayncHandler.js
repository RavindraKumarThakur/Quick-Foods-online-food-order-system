export const asyncHandler = (func) => async (req, res, next) => {
    try{
        await func(req, res,next);
    }catch(err)
    {
        res.status(err.code || 500).json({
            Success: false,
            message: err.message
        })
    }
}