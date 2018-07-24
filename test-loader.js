module.exports = function (source) {
  source = source.replace(/^\/\/\slog/, 'console.log("log")')
  return source
}