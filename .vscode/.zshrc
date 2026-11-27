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

# Match the compiler used by the course tools for unversioned installs.
function npm {
  case "$1" in
    install|i|add)
      local action="$1" arg pinned=0
      local -a args
      shift
      while (( $# )); do
        arg="$1"
        shift
        if [[ "$arg" == typescript ]]; then
          arg=typescript@5.9.3
          pinned=1
        fi
        args+=("$arg")
      done
      if (( pinned )); then
        command npm "$action" --save-exact "${args[@]}"
        return
      fi
      command npm "$action" "${args[@]}"
      ;;
    *) command npm "$@" ;;
  esac
}
