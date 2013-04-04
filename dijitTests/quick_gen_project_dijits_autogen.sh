#!/bin/sh
export script_type="autogen"
export EX_DEV="~/.ex_dev"
export cwd=${PWD}
export toolkit_path=/Users/gary/.toolkit
export lang_type="javascript html xml"
export vimfiles_path=".vimfiles.dijits"
export file_filter="js|json|html|htm|xml|css"
export file_filter_pattern='\\.js$|\\.json$|\\.html$|\\.htm$|\\.xml$|\\.css$'
export cscope_file_filter=""
export cscope_file_filter_pattern=''
export dir_filter=""
export support_filenamelist="true"
export support_ctags="true"
export support_symbol="true"
export support_inherit="true"
export support_cscope="false"
export support_idutils="true"
export ctags_cmd="ctags"
export ctags_options=" --fields=+iaS --extra=+q --languages=javascript,html, --langmap=javascript:+.as,"
if [ -f "./${vimfiles_path}/quick_gen_project_pre_custom.sh" ]; then
    sh ./${vimfiles_path}/quick_gen_project_pre_custom.sh
fi
sh ${toolkit_path}/quickgen/bash/quick_gen_project.sh $1
if [ -f "./${vimfiles_path}/quick_gen_project_post_custom.sh" ]; then
    sh ./${vimfiles_path}/quick_gen_project_post_custom.sh
fi
