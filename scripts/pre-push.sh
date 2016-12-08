#!/bin/bash

PRE_SEMANTIC_RELEASE_COMMIT=`git rev-parse HEAD`

npm run semantic-release

POST_SEMANTIC_RELEASE_COMMIT=`git rev-parse HEAD`

if [ "$POST_SEMANTIC_RELEASE_COMMIT" == "$PRE_SEMANTIC_RELEASE_COMMIT" ]; then
  exit 0
fi

echo "New release commits detected..."

./node_modules/.bin/lerna updated

git push --follow-tags --no-verify # Push without hook (and including tags)

exit 0 # Return 0 just because we don`t want to see npm error message if we return 1. It causes useless but harmless second push.
