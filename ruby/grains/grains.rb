# :nodoc
class Grains
  def self.square(n)
    2**(n - 1)
  end

  def self.total
    tot = 0
    (1..64).each do |i|
      tot += square(i)
    end
    tot
  end
end
