module BookKeeping
  VERSION = 3
end

# :nodoc
class Hamming
  def self.compute(a, b)
    raise ArgumentError, 'Lengths don\'t match' if a.length != b.length
    a.split('').each.with_index.inject(0) do |sum, (e, i)|
      sum + (e == b[i] ? 0 : 1)
    end
  end
end
