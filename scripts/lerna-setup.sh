#!/bin/bash

ROOT_PATH="$(dirname $(readlink -f $0))/.."

cd "$ROOT_PATH"

PACKAGES_DIR='packages'
if [ ! -d "$PACKAGES_DIR" ]; then
    echo "- Directory '$PACKAGES_DIR' does not exist"
    echo "=> Creating directory '$PACKAGES_DIR'"
    mkdir $PACKAGES_DIR
    echo "+ Directory '$PACKAGES_DIR' created"
else
    echo "= Directory '$PACKAGES_DIR' already exists"
fi

DIRS=(apps domain ui)

for dir in ${DIRS[*]}; do
    if [ -d "$ROOT_PATH/$dir" ]; then
        for module_dir in $(ls $dir); do
            if [ -d "$ROOT_PATH/$dir/$module_dir" ]; then
                if [ ! -L "$ROOT_PATH/$PACKAGES_DIR/$module_dir" ]; then
                    echo "=> Creating symlink $PACKAGES_DIR/$module_dir"
                    ln -s "$ROOT_PATH/$dir/$module_dir" "$ROOT_PATH/$PACKAGES_DIR/$module_dir"
                    echo "+ Symlink '$PACKAGES_DIR/$module_dir' created"
                else
                    echo "= Symlink '$PACKAGES_DIR/$module_dir' already exists"
                fi
            fi
        done
    fi
done

# To push tags automatically (We need to push release tags during semantic-release versioning]
git config --global push.followTags true
