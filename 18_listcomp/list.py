def pyth(n):
    return [(a,b,c) for a in range(1,n) for b in range(a,n) for c in range(b,n)
            if a*a + b*b == c*c]

print(pyth(15))

def quickSort(l):
    if (len(l)) < 1 :
         return l
    return quickSort([x for x in l[1:] if x < l[0]]) + [l[0]] + quickSort([x for x in l[1:] if x >= l[0]])

print(quickSort([1,3,6,3,2,1]))