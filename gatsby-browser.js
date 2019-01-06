exports.onServiceWorkerUpdateFound = () => {
  const answer = window.confirm(
    `Lani Cooks has been updated. ` +
      `Would you like to reload the application to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
