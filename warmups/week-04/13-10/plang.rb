# Warmup - Raindrops
# Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) and output the following:
# If the number contains 3 as a factor, output 'Pling'.
# If the number contains 5 as a factor, output 'Plang'.
# If the number contains 7 as a factor, output 'Plong'.
# If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
# Examples
# 28 has 7 as a factor. In raindrop-speak, this would be a simple "Plong".
# 1755 has 3 and 5 as factors. In raindrop-speak, this would be a "PlingPlang".
# 34 has neither 3, 5 nor 7 as a factor. Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
# inquire 'pry'
 def raindrops (num)
    result = ""
    if num % 3 == 0
        result += "pling "
    end
    if num % 5 == 0
        result += "Plang "
    end
    if num % 7 == 0
        result += "Plong "
    end
    if result == ""
        result = num.to_s
    end
    puts result
end

# Another way .....
def menu
    puts "<><>"*25
    puts "Welcome to this program".center(50)
    print "[enter] to constinue and[q] to quit"
end 

menu 
choice = gets[0].downcase

until choice == "q"
    print "enter a number"
    num = gets.chomp.to_i
    raindrops(num)
end

raindrops(1);

raindrops(6);

raindrops(20);

raindrops(105);

