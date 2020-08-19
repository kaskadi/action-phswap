if (!process.env.DUPLETS) {
  console.log('No environment variable found for DUPLETS, not proceeding to swap placeholders...')
} else {
  require('./helpers/install-dependencies.js')()
  const duplets = process.env.DUPLETS
  console.log(duplets)
}
