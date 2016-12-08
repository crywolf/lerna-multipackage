#!/bin/bash

PRE_SEMANTIC_RELEASE_COMMIT=`git rev-parse HEAD`

npm run semantic-release

POST_SEMANTIC_RELEASE_COMMIT=`git rev-parse HEAD`

if [ "$POST_SEMANTIC_RELEASE_COMMIT" == "$PRE_SEMANTIC_RELEASE_COMMIT" ]; then
  echo "No new release commit detected..."
  exit 0
fi

COMMITS_NUMBER=`git rev-list --count $PRE_SEMANTIC_RELEASE_COMMIT..$POST_SEMANTIC_RELEASE_COMMIT`

if [ "$COMMITS_NUMBER" -gt 1 ]; then
    echo "$COMMITS_NUMBER new release commits detected..."
else
    echo "$COMMITS_NUMBER new release commit detected..."
fi

git push --follow-tags --no-verify # Push without hook (and including tags)

exit 0 # Return 0 just because we don`t want to see npm error message if we return 1. It causes useless but harmless second push.
