# :nodoc
class Prime
  # rubocop:disable Style/PredicateName
  def self.is_prime(primes, i)
    (0..(primes.length - 1)).each do |j|
      return false if (i % primes[j]).zero?
    end
    true
  end

  def self.nth(n)
    raise ArgumentError, 'Prime is not possible' if n < 1
    primes = [2, 3, 5]
    i = 6
    while primes.length < n
      primes.push(i) if is_prime(primes, i)
      i += 1
    end
    primes[n - 1]
  end
end
