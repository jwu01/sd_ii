def pyth(n):
    return [(a,b,c) for a in range(1,n) for b in range(a,n) for c in range(b,n)
            if a*a + b*b == c*c]

print(pyth(15))

def quickSort(l):
    piv = l[0]
    lower = [x for x in l if x < piv]
    upper = [y for y in l if x >= piv]
    return quickSort(lower) + p + quickSort(upper)
