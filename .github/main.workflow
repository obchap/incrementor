workflow "Run tests" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "Install dependencies" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "ci"
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install dependencies"]
  args = "test -- -no-watch"
}
