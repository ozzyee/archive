#!/usr/bin/env bash

source "bin/colours.sh"

componentFile () {
   cat > "$1" <<- EOF
import React from "react";
import { T$2Props } from "./$3.definition";
import * as S from "./$3.style" ;

export function $2 ({  }: T$2Props) {
  return (
    <S.$2View>
    </S.$2View>
  );
}
EOF
}

definitionFile() {
  cat > "$1" <<- EOF
export type T$2Props = {

}
EOF
}

styleFile() {
  cat > $1 <<- EOF
import styled from "styled-components\/native";

export const $2View = styled.View\`\`

EOF
}

component () {
componentsDir="assets/components/$3"
path="$componentsDir/$1"

# Array of files to be created
files=("$1.component.tsx" "$1.style.ts" "$1.definition.ts")
echo Generating $3 component... 

# Check for arguments
if [ $# -eq 3 ]; then
  # check to see if the file already exists
  if [ -d "$path" ]; then
    echo "${LRED}This component already exists, please try another name${RESTORE}"
    exit 1
  else
    echo "Creating $1 in ${LCYAN}$path${RESTORE}"
    mkdir "$path"
    echo "Creating files:"
    for file in "${files[@]}"
        do
            echo "${LCYAN}$file..."
            touch "$path/$file"
            case "$file" in
                "$1.component.tsx")
                componentFile "$path/$file" "$2" "$1"
                ;;
                "$1.definition.ts")
                definitionFile "$path/$file" "$2"
                ;;
                "$1.style.ts")
                styleFile "$path/$file" "$2" "$1"
                ;;
            esac
        done

    echo "${LGREEN}Finished!${RESTORE}"
    echo "Check the output and have a nice day Ozzy :)!"
  fi
else
  echo "${LRED}This generator requires a file name ( [kebab-cased] ) and a component name ( [CamelCased] )...${RESTORE}"
  exit 1
fi

exit 0
}