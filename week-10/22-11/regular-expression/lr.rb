# Usage: ruby lr.rb flintstones.txt
# # lines.each do |line|
# #puts line
# #end
# require "pry"
# binding.pry 
ARGF.each do |line|
    puts line if line =~ /(wilma.*fred|fred.*wilma)/ # or line =~ /fred/ && line =~ /wilma/          
    # with /.*/ will be match by anything between them//
end