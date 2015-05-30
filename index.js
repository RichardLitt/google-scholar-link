'use strict';

module.exports = function (query, options) {
  var author

  var url = 'https://scholar.google.com/scholar?'

  options = options || {}

  url += 'hl=' + (options.language ? options.language : 'en')
  if (options.citations) url += '&as_vis' + options.citations ? '0' : '1'
  if (options.patents) url += '&as_sdt' + options.patents ? '0,5' : '1,5'
  if (options.since) url += '&as_ylo=' + options.since

  // Add the query
  query = (typeof(query) !== 'string' ? null : query.replace(/ /g, '+'))
  query = '&q=' + (options.exact === 'false' ? query : '"' + query + '"')
  if (options.author) {
    author = typeof(author) === 'string' ? [options.author] : options.author
    query += '+author%3A' + author.join(encodeURIComponent(','))
  }

  return url + query
}