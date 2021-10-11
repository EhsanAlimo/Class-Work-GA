# hello.rb to greet you
puts "Welcome to this program"

print "what is your name : "
name = gets.chomp
puts "Hello #{name}."
print "whats you surname: "
surname = gets.chomp
puts "you full name  is #{name.capitalize} #{surname.upcase}."