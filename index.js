const spam = {}

function isSpam(user) {
  const now = Date.now()

  if (!spam[user]) {
    spam[user] = {
      count: 1,
      time: now
    }
    return false
  }

  if (now - spam[user].time < 8000) {
    spam[user].count++
  } else {
    spam[user].count = 1
  }

  spam[user].time = now

  return spam[user].count >= 6
}

module.exports = { isSpam }
