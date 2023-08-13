import ErrorResponse from "../utils/errorResponse.js";

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  if (err.name === "CastError") {
    const message = `Resources not found ${err.value}}`;
    error = new ErrorResponse(message, 404);
  }

  //Mongoose duplicate values
  if (err.code === 11000) {
    const message = "Duplicate field value entered";
    error = new ErrorResponse(message, 400);
  }
  //Mongoose valiation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => " " + val.message);
    error = new ErrorResponse(message, 404);
  }
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "server error",
  });
};
export default errorHandler;
