puts "what is the current temperature: "
temperature = gets.chomp
puts "Is the A/C is functional: "
functional = gets.chomp
puts "what is the desire temp: "
temp = gets.chomp
if functional == "yes" and temperature > temp
    puts "Turn on the A/C Please"
elsif functional == "no" and temperature > temp
    puts "Fix the A/C now! It's hot!"
elsif functional == "no" and temperature < temp
    puts "Fix the A/C whenever you have the chance... It's cool..."
    end