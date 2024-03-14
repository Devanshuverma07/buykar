const asyncHandler = fn =>  (req, res, next) => {
    // eslint-disable-next-line no-undef    
    Promise.resolve(fn(req, res, next)).catch(next);
}

export default asyncHandler;