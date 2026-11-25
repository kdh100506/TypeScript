lecture_tools_dir="${ZDOTDIR:h}/.lecture-tools/node_modules"
unset ZDOTDIR
if [[ -r "$HOME/.zshrc" ]]; then
  source "$HOME/.zshrc"
fi
typeset -U path
path=("$lecture_tools_dir/.bin" "${path[@]}")
export npm_config_cache="$lecture_tools_dir/.npm-cache"
unset lecture_tools_dir
rehash
