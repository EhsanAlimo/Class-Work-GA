# # Is this a triangle? 
# ### Task:
# Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

# ### Examples
# ```
#   is_triangle(1,2,2) #true
#   is_triangle(5,1,2) #false
#   is_triangle(4,2,3) #true
# ```

# ## Bonus
# Make it pretty and create a menu that will allow for user input


# print "first side length: "
# one = gets.chomp.to_i
# print "seconf side length: "
# two = gets.chomp.to_i
# print "third side length: "
# three = gets.chomp.to_i
# if((one + two) >= three) and ((two + three) >= one) and ((three+one) >= two)
#     puts "true"
# else 
#     puts "false"

# end
#Second way is below
def is_triangle (a, b, c)
    puts a+b>c && b+c>a && a+c>b
end
is_triangle(1,2,2) 
is_triangle(5,1,2) 
is_triangle(4,2,3)
# third 
def is_triangle (a, b, c)
    max = [a,b,c].max
    sum a+b+chompputs sum-max > max
end 
