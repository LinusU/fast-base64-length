const crypto = require('crypto')
const bas64Length = require('./')

{
  // Warmup
  const data = crypto.randomBytes(1024 * 1024)
  const encoded = data.toString('base64')
  const iterations = 100

  for (let i = 0; i < iterations; i++) bas64Length(encoded)
}

{
  const data = crypto.randomBytes(32 * 1024 * 1024)
  const encoded = data.toString('base64')
  const iterations = 10

  console.time('compute 32MB x10')
  for (let i = 0; i < iterations; i++) bas64Length(encoded)
  console.timeEnd('compute 32MB x10')
}

{
  const data = crypto.randomBytes(32)
  const encoded = data.toString('base64')
  const iterations = 10 * 1024 * 1024

  console.time(`compute 32B x10M`)
  for (let i = 0; i < iterations; i++) bas64Length(encoded)
  console.timeEnd(`compute 32B x10M`)
}
