import random
import time


def binary_game(): ## Changed to a class to make it easier to call many times
    num1 = random.randint(0, 8) ## Generates a random number
    num2 = random.randint(0, 8) ## 16 is set as the max
    ## The next part of the code allows the generated number to be changed into binary
    ## .zfill is used to make sure that the number goes up to 6-bits
    binary1 = bin(num1)[2:].zfill(4) ## The string is sliced because the first two characters of the binary value were 0b
    binary2 = bin(num2)[2:].zfill(4) 
    answer = bin(num1 + num2)[2:].zfill(4) ## Takes a sum
    options = [answer]
    while len(options) < 4: ## Makes it so that only 4 choices are generated
        random_answer = bin(random.randint(0, 8))[2:].zfill(4)
        if random_answer not in options:
            options.append(random_answer)
    random.shuffle(options) ## Shuffles the answer choices
    print(f"{binary1} + {binary2} = ") ## Asks the question
    for i, option in enumerate(options): ## Shows the list number
        print(f"{i+1}. {option}")
    player_answer = int(input("Enter your answer choice: "))
    if options[player_answer-1] == answer:
        print(f"You answered {player_answer}, that is CORRECT!")
    else:
        print(f"INCORRECT. The answer is {answer}, you put {player_answer}")

start_time = time.time() ## starts timer
[binary_game() for x in range(10)] ## Calls function 10 times

print("--- %s seconds ---" % (time.time() - start_time))
