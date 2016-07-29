# :nodoc
class Sieve
  def initialize(n)
    @n = n
  end

  def primes
    nums = (2..@n).inject({}) { |a, e| a.merge(e => true) }
    i = 2
    while i <= @n
      ((i + 1)..@n).each { |j| nums[j] = false if (j % i).zero? }
      i += 1
    end
    nums.keys.select { |k| nums[k] }
  end
end
