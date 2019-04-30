def repeat(str):
    def prints(freq):
        return str * freq
    return prints

print(repeat('cool')(3))

r1 = repeat('hello')
r2 = repeat('goodbye')

print(r1(2))
print(r2(2))


def outer():
    x = "foo"
    def inner():
        nonlocal x
        x = "bar"
    inner()
    return x

print(outer())


def make_counter():
    ctr = 0
    def count():
        nonlocal ctr
        ctr += 1
        return ctr
    return count
