const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
  };
  
  const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;
  
    //check for mongoose bad object id
    if(err.name === 'CastError' &&  err.kind == 'ObjectId'){
      message = `Resource not found`;
      statusCode = 400;
    }
    // NOTE: checking for invalid ObjectId moved to it's own middleware
    // See README for further info.
  
    res.status(statusCode).json({
      message: message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
  };
  
  export { notFound, errorHandler };
  