# # Scrabble Score

# Write a RUBY program that, given a word, computes the scrabble score for that word.

# ```ruby
# scrabble('cabbage');
# // => 14
# scrabble('cabbage'); // with b doubled, g tripled and a double word
# // => 48
# ```

# ## Letter Values

# ```plain
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# ```

# ## Extensions

# - You can play a `:double` or a `:triple` letter.
# - You can play a `:double` or a `:triple` word.

# ### Hint

# ```ruby

  def scrabble(word)
    points = {
        "a" => 1,
        "e" => 1,
        "i" => 1,
        "o" => 1,
        "u" => 1,
        "l" => 1,
        "n" => 1,
        "r" => 1,
        "s" => 1,
        "t" => 1,
        "d" => 2,
        "g" => 2,
        "b" => 3,
        "c" => 3,
        "m" => 3,
        "p" => 3,
        "f" => 4,
        "h" => 4,
        "v" => 4,
        "w" => 4,
        "y" => 4,
        "k" => 5,
        "j" => 8,
        "x" => 8,
        "q" => 10,
        "z" => 10,
    }

    puts word
    #creat a variable to store score
    score = 0
    #go letter by letter through word
    word.each_char do |letter|
        puts points[letter] # to check if its is working
        score += points[letter]

        
    end
    #check in points for a key 

    puts "#{word} is worth #{score} points."

  end
  print "Enter in a word to see score: "
  user_word= gets.chomp.downcase

  scrabble(user_word)
  #For extensions check the class solution on github