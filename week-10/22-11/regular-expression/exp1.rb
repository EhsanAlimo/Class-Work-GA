# Usage: ruby lr.rb flintstones.txt
# # lines.each do |line|
# #puts line
# #end
# require "pry"
# binding.pry 
ARGF.each do |line|
    puts line if line =~ /fred/
end

# https://gist.github.com/wofockham/e3db2d0e21e7201f76a0
#exercis link above