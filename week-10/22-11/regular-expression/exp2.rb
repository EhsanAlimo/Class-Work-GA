# Usage: ruby lr.rb flintstones.txt
# # lines.each do |line|
# #puts line
# #end
# require "pry"
# binding.pry 
ARGF.each do |line|
    puts line if line =~ /[Ff]red/
end