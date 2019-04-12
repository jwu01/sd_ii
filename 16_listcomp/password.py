# Jeffrey Wu
# SoftDev2 pd7
# K #16: Do You Even List?
# 2019-04-12

letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
nums = '0123456789'
special = '.?!&#,;:-_*'
def minimum(password):
    res = ['a' if x in letters ,'b' if x in letters.lower() else 'c' for x in password]
    return 'a' in parse and 'b' in parse and 'c' in parse
        

def strength(password):
    res = [0 if x in letters.lower(), 1 if x in letters, 2 if x in nums, 3 if x in special for x in password]
    return sum[res]//2