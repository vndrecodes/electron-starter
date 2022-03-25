#!/bin/bash


confirm_dir() {
  DIR=$1
  read -p "Delete $1 directory? " confirm
  case $confirm in
    y|yes )
    rm -rfv $1
      ;;
    * )
    echo "Abort"
    exit 1
  esac
}


# Change directory to project root
cd ..
echo $(pwd)
if [ ! $(node -v) ] || [ ! $(npm -v) ]; then
  echo "Either npm or node is missing!"
  echo "Abort"
  exit 1
fi

if [ -d ".git" ]; then
  echo "Deleting .git directory"
  confirm_dir ".git"
fi

echo "Running git init"
git init

if [ -f "package.json" ]; then
  echo "Deleting package.json"
  rm -rfiv package.json
fi

if [ -f "package-lock.json" ]; then
  echo "Deleting package-lock.json"
  rm -rfiv package-lock.json
fi

if [ -d "node_modules" ]; then
  echo "Deleting node_modules directory"
  confirm_dir "node_modules"
fi

npm init

if [ -d "package.json" ]; then
  echo "package.json not found!"
  echo "Abort"
  exit 1
fi

mv -v package.json package.old
sed '/"scripts": {/a\
    "start": "electron .",
' package.old > package.json
echo "Deleting package.old (new package.json created)"
rm -rfiv package.old

npm install --save-dev electron

echo "- FIN -"
