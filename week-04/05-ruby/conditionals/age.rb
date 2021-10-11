puts "What is your age: "
age = gets.chomp.to_i
if age < 18
    puts "You are not eligible to drive"
else
    puts "you can drive"
end