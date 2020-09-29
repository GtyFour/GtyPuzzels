import os, zipfile

def add_file_to_zip(source_dir, zipf):
  pre_len = len(os.path.dirname(source_dir))
  for parent, dirnames, filenames in os.walk(source_dir):
    for filename in filenames:
      pathfile = os.path.join(parent, filename)
      arcname = pathfile[pre_len:].strip(os.path.sep)
      zipf.write(pathfile, arcname)

package_name = 'matatacode_blockly' + '_v1.0.0' + '.zip'
code_zip = zipfile.ZipFile(package_name, 'w')
code_zip.write('appengine/storage.js')
code_zip.write('page_main/main_compressed.js')
code_zip.write('javascript_compressed.js')
code_zip.write('python_compressed.js')
add_file_to_zip('icons',code_zip)
add_file_to_zip('media',code_zip)
add_file_to_zip('msg',code_zip)
add_file_to_zip('msg_code',code_zip)
add_file_to_zip('page_code',code_zip)
add_file_to_zip('generators',code_zip)
code_zip.close()
