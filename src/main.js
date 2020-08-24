if (!process.env.DUPLETS) {
  console.log('No environment variable found for DUPLETS, not proceeding to swap placeholders...')
} else {
  const duplets = process.env.DUPLETS
  console.log(duplets)
}
