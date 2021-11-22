# Usage: ruby lr.rb flintstones.txt
# # lines.each do |line|
# #puts line
# #end
# require "pry"
# binding.pry 
ARGF.each do |line|
    puts line if line =~ /[.]/  # or /\./ will do backslash is saping the meaning of the code ... check the video of 22-11 12:37pm
end