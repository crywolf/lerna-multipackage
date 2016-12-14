#!/bin/bash

GIT_BRANCH=`git symbolic-ref --short HEAD`

if [ "$GIT_BRANCH" != "master" ]; then
    echo "Branch: $GIT_BRANCH"
    exit 0
fi

echo "Branch: $GIT_BRANCH"
echo "Will run semantic release..."

# To push tags automatically (We need to push release tags during semantic-release versioning)
git config --global push.followTags true

PRE_SEMANTIC_RELEASE_COMMIT=`git rev-parse HEAD`

npm run semantic-release

POST_SEMANTIC_RELEASE_COMMIT=`git rev-parse HEAD`

if [ "$POST_SEMANTIC_RELEASE_COMMIT" == "$PRE_SEMANTIC_RELEASE_COMMIT" ]; then
    echo "No new release commit created."
    exit 0
fi

COMMITS_NUMBER=`git rev-list --count $PRE_SEMANTIC_RELEASE_COMMIT..$POST_SEMANTIC_RELEASE_COMMIT`

if [ "$COMMITS_NUMBER" -gt 1 ]; then
    echo "$COMMITS_NUMBER new release commits created."
else
    echo "$COMMITS_NUMBER new release commit created."
fi

exit 0
