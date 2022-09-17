# score is set to 0
# counter for score which is set to 0
# ask the user for their name, variable is set to user's name
#  user is presented with the choice of rock paper or scissors
    # user makes a selection and computer also picks a move
    # randomly select a move for the computer
# rock beats scissors etc, if the same choice is made the game is a draw
# compare results to determine winner
# return the result of the game
# add one to the score of the winning player, if it's a draw don't add to the score
# counter increments to whichever player won

# win permutations [0] rock beats[2] scissors, [1] paper beats [0] rock, [2] scissors beats [1] paper
# lose permutations [0] rock loses to [1] paper, [1] paper loses to [2] scissors, [2] scissors loses to [0] rock
import random

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

playerScore = 0
computerScore = 0 
print(bcolors.OKBLUE+ "Player score is", playerScore)
print("Computer score is", computerScore)
invalid = "Invalid move, please select either rock, paper or scissors"

# class Result:
#     def __init__(move, result):
#         result.result = result
#         result.lose = lose
#         result.draw = draw
# print()

# win = Result("rock", "win")
#     win.result
username = input("What is your name? \n")
print(bcolors.OKBLUE+"Your name is " + username)
# if len(username)>0:
#     print('Yay!') 


while True: 
    moves = ["rock", "paper", "scissors"]

    def cpuMove():
        number = random.randint(0, 2)
        return(moves[number])



    playerMove = input(username + " choose your move - " +"rock, "+  "paper" +"or scissors? \n")
    if playerMove == moves[0] or playerMove == moves[1] or playerMove == moves[2]:
        print("Your selected move was " + playerMove)
        computerMove = cpuMove()
        # print(computerMove)
        if playerMove == computerMove:
            print(username, "You both selected ", playerMove, "so it's a draw! Your current score is", playerScore, "and the computer score is", computerScore)
        elif playerMove == moves[0] and computerMove == moves[2] or playerMove == moves[1] and computerMove == moves[0] or playerMove == moves[2] and computerMove == moves[1]:
            playerScore = playerScore + 1
            print(username, "Your move was: " + playerMove + ". Computer move was " + computerMove + ". You win!!! Your current score is", playerScore, "and the computer score is", computerScore)       
        elif playerMove == moves[0] and computerMove == moves[1] or playerMove == moves[1] and computerMove == moves[2] or playerMove == moves[2] and computerMove == moves[0]:
            computerScore = computerScore + 1
            print(username, "Your move was: " + playerMove + ". Computer move was: " + computerMove + ". You suck and Computer wins :( Your current score is", playerScore, "and the computer score is", computerScore)
    else: 
        print(bcolors.FAIL + invalid)

    playAgainResponse = input(bcolors.WARNING+"Would you like to exit game? y? \n") 
    if playAgainResponse == "y":
        print("bye bye see you again some other time")
        break