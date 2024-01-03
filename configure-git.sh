#!/bin/bash

# Git Repository Configuration Script

# Set user name and email
git config user.name "LynneDC"
git config user.email "roselinedc1308@gmail.com"

# Set default editor (e.g., VS Code)
git config --global core.editor "code --wait"

# Set merge tool (e.g., VS Code's integrated merge tool)
git config --global merge.tool vscode

# Display updated configuration
echo "Git Configuration Updated:"
git config --list

# Create or update .gitignore file
echo -e "node_modules/\n.DS_Store" > .gitignore

echo "Git repository configuration completed."

