import ErrorHandler from "../utils/errorHandler.js";

const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';

  if (err.name == 'CastError') {
    const message = `Resource not found. Invalid ${err.path}`
    err = new ErrorHandler(message, 404)
  }
  res.status(statusCode).json({ err: err.message, success: false })
}
export default errorMiddleware;