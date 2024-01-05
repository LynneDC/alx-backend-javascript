# Your GitHub username or organization name
USERNAME_OR_ORG="LynneDC"

# GitHub API endpoint for listing repositories
API_URL="https://api.github.com/users/$USERNAME_OR_ORG/repos?per_page=1000"

# Get the list of repositories
REPO_LIST=$(curl -s "$API_URL" | grep -o 'git@[^"]*')

# Loop through the list and clone each repository
for REPO_URL in $REPO_LIST; do
    REPO_NAME=$(basename -s .git "$REPO_URL")
    git clone "$REPO_URL"
done

